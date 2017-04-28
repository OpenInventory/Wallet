import React from 'react';
import classNames from 'classnames';
import commonClasses from '../commonClasses';

const Col = ({
  isThreeQuarters,
  isThreeQuartersMobile,
  isThreeQuartersTablet,
  isThreeQuartersDesktop,
  isTwoThirds,
  isTwoThirdsMobile,
  isTwoThirdsTablet,
  isTwoThirdsDesktop,
  isHalf,
  isHalfMobile,
  isHalfTablet,
  isHalfDesktop,
  isOneThird,
  isOneThirdMobile,
  isOneThirdTablet,
  isOneThirdDesktop,
  isOneQuarter,
  isOneQuarterMobile,
  isOneQuarterTablet,
  isOneQuarterDesktop,
  is1,
  is1Mobile,
  is1Tablet,
  is1Desktop,
  is2,
  is2Mobile,
  is2Tablet,
  is2Desktop,
  is3,
  is3Mobile,
  is3Tablet,
  is3Desktop,
  is4,
  is4Mobile,
  is4Tablet,
  is4Desktop,
  is5,
  is5Mobile,
  is5Tablet,
  is5Desktop,
  is6,
  is6Mobile,
  is6Tablet,
  is6Desktop,
  is7,
  is7Mobile,
  is7Tablet,
  is7Desktop,
  is8,
  is8Mobile,
  is8Tablet,
  is8Desktop,
  is9,
  is9Mobile,
  is9Tablet,
  is9Desktop,
  is10,
  is10Mobile,
  is10Tablet,
  is10Desktop,
  is11,
  is11Mobile,
  is11Tablet,
  is11Desktop,
  is12,
  is12Mobile,
  is12Tablet,
  is12Desktop,
  isOffsetThreeQuarters,
  isOffsetThreeQuartersMobile,
  isOffsetThreeQuartersTablet,
  isOffsetThreeQuartersDesktop,
  isOffsetTwoThirds,
  isOffsetTwoThirdsMobile,
  isOffsetTwoThirdsTablet,
  isOffsetTwoThirdsDesktop,
  isOffsetOneThird,
  isOffsetOneThirdMobile,
  isOffsetOneThirdTablet,
  isOffsetOneThirdDesktop,
  isOffsetHalf,
  isOffsetHalfMobile,
  isOffsetHalfTablet,
  isOffsetHalfDesktop,
  isOffsetOneQuarter,
  isOffsetOneQuarterMobile,
  isOffsetOneQuarterTablet,
  isOffsetOneQuarterDesktop,
  isMobile,
  isTablet,
  isDesktop,
  noPadding,
  style,
  children,
  ...props,
}) => {
  const className = classNames({
    'column': true,
    'is-three-quarters': isThreeQuarters,
    'is-three-quarters-mobile': isThreeQuartersMobile,
    'is-three-quarters-tablet': isThreeQuartersTablet,
    'is-three-quarters-desktop': isThreeQuartersDesktop,
    'is-two-thirds': isTwoThirds,
    'is-two-thirds-mobile': isTwoThirdsMobile,
    'is-two-thirds-tablet': isTwoThirdsTablet,
    'is-two-thirds-desktop': isTwoThirdsDesktop,
    'is-half': isHalf,
    'is-half-mobile': isHalfMobile,
    'is-half-tabelt': isHalfTablet,
    'is-half-desktop': isHalfDesktop,
    'is-one-third': isOneThird,
    'is-one-third-mobile': isOneThirdMobile,
    'is-one-third-tablet': isOneThirdTablet,
    'is-one-third-desktop': isOneThirdDesktop,
    'is-one-quarter': isOneQuarter,
    'is-one-quarter-mobile': isOneQuarterMobile,
    'is-one-quarter-tablet': isOneQuarterTablet,
    'is-one-quarter-desktop': isOneQuarterDesktop,
    'is-1': is1,
    'is-1-mobile': is1Mobile,
    'is-1-tablet': is1Tablet,
    'is-1-desktop': is1Desktop,
    'is-2': is2,
    'is-2-mobile': is2Mobile,
    'is-2-tablet': is2Tablet,
    'is-2-desktop': is2Desktop,
    'is-3': is3,
    'is-3-mobile': is3Mobile,
    'is-3-tablet': is3Tablet,
    'is-3-desktop': is3Desktop,
    'is-4': is4,
    'is-4-mobile': is4Mobile,
    'is-4-tablet': is4Tablet,
    'is-4-desktop': is4Desktop,
    'is-5': is5,
    'is-5-mobile': is5Mobile,
    'is-5-tablet': is5Tablet,
    'is-5-desktop': is5Desktop,
    'is-6': is6,
    'is-6-mobile': is6Mobile,
    'is-6-tablet': is6Tablet,
    'is-6-desktop': is6Desktop,
    'is-7': is7,
    'is-7-mobile': is7Mobile,
    'is-7-tablet': is7Tablet,
    'is-7-desktop': is7Desktop,
    'is-8': is8,
    'is-8-mobile': is8Mobile,
    'is-8-tablet': is8Tablet,
    'is-8-desktop': is8Desktop,
    'is-9': is9,
    'is-9-mobile': is9Mobile,
    'is-9-tablet': is9Tablet,
    'is-9-desktop': is9Desktop,
    'is-10': is10,
    'is-10-mobile': is10Mobile,
    'is-10-tablet': is10Tablet,
    'is-10-desktop': is10Desktop,
    'is-11': is11,
    'is-11-mobile': is11Mobile,
    'is-11-tablet': is11Tablet,
    'is-11-desktop': is11Desktop,
    'is-12': is12,
    'is-12-mobile': is12Mobile,
    'is-12-tablet': is12Tablet,
    'is-12-desktop': is12Desktop,
    'is-offset-three-quarters': isOffsetThreeQuarters,
    'is-offset-three-quarters-tablet': isOffsetThreeQuartersTablet,
    'is-offset-three-quarters-mobile': isOffsetThreeQuartersMobile,
    'is-offset-three-quarters-desktop': isOffsetThreeQuartersDesktop,
    'is-offset-two-thirds': isOffsetTwoThirds,
    'is-offset-two-thirds-mobile': isOffsetTwoThirdsMobile,
    'is-offset-two-thirds-tablet': isOffsetTwoThirdsTablet,
    'is-offset-two-thirds-desktop': isOffsetTwoThirdsDesktop,
    'is-offset-one-third': isOffsetOneThird,
    'is-offset-one-third-mobile': isOffsetOneThirdMobile,
    'is-offset-one-third-tablet': isOffsetOneThirdTablet,
    'is-offset-one-third-desktop': isOffsetOneThirdDesktop,
    'is-offset-half': isOffsetHalf,
    'is-offset-half-mobile': isOffsetHalfMobile,
    'is-offset-half-tablet': isOffsetHalfTablet,
    'is-offset-half-desktop': isOffsetHalfDesktop,
    'is-offset-one-quarter': isOffsetOneQuarter,
    'is-offset-one-quarter-mobile': isOffsetOneQuarterMobile,
    'is-offset-one-quarter-tablet': isOffsetOneQuarterTablet,
    'is-offset-one-quarter-desktop': isOffsetOneQuarterDesktop,
    'is-mobile': isMobile,
    'is-tablet': isTablet,
    'is-desktop': isDesktop,
  }, commonClasses(props));
  let colStyle = style;
  if (noPadding) {
    colStyle = { ...style, padding: 0 };
  }
  return (
    <div
      style={colStyle}
      className={className}
    >
      {children}
    </div>
  );
};

export default Col;