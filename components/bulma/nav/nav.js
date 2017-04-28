import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Nav = ({
  hasShadow,
  children,
  style,
  onClick,
  ...props
}) => {
  const className = classNames({
    'nav': true,
    'has-shadow': hasShadow,
  }, commonClasses(props));
  return (
    <nav
      className={className}
      style={style}
      onClick={e => onClick(e)}
    >
      {children}
    </nav>
  );
};

Nav.defaultProps = {
  onClick: () => {},
};

export default Nav;
