import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Progress = ({
  isPrimary,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  isSmall,
  isMedium,
  isLarge,
  value,
  max,
  style,
  ...props,
}) => {
  const className = classNames({
    'progress': true,
    'is-primary': isPrimary,
    'is-info': isInfo,
    'is-success': isSuccess,
    'is-warning': isWarning,
    'is-danger': isDanger,
    'is-small': isSmall,
    'is-medium': isMedium,
    'is-large': isLarge,
  }, commonClasses(props));
  return (
    <progress
      className={className}
      style={style}
      value={value}
      max={max}
    >
      {value}%
    </progress>
  );
};

Progress.defaultProps = {
  max: 100,
  value: 0,
};

export default Progress;
