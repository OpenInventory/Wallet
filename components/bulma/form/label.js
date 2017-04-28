import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Label = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'label': true,
  }, commonClasses(props));
  return (
    <label
      className={className}
      style={style}
    >
      {children}
    </label>
  );
};

export default Label;
