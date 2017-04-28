import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const ModalCardBody = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'modal-card-body': true,
  }, commonClasses(props));
  return (
    <section
      className={className}
      style={style}
    >
      {children}
    </section>
  );
}

export default ModalCardBody;
