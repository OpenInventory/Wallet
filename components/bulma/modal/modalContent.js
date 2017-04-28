import React from 'react';
import classNames from 'classnames';

const ModalContent = ({
  children,
}) => {
  const className = classNames({
    'modal-content': true,
  });
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
}

export default ModalContent;
