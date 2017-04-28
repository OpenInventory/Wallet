import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const CardFooter = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'card-footer': true,
  }, commonClasses(props));
  return (
    <footer
      className={className}
      style={style}
    >
      {children}
    </footer>
  );
};

export default CardFooter;
