import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const NavCenter = ({
  children,
  style,
  ...props
}) => {
  const className = classNames({
    'nav-center': true,
  }, commonClasses(props));
  return (
    <div
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

export default NavCenter;
