import React from "react";
import { connect } from "react-redux";
import { initialize } from "../../redux/actions";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import TransactionForm from "./TransactionForm";
import AuthenticationForm from "./AuthenticationForm";

class Wallet extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return <div>Loading</div>;
    }
    if (this.props.signedIn) {
      if (this.props.requestType === "transaction") {
        return <TransactionForm />;
      }
      if (this.props.requestType === "authentication") {
        return <AuthenticationForm />;
      }
      return <span />;
    }
    if (this.props.currentForm === "signUp") {
      return <SignUpForm />;
    }
    return <SignInForm />;
  }
}

const mapStateToProps = state => state;

const WalletContainer = connect(mapStateToProps, {
  initialize
})(Wallet);

export default WalletContainer;
