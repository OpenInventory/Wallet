import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Content = ({
  isSmall,
  isMedium,
  isLarge,
  children,
  onClick,
  style,
  getRef,
  ...props,
}) => {
  const className = classNames({
    'content': true,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
  }, commonClasses(props));
  return (
    <div
      className={className}
      style={style}
      onClick={() => onClick()}
      ref={ref => getRef(ref)}
    >
      {children}
    </div>
  );
};

Content.defaultProps = {
  onClick: () => {},
  getRef: () => {},
};

export default Content;
