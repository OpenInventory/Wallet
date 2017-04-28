import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const CardFooterItem = ({
  children,
  style,
  onClick,
  ...props,
}) => {
  const className = classNames({
    'card-footer-item': true,
  }, commonClasses(props));
  return (
    <div
      className={className}
      onClick={() => onClick()}
      style={{ ...styles.item, ...style }}
    >
      {children}
    </div>
  );
};

CardFooterItem.defaultProps = {
  onClick: () => {},
};

const styles = {
  item: {
    color: '#00d1b2',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

export default CardFooterItem;
