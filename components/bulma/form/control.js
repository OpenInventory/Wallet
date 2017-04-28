import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Control = ({
  hasIcon,
  hasIconRight,
  isLoading,
  hasAddons,
  isGrouped,
  isExpanded,
  isHorizontal,
  style,
  children,
  ...props,
}) => {
  const className = classNames({
    'control': true,
    'has-icon': hasIcon,
    'has-icon-right': hasIconRight,
    'is-loading': isLoading,
    'has-addons': hasAddons,
    'is-grouped': isGrouped,
    'is-expanded': isExpanded,
    'is-horizontal': isHorizontal,
  }, commonClasses(props));
  return (
    <p
      className={className}
      style={style}
    >
      {children}
    </p>
  );
};

export default Control;
