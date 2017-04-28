import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const MediaContent = ({
  children,
  onClick,
  style,
  ...props,
}) => {
  const className = classNames({
    'media-content': true,
  }, commonClasses(props));
  return (
    <div
      className={className}
      onClick={() => onClick()}
      style={style}
    >
      {children}
    </div>
  );
};

MediaContent.defaultProps = {
  onClick: () => {},
};

export default MediaContent;
