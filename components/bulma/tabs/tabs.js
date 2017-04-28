import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Tabs = ({
  isCentered,
  isRight,
  isSmall,
  isMedium,
  isLarge,
  isBoxed,
  isToggle,
  isFullWidth,
  children,
  style,
  ulStyle,
  ...props,
}) => {
  const className = classNames({
    'tabs': true,
    'is-centered': isCentered,
    'is-right': isRight,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
    'is-boxed': isBoxed,
    'is-toggle': isToggle,
    'is-fullwidth': isFullWidth,
  }, commonClasses(props));
  return (
    <div
      className={className}
      style={style}
    >
      <ul
        style={ulStyle}
      >
        {children}
      </ul>
    </div>
  )
};

export default Tabs;
