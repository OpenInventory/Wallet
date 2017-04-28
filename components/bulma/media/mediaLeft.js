import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const MediaLeft = ({
  children,
  ...props,
}) => {
  const className = classNames({
    'media-left': true,
  }, commonClasses(props));
  return (
    <figure
      className={className}
    >
      {children}
    </figure>
  )
};

export default MediaLeft;
