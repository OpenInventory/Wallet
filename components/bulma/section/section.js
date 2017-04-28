import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Section = ({
  children,
  style,
  ...props,
}) => {
  const className = classNames({
    'section': true,
  }, commonClasses(props));
  return (
    <section
      className={className}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
