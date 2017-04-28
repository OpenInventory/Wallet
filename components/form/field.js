import React from "react";
import { Icon, Control, Input, Help, Label } from "../bulma";
import ButtonAddon from "./buttonAddon";

const Field = ({
  loading,
  isDisabled,
  type,
  placeholder,
  onChange,
  value,
  error,
  hasButton,
  buttonTitle,
  buttonFunc,
  buttonIsDisabled,
  buttonIsLoading,
  buttonStyle,
  hasIcon,
  fieldStyle,
  controlStyle,
  isTextArea,
  showHelp,
  wrapperStyle,
  label
}) => {
  let icon;
  let button;
  let controlProps = {};
  let fieldProps = {};
  if (loading || isDisabled) {
    fieldProps = { isDisabled: true };
  }
  if (value) {
    if (error) {
      icon = hasIcon ? <Icon icon="warning" isSmall /> : null;
      fieldProps = { ...fieldProps, isDanger: true };
    } else {
      icon = hasIcon ? <Icon icon="check" isSmall /> : null;
      fieldProps = { ...fieldProps, isSuccess: true };
    }
  }

  if (isTextArea) {
    fieldProps = { ...fieldProps, isTextArea: true };
  }

  if (hasButton) {
    button = (
      <ButtonAddon
        isDisabled={buttonIsDisabled}
        isLoading={buttonIsLoading}
        style={buttonStyle}
        onClick={() => buttonFunc()}
      >
        {buttonTitle}
      </ButtonAddon>
    );
  }

  if (button) {
    controlProps = { hasAddons: true };
    fieldProps = { ...fieldProps, isExpanded: true };
  }
  return (
    <div style={wrapperStyle}>
      {label &&
        <Label>
          {label}
        </Label>}
      <Control
        style={controlStyle || { margin: 0 }}
        hasIcon
        hasIconRight
        {...controlProps}
      >
        <Input
          type={type}
          placeholder={placeholder}
          onChange={val => onChange(val)}
          value={value}
          style={fieldStyle}
          {...fieldProps}
        />
        {button}
        {icon}
      </Control>
      {showHelp &&
        <Help isDanger>
          {error}
        </Help>}
    </div>
  );
};

Field.defaultProps = {
  showHelp: true
};

export default Field;
