import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Button = ({
  isPrimary,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  isLink,
  isSmall,
  isMedium,
  isLarge,
  isLoading,
  isOutlined,
  isInverted,
  isActive,
  isDisabled,
  onClick,
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'button': true,
    'is-primary': isPrimary,
    'is-info': isInfo,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-danger': isDanger,
    'is-link': isLink,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
    'is-loading': isLoading,
    'is-outlined': isOutlined,
    'is-inverted': isInverted,
    'is-active': isActive,
  }, commonClasses(props));
  return (
    <button
      className={className}
      onClick={e => onClick(e)}
      style={style}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};


export default Button;
