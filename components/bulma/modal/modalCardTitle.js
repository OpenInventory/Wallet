import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const ModalCardTitle = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'modal-card-title': true,
  }, commonClasses(props));
  return (
    <p
      className={className}
      style={style}
    >
      {children}
    </p>
  );
}

export default ModalCardTitle;
