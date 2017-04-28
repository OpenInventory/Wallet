import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const MediaRight = ({
  children,
  ...props,
}) => {
  const className = classNames({
    'media-right': true,
  }, commonClasses(props));
  return (
    <div
      className={className}
    >
      {children}
    </div>
  )
};

export default MediaRight;
