import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const CardImage = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'card-image': true,
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

export default CardImage;
