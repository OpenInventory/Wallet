import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Hero = ({
  isPrimary,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  isLink,
  isSmall,
  isMedium,
  isLarge,
  isLoading,
  isOutlined,
  isInverted,
  isActive,
  isDisabled,
  onClick,
  children,
  ...props,
}) => {
  const className = classNames({
    'hero': true,
    'is-primary': isPrimary,
  }, commonClasses(props));
  return (
    <section
      className={className}
    >
      {children}
    </section>
  );
}

export default Hero;
