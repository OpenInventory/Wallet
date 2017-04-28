import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const CardContent = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'card-content': true,
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

export default CardContent;
