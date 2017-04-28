import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Container = ({
  children,
  isFluid,
  ...props,
}) => {
  const className = classNames({
    'container': true,
    'is-fluid': isFluid,
  }, commonClasses(props));
  return (
    <div
      className="container"
    >
      {children}
    </div>
  );
};

export default Container;
