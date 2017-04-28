import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

const NavItem = ({
  isActive,
  isTab,
  isHiddenMobile,
  isHiddenTablet,
  href,
  as,
  children,
  style,
  onClick,
}) => {
  const className = classNames({
    'nav-item': true,
    'is-active': isActive,
    'is-tab': isTab,
    'is-hidden-mobile': isHiddenMobile,
    'is-hidden-tablet': isHiddenTablet,
  });
  if (onClick) {
    return (
      <a
        onClick={() => onClick()}
        className={className}
        style={style}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      prefetch
      href={href}
      as={as || href}
    >
      <a
        className={className}
        style={style}
      >
        {children}
      </a>
    </Link>
  );
};

NavItem.defaultProps = {
  href: '/',
  onClick: null,
};

export default NavItem;
