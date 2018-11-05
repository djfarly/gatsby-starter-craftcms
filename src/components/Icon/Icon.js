/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import themeDefault from 'components/Layout/themeDefault';
import Null from 'components/Null';
import * as Icons from './Icons';

export default function Icon(props) {
  const {
    type,
    width,
    height,
    viewBox,
    preserveAspectRatio,
    fillBright,
    fillDark,
    fillPrimary,
    currentColor,
  } = props;

  const iconMap = {
    socialFacebook: {
      icon: Icons.SocialFacebook,
      props: {
        viewBox: '0 0 17 17',
      },
    },
    socialInstagram: {
      icon: Icons.SocialInstagram,
      props: {
        viewBox: '0 0 17 17',
      },
    },
    logoEvo: {
      icon: Icons.LogoEvo,
      props: {
        viewBox: '0 0 231 31.021',
        width: '231',
        height: '31',
      },
    },
    hamburger: {
      icon: Icons.Hamburger,
      props: {
        viewBox: '0 0 21 14',
      },
    },
    arrowLeft: {
      icon: Icons.ArrowLeft,
      props: {
        viewBox: '0 0 35 12.372',
        width: '35',
      },
    },
    arrowRight: {
      icon: Icons.ArrowRight,
      props: {
        viewBox: '0 0 35 12.372',
        width: '35',
      },
    },
  };

  // Avoid obsolete nesting within iconMap if there are no settings
  const IconContent = iconMap?.[type]?.icon || iconMap?.[type];

  return IconContent ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-icon={type}
      width={width || iconMap?.[type]?.props?.width || '24px'}
      height={height || iconMap?.[type]?.props?.height || '24px'}
      viewBox={viewBox || iconMap?.[type]?.props?.viewBox || '0 0 24 24'}
      preserveAspectRatio={preserveAspectRatio}
    >
      <IconContent
        fillBright={currentColor ? 'currentColor' : fillBright}
        fillDark={currentColor ? 'currentColor' : fillDark}
        fillPrimary={fillPrimary}
      />
    </svg>
  ) : (
    // Fallback if the iconMap doesnt match right so that the app does not crash
    <Null
      warning={console.warn(`Error occured while loading your Icon:'${type}'`)}
    />
  );
}

/* eslint-disable react/require-default-props */
// We set the default values/props for height, width and viewbox within component as fallback
Icon.propTypes = {
  type: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  viewBox: PropTypes.string,
  preserveAspectRatio: PropTypes.string,
  fillBright: PropTypes.string,
  fillDark: PropTypes.string,
  fillPrimary: PropTypes.string,
  currentColor: PropTypes.bool,
};

Icon.defaultProps = {
  type: 'arrowLeft',
  preserveAspectRatio: 'xMidYMid meet',
  currentColor: true,
  fillBright: themeDefault.colorBright,
  fillDark: themeDefault.colorDark,
  fillPrimary: themeDefault.colorPrimary,
};
