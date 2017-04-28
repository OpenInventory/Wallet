import React from 'react';

const NavToggle = ({
  children,
  onClick,
}) => {
  return (
    <div
      className="nav-toggle"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
}

export default NavToggle;
