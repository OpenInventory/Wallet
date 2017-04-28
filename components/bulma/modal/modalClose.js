import React from 'react';
import classNames from 'classnames';

const ModalClose = ({
  onClick,
}) => {
  const className = classNames({
    'modal-close': true,
  });
  return (
    <div
      className={className}
      onClick={() => onClick()}
    />
  );
}

export default ModalClose;
