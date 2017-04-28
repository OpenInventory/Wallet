import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withForm from "../../lib/forms";
import { Field } from "../form";
import Box from "../bulma/box";
import { Row, Col } from "../bulma/grid";
import Button from "../bulma/button";
import Section from "../bulma/section";

import { update, signIn } from "../../redux/actions";

const SignInForm = ({ form, signIn, update }) => (
  <Section>
    <div style={styles.wrapper}>
      <Box style={styles.box}>
        <Field
          placeholder="New Password"
          type="password"
          value={form.fields.password}
          error={form.errors.password}
          onChange={password => form.update({ password })}
          isDisabled={form.loading}
        />
        <Field
          placeholder="Confirm Password"
          type="password"
          value={form.fields.confirmPassword}
          error={form.errors.confirmPassword}
          onChange={confirmPassword => form.update({ confirmPassword })}
          isDisabled={form.loading}
        />
        <Field
          fieldStyle={styles.field}
          isTextArea
          placeholder="Mnemonic Phrase"
          value={form.fields.phrase}
          error={form.errors.phrase}
          onChange={phrase => form.update({ phrase })}
          isDisabled={form.loading}
        />
        <Button
          isLoading={form.loading}
          isDisabled={form.hasErrors}
          style={styles.button}
          onClick={() => form.submitWith(signIn, ["password", "phrase"])}
        >
          Sign In
        </Button>
      </Box>
      <div style={styles.text}>
        {"Don't have an account?"}
        {" "}
        <span onClick={() => update({ currentForm: "signUp" })}>Sign Up</span>
      </div>
    </div>
  </Section>
);

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  box: {
    width: "100%",
    maxWidth: 328
  },
  field: {
    resize: "none"
  },
  button: {
    width: "100%"
  },
  text: {
    fontSize: 12
  }
};

const config = {
  password: {
    validation: value => {
      if (!value.length) {
        return "Please enter your password";
      }
      if (value.length < 9) {
        return "Password must be 9 characters or more";
      }
      return null;
    }
  },
  confirmPassword: {
    validation: (value, { password }) => {
      if (!value.length) {
        return "Please confirm your password";
      }
      if (value !== password) {
        return "Passwords do not match";
      }
      return null;
    }
  },
  phrase: {
    validation: value => {
      if (!value.length) {
        return "Please enter your mnemonic phrase";
      }
      return null;
    }
  }
};

const mapStateToProps = state => state;

const SignInFormContainer = compose(
  withForm(config),
  connect(mapStateToProps, {
    update,
    signIn
  })
)(SignInForm);

export default SignInFormContainer;
