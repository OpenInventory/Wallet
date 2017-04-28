import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Card = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'card': true,
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

export default Card;
