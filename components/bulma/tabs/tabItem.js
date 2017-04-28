import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';
import Link from 'next/link';

const TabItem = ({
  isActive,
  isCentered,
  children,
  href,
  style,
  onClick,
  ...props,
}) => {
  const className = classNames({
    'is-active': isActive,
  }, commonClasses(props));
  if (onClick) {
    return (
      <li
        className={className}
        style={style}
        onClick={() => onClick()}
      >
        <a>
          {children}
        </a>
      </li>
    );
  }
  return (
    <li
      className={className}
      style={style}
      onClick={() => onClick()}
    >
      <Link
        href={href}
        prefetch
      >
        <a>
          {children}
        </a>
      </Link>
    </li>
  );
};

TabItem.defaultProps = {
  href: '/',
};

export default TabItem;
