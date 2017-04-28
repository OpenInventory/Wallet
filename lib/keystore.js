import lightwallet from "eth-lightwallet";

const createVault = async (password, seedPhrase, hdPathString) => {
  const keystore = await new Promise((resolve, reject) => {
    lightwallet.keystore.createVault(
      { password, seedPhrase, hdPathString },
      (err, ks) => {
        if (err) {
          reject(err);
        }
        resolve(ks);
      }
    );
  });
  return keystore;
};

const keyFromPassword = async (keystore, password) => {
  const pwDerivedKey = await new Promise((resolve, reject) => {
    keystore.keyFromPassword(password, (err, derivedKey) => {
      if (err) {
        reject(err);
      }
      resolve(derivedKey);
    });
  });
  return pwDerivedKey;
};

export const signInWithPasswordAndPhrase = async (password, seedPhrase) => {
  const hdPathString = "m/44'/60'/0'/0";
  const keystore = await createVault(password, seedPhrase, hdPathString);
  const pwDerivedKey = await keyFromPassword(keystore, password);
  keystore.generateNewAddress(pwDerivedKey, 1);
  return keystore;
};

export const signUpWithPassword = async password => {
  const hdPathString = "m/44'/60'/0'/0";
  const seedPhrase = lightwallet.keystore.generateRandomSeed();
  const keystore = await createVault(password, seedPhrase, hdPathString);
  const pwDerivedKey = await keyFromPassword(keystore, password);
  keystore.generateNewAddress(pwDerivedKey, 1);
  return { keystore, seedPhrase };
};

export const deserialize = keystore =>
  lightwallet.keystore.deserialize(keystore);
