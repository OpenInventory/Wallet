import React from "react";

const createForm = config => {
  // take fields and validations and normalize them
  return Object.keys(config).reduce((obj, field) => {
    const defaultValue = config[field].defaultValue
      ? config[field].defaultValue
      : "";
    const fields = { ...obj.fields, [field]: defaultValue };
    const errors = { ...obj.errors, [field]: null };
    const validation = config[field].validation
      ? config[field].validation
      : () => {};
    const validations = { ...obj.validations, [field]: validation };
    return { ...obj, fields, errors, validations };
  }, {});
};

export default config => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      // create form state
      const form = createForm(config);
      this.state = {
        ...form,
        loading: false
      };
      this.update = this.update.bind(this);
      this.validateField = this.validateField.bind(this);
      this.validate = this.validate.bind(this);
      this.isLoading = this.isLoading.bind(this);
      this.submitWith = this.submitWith.bind(this);
      this.getErrors = this.getErrors.bind(this);
      this.createFields = this.createFields.bind(this);
      this.setError = this.setError.bind(this);
      this.displayName = `WithForm(${Component.displayName})`;
    }

    update(field, value) {
      // update single value
      if (typeof field === "string") {
        // set value for field
        const fields = { ...this.state.fields, [field]: value };
        this.setState({ fields });
        // validate
        this.validateField(field, value);
      } else {
        // update obj of values
        // set values for fields
        const fields = { ...this.state.fields, ...field };
        this.setState({ fields });
        // validate
        Object.keys(field).map(f => this.validateField(f, field[f]));
      }
    }

    validateField(field, value) {
      // validate new field value
      const error = this.state.validations[field](value, this.state.fields);
      const errors = { ...this.state.errors, [field]: error };
      this.setState({ errors });
      return error;
    }

    getErrors() {
      // validate all fields in state
      const { fields, validations } = this.state;
      const keys = Object.keys(fields);
      const errors = keys.reduce((obj, field) => {
        const value = fields[field];
        const error = validations[field](value, this.state.fields);
        return { ...obj, [field]: error };
      }, {});
      return errors;
    }

    setError(field, value) {
      const errors = { ...this.state.errors, [field]: value };
      this.setState({ errors });
    }

    createFields(conf) {
      // add fields dynamically
      const newFormState = Object.keys(conf).reduce((obj, field) => {
        const defaultValue = conf[field].defaultValue
          ? conf[field].defaultValue
          : "";
        const fields = { ...obj.fields, [field]: defaultValue };
        const errors = { ...obj.errors, [field]: "" };
        const validation = conf[field].validation
          ? conf[field].validation
          : () => {};
        const validations = { ...obj.validations, [field]: validation };
        return { ...obj, fields, errors, validations };
      }, this.state);
      this.setState({ ...newFormState });
    }

    validate() {
      // validate all fields in state
      const errors = this.getErrors();
      // update error messages
      this.setState({ errors });
      // are there errors?
      const hasErrors = Object.values(errors).some(err => err);
      return hasErrors;
    }

    async submitWith(func, order) {
      // set loading state
      this.isLoading(true);
      // validate all fields
      const errors = this.validate();
      if (!errors) {
        // no error, submit
        let fields;
        if (order) {
          fields = order.map(field => this.state.fields[field]);
        } else {
          fields = Object.values(this.state.fields);
        }
        try {
          const result = await func(...fields);
          this.isLoading(false);
          return result;
        } catch (e) {
          this.isLoading(false);
          throw e;
        }
      }
      this.isLoading(false);
      return null;
    }

    isLoading(loading) {
      this.setState({ loading });
    }

    render() {
      const errors = this.getErrors();
      const hasErrors = Object.values(errors).some(err => err);
      const form = {
        ...this.state,
        update: this.update,
        validateField: this.validateField,
        validate: this.validate,
        isLoading: this.isLoading,
        submitWith: this.submitWith,
        createFields: this.createFields,
        setError: this.setError,
        hasErrors
      };
      return <Component form={form} {...this.props} />;
    }
  };
};
