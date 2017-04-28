import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withForm from "../../lib/forms";
import { Field } from "../form";
import Box from "../bulma/box";
import { Row, Col } from "../bulma/grid";
import Button from "../bulma/button";
import Section from "../bulma/section";
import { Title, SubTitle } from "../bulma/title";

import { update, signUp } from "../../redux/actions";

const SignUpForm = ({ form, signUp, showPhrase, phrase, update }) => (
  <Section>
    <div style={styles.wrapper}>
      <Box style={styles.box}>
        {showPhrase
          ? <div>
              <Title>Write this down</Title>
              <SubTitle>
                This phrase is required to access your account
              </SubTitle>
              <div style={styles.phrase}>{phrase}</div>
              <Button
                style={styles.button}
                onClick={() => update({ signedIn: true })}
              >
                OK
              </Button>
            </div>
          : <span>
              <Field
                placeholder="Password"
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
              <Button
                isLoading={form.loading}
                isDisabled={form.hasErrors}
                style={styles.button}
                onClick={() => form.submitWith(signUp)}
              >
                Sign Up
              </Button>
            </span>}
      </Box>
      <div style={styles.text}>
        Already have an account?
        {" "}
        <span onClick={() => update({ currentForm: "signIn" })}>Sign In</span>
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
  phrase: {
    marginBottom: "1.5rem"
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
  }
};

const mapStateToProps = state => state;

const SignUpFormContainer = compose(
  withForm(config),
  connect(mapStateToProps, {
    update,
    signUp
  })
)(SignUpForm);

export default SignUpFormContainer;
