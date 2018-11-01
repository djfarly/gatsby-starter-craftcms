import React from 'react';
import styled from 'react-emotion';

import config from 'site.config.js';
import media from 'utils/mediaqueries';

const wrapSizes = config?.responsive?.wrapSizes;

const StyledWrapGrid = styled('div')({
  position: 'relative',
  margin: '0 auto',
  width: wrapSizes.mobile,
  [media('tablet')]: {
    width: wrapSizes.tablet,
  },
  [media('tabletFluid')]: {
    width: wrapSizes.tabletFluid,
  },
  [media('laptop')]: {
    width: wrapSizes.laptop,
  },
  [media('desktop')]: {
    width: wrapSizes.desktop,
  },
});

export default function WrapGrid(props) {
  const { children } = props;
  return <StyledWrapGrid>{children}</StyledWrapGrid>;
}
