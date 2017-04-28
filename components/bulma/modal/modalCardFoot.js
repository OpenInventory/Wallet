import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const ModalCardFoot = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'modal-card-foot': true,
  }, commonClasses(props));
  return (
    <footer
      className={className}
      style={style}
    >
      {children}
    </footer>
  );
}

export default ModalCardFoot;
