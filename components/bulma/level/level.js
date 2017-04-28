import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Level = ({
  isMobile,
  children,
  style,
  onClick,
  ...props,
}) => {
  const className = classNames({
    'level': true,
    'is-mobile': isMobile,
  }, commonClasses(props));
  return (
    <nav
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </nav>
  );
};

Level.defaultProps = {
  onClick: () => {},
};


export default Level;
