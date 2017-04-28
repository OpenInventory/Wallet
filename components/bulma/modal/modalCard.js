import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const ModalCard = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'modal-card': true,
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

export default ModalCard;
