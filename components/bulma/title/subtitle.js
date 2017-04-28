import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const SubTitle = ({
  is1,
  is2,
  is3,
  is4,
  is5,
  is6,
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'subtitle': true,
    'is-1': is1,
    'is-2': is2,
    'is-3': is3,
    'is-4': is4,
    'is-5': is5,
    'is-6': is6,
  }, commonClasses(props));
  return (
    <h1
      style={style}
      className={className}
    >
      {children}
    </h1>
  )
}

export default SubTitle;
