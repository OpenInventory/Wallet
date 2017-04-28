import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Image = ({
  isSquare,
  is1by1,
  is4by3,
  is3by2,
  is16by9,
  is2by1,
  is16x16,
  is24x24,
  is32x32,
  is48x48,
  is64x64,
  is96x96,
  is128x128,
  style,
  children,
  ...props,
}) => {
  const className = classNames({
    'image': true,
    'is-square': isSquare,
    'is-1by1': is1by1,
    'is-4by3': is4by3,
    'is-3by2': is3by2,
    'is-16by9': is16by9,
    'is-2by1': is2by1,
    'is-16x16': is16x16,
    'is-24x24': is24x24,
    'is-32x32': is32x32,
    'is-48x48': is48x48,
    'is-64x64': is64x64,
    'is-96x96': is96x96,
    'is-128x128': is128x128,
  }, commonClasses(props));
  return (
    <figure
      className={className}
      style={style}
    >
      {children}
    </figure>
  );
}

export default Image;
