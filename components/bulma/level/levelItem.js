import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const LevelItem = ({
  hasTextCentered,
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'level-item': true,
    'has-text-centered': hasTextCentered,
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

export default LevelItem;
