export const initialState = {
  initialized: false,
  signedIn: false,
  keystore: null,
  currentForm: "signUp",
  showPhrase: false,
  phrase: null,
  notification: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE": {
      return { ...state, ...action.fields };
    }
    default:
      return state;
  }
};
