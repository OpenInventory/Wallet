import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Title = ({
  is1,
  is2,
  is3,
  is4,
  is5,
  is6,
  children,
  style,
  onClick,
  ...props,
}) => {
  const className = classNames({
    'title': true,
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
      onClick={() => onClick()}
    >
      {children}
    </h1>
  );
};

Title.defaultProps = {
  onClick: () => {},
};

export default Title;
