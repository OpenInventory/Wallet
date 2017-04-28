import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Box = ({
  children,
  style,
  onClick,
  ...props,
}) => {
  const className = classNames({
    'box': true,
  }, commonClasses(props));
  return (
    <div
      style={style}
      className={className}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

Box.defaultProps = {
  onClick: () => {},
};

export default Box;
