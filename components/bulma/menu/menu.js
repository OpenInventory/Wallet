import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Menu = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'menu': true,
  }, commonClasses(props));
  return (
    <aside
      className={className}
      style={style}
    >
      {children}
    </aside>
  );
};

export default Menu;
