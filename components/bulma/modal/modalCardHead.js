import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const ModalCardHead = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'modal-card-head': true,
  }, commonClasses(props));
  return (
    <header
      className={className}
      style={style}
    >
      {children}
    </header>
  );
}

export default ModalCardHead;
