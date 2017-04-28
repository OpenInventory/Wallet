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
  signTransaction,
  rejectTransaction
} from "../../redux/actions";

const TransactionForm = ({
  form,
  tx,
  origin,
  update,
  signTransaction,
  rejectTransaction
}) => (
  <Section>
    <div style={styles.wrapper}>
      <Box style={styles.box}>
        <Title>New Transaction</Title>
        <SubTitle>{origin}</SubTitle>
        <Field
          label="From"
          value={tx.from}
          error={null}
          isDisabled
          showHelp={false}
          wrapperStyle={styles.field}
        />
        <Field
          label="To"
          value={tx.to}
          error={null}
          showHelp={false}
          isDisabled
          wrapperStyle={styles.field}
        />
        <Field
          label="Amount"
          value={`${web3.fromWei(tx.value, "ether")} ether`}
          error={null}
          showHelp={false}
          isDisabled
          wrapperStyle={styles.amountField}
        />
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
            onClick={() => rejectTransaction()}
            style={styles.button}
          >
            Reject
          </Button>
          <Button
            isLoading={form.loading}
            isDisabled={form.hasErrors || form.loading}
            onClick={() => form.submitWith(signTransaction)}
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
  field: {
    marginBottom: 10
  },
  amountField: {
    marginBottom: 32
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

const TransactionFormContainer = compose(
  withForm(config),
  connect(mapStateToProps, {
    update,
    signTransaction,
    rejectTransaction
  })
)(TransactionForm);

export default TransactionFormContainer;
