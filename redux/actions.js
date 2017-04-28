import {
  signInWithPasswordAndPhrase,
  signUpWithPassword,
  deserialize
} from "../lib/keystore";

export const initialize = () => async dispatch => {
  dispatch(listenForMessages());
  const hasKeystore = localStorage.getItem("keystore");
  if (hasKeystore) {
    const keystore = deserialize(hasKeystore);
    dispatch(update({ keystore, signedIn: true }));
  }
  dispatch(update({ initialized: true }));
};

const listenForMessages = () => (dispatch, getStore) => {
  window.addEventListener(
    "message",
    async event => {
      const { requestType } = getStore();
      if (requestType) {
        return;
      }
      // TODO: make sure origin is secure (https)
      if (event.origin.substring(0, 5) !== "https") {
        console.log("error, not secure");
      }
      switch (event.data.type) {
        case "inventory:ping":
          event.source.postMessage(
            { type: "inventory:ping-received" },
            event.origin
          );
          break;
        case "inventory:request-tx-signature": {
          const tx = event.data.tx;
          dispatch(
            update({
              tx,
              origin: event.origin,
              source: event.source,
              requestType: "transaction"
            })
          );
          break;
        }
        case "inventory:authentication": {
          dispatch(
            update({
              origin: event.origin,
              source: event.source,
              requestType: "authentication"
            })
          );
          break;
        }
      }
    },
    false
  );
};

export const update = fields => ({
  type: "UPDATE",
  fields
});

export const signIn = (password, phrase) => async dispatch => {
  const keystore = await signInWithPasswordAndPhrase(password, phrase);
  localStorage.setItem("keystore", keystore.serialize());
  dispatch(update({ keystore, signedIn: true }));
};

export const signUp = password => async dispatch => {
  const { keystore, seedPhrase } = await signUpWithPassword(password);
  localStorage.setItem("keystore", keystore.serialize());
  dispatch(update({ showPhrase: true, keystore, phrase: seedPhrase }));
};

export const signTransaction = password => async (dispatch, getStore) => {
  const { keystore, tx, source, origin } = getStore();
  try {
    keystore.passwordProvider = callback => callback(null, password);
    const signed = await new Promise((resolve, reject) =>
      keystore.signTransaction(tx, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      })
    );
    source.postMessage(
      { type: "inventory:transaction-signed", signed: signed },
      origin
    );
    window.close();
  } catch (e) {
    switch (e.message) {
      case "Incorrect derived key!":
        dispatch(update({ notification: "Incorrect password" }));
      case "KeyStore.exportPrivateKey: Address not found in KeyStore":
        source.postMessage(
          { type: "inventory:error", message: "incorrect address" },
          origin
        );
        window.close();
      default:
        dispatch(update({ notification: e.message }));
    }
  }
};

export const rejectTransaction = () => (dispatch, getStore) => {
  const { source, origin } = getStore();
  source.postMessage({ type: "inventory:error" }, origin);
  window.close();
};

export const approveAuthentication = password => async (dispatch, getStore) => {
  const { keystore, source, origin } = getStore();
  try {
    const pwdDerivedKey = await new Promise((resolve, reject) =>
      keystore.keyFromPassword(password, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      })
    );
    const correctPassword = keystore.isDerivedKeyCorrect(pwdDerivedKey);
    if (correctPassword) {
      const addresses = keystore.getAddresses();
      const address = addresses[0];
      source.postMessage(
        { type: "inventory:authenticated", address: `0x${address}` },
        origin
      );
      window.close();
    }
    dispatch(update({ notification: "Incorrect password" }));
  } catch (e) {
    dispatch(update({ notification: e.message }));
  }
};

export const rejectAuthentication = () => (dispatch, getStore) => {
  const { source, origin } = getStore();
  source.postMessage({ type: "inventory:error" }, origin);
  window.close();
};
