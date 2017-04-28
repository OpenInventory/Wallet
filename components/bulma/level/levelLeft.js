import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const LevelLeft = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'level-left': true,
  }, commonClasses(props));
  return (
    <div
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}

export default LevelLeft;
