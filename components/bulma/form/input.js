import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Input = ({
  isDanger,
  isSuccess,
  isSmall,
  isMedium,
  isLarge,
  isLoading,
  isDisabled,
  isExpanded,
  isTextArea,
  type,
  placeholder,
  onChange,
  value,
  style,
  ...props,
}) => {
  const className = classNames({
    'input': !isTextArea,
    'textarea': isTextArea,
    'is-expanded': isExpanded,
    'is-danger': isDanger,
    'is-success': isSuccess,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
    'is-loading': isLoading,
  }, commonClasses(props));
  if (isTextArea) {
    return (
      <textarea
        className={className}
        type={type}
        style={{ fontSize: 16, ...style }}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
        value={value}
        disabled={isDisabled}
      />
    );
  }
  return (
    <input
      className={className}
      type={type}
      style={{ fontSize: 16, ...style }}
      placeholder={placeholder}
      onChange={event => onChange(event.target.value)}
      value={value}
      disabled={isDisabled}
    />
  );
};

Input.defaultProps = {
  onChange: () => {},
};

export default Input;
