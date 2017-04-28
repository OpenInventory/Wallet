import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withForm from "../../lib/forms";
import web3 from "../../lib/web3";
import { Field } from "../form";
import Box from "../bulma/box";
import { Row, Col } from "../bulma/grid";
import Button from "../bulma/button";
import Section from "../bulma/section";
import { Title, SubTitle } from "../bulma/title";

import {
  update,
  approveAuthentication,
  rejectAuthentication
} from "../../redux/actions";

const AuthenticationForm = ({
  form,
  origin,
  approveAuthentication,
  rejectAuthentication
}) => (
  <Section>
    <div style={styles.wrapper}>
      <Box style={styles.box}>
        <Title>Sign In</Title>
        <SubTitle>{origin}</SubTitle>
        <Field
          placeholder="Password"
          type="password"
          value={form.fields.password}
          error={form.errors.password}
          onChange={password => form.update({ password })}
          isDisabled={form.loading}
        />
        <div style={styles.buttons}>
          <Button
            isDisabled={form.loading}
            onClick={() => rejectAuthentication()}
            style={styles.button}
          >
            Reject
          </Button>
          <Button
            isLoading={form.loading}
            isDisabled={form.hasErrors || form.loading}
            onClick={() => form.submitWith(approveAuthentication)}
            style={styles.button}
          >
            Approve
          </Button>
        </div>
      </Box>
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
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    width: "48%"
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
  }
};

const mapStateToProps = state => state;

const AuthenticationFormContainer = compose(
  withForm(config),
  connect(mapStateToProps, {
    approveAuthentication,
    rejectAuthentication
  })
)(AuthenticationForm);

export default AuthenticationFormContainer;
