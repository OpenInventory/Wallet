import React from 'react';
import classNames from 'classnames';

const NavRight = ({
  navMenu,
  isActive,
  children,
}) => {
  const className = classNames({
    'nav-right': true,
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

export default NavRight;
