import React from 'react';
import classNames from 'classnames';

const NavLeft = ({
  navMenu,
  isActive,
  children,
}) => {
  const className = classNames({
    'nav-left': true,
    'nav-menu': navMenu,
    'is-active': isActive,
  });
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
}

export default NavLeft;
