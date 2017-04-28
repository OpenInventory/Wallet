import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Row = ({
  isDesktop,
  isMobile,
  children,
  style,
  noMargin,
  ...props,
}) => {
  const className = classNames({
    'columns': true,
    'is-desktop': isDesktop,
    'is-mobile': isMobile,
  }, commonClasses(props));
  let rowStyle = style;
  if (noMargin) {
    rowStyle = { ...style, margin: 0 };
  }
  return (
    <div
      className={className}
      style={rowStyle}
    >
      {children}
    </div>
  );
};

export default Row;
