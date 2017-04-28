import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const MenuLabel = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'menu-label': true,
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

export default MenuLabel;
