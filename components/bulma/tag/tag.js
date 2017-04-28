import React from 'react';
import classNames from 'classnames';

const Tag = ({
  isPrimary,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  isMedium,
  isLarge,
  isBlack,
  isDark,
  isLight,
  isWhite,
  onClick,
  style,
  children,
}) => {
  const className = classNames({
    'tag': true,
    'is-black': isBlack,
    'is-dark': isDark,
    'is-light': isLight,
    'is-white': isWhite,
    'is-primary': isPrimary,
    'is-info': isInfo,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-danger': isDanger,
    'is-primary': isPrimary,
    'is-medium': isMedium,
    'is-large': isLarge,
  });
  return (
    <span
      className={className}
      style={style}
      onClick={() => onClick()}
    >
      {children}
    </span>
  );
}

Tag.defaultProps = {
  onClick: () => {},
};

export default Tag;
