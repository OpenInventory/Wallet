import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Icon = ({
  isSmall,
  isMedium,
  isLarge,
  icon,
  style,
  iconStyle,
  onClick,
  children,
  ...props,
}) => {
  const className = classNames({
    'icon': true,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
  }, commonClasses(props));
  // icon prop omits fa fa- e.g. fa fa-home becomes just home
  return (
    <span
      className={className}
      style={{ cursor: 'pointer', ...style }}
      onClick={() => onClick()}
    >
      <i style={iconStyle} className={`fa fa-${icon}`} />
      {children}
    </span>
  );
};

Icon.defaultProps = {
  onClick: () => {},
};

export default Icon;
