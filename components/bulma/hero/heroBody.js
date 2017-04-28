import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const HeroBody = ({
  onClick,
  children,
  ...props,
}) => {
  const className = classNames({
    'hero-body': true,
  }, commonClasses(props));
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
}

export default HeroBody;
