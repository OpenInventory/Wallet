import React from "react";
import withRedux from "next-redux-wrapper";
import Wallet from "../components/Wallet";
import Notification from "../components/Notification";
import initStore from "../redux/initStore";

export default withRedux(initStore)(() => (
  <div>
    <Notification />
    <Wallet />
  </div>
));
