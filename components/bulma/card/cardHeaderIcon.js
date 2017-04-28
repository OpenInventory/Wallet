import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const CardHeaderIcon = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'card-header-con': true,
  }, commonClasses(props));
  return (
    <a
      className={className}
      style={style}
    >
      {children}
    </a>
  );
};

export default CardHeaderIcon;
