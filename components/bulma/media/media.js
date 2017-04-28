import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Media = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'media': true,
  }, commonClasses(props));
  return (
    <article
      className={className}
      style={style}
    >
      {children}
    </article>
  )
};

export default Media;
