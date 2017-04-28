import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Modal = ({
  hasBackground,
  isActive,
  children,
  onClose,
  style,
  ...props,
}) => {
  const className = classNames({
    'modal': true,
    'is-active': isActive,
  }, commonClasses(props));
  const background = hasBackground
    ? <div className="modal-background" onClick={() => onClose()} />
    : null;
  return (
    <div
      className={className}
      style={style}
    >
      {background}
      {children}
    </div>
  );
}

Modal.defaultProps = {
  hasBackground: true,
  onClose: () => {},
};

export default Modal;
