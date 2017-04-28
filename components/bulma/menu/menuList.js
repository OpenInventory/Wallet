import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const MenuList = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'menu-list': true,
  }, commonClasses(props));
  return (
    <ul
      className={className}
      style={style}
    >
      {children}
    </ul>
  );
};

export default MenuList;
