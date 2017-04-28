import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Delete = ({
  isSmall,
  isMedium,
  isLarge,
  onClick,
  ...props
}) => {
  const className = classNames({
    'delete': true,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
  }, commonClasses(props));
  return (
    <button
      style={{ borderRadius: 100 }}
      className={className}
      onClick={() => onClick()}
    />
  );
};

export default Delete;
