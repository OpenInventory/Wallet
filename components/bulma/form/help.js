import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Help = ({
  isDanger,
  isSuccess,
  isWarning,
  isPrimary,
  isInfo,
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'help': true,
    'is-danger': isDanger,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-primary': isPrimary,
    'is-info': isInfo,
  }, commonClasses(props));
  return (
    <span
      className={className}
      style={{ ...style, height: 20 }}
    >
      {children}
    </span>
  );
};

export default Help;
