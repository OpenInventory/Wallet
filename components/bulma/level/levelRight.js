import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const LevelRight = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'level-right': true,
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

export default LevelRight;
