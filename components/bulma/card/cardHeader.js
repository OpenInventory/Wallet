import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const CardHeader = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'card-header': true,
  }, commonClasses(props));
  return (
    <header
      className={className}
      style={style}
    >
      {children}
    </header>
  );
};

export default CardHeader;
