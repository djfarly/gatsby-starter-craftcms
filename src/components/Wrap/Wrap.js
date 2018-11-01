import React from 'react';
import styled from 'react-emotion';

import config from 'site.config.js';
import media from 'utils/mediaqueries';

const wrapSizes = config?.responsive?.wrapSizes;

const StyledWrapGrid = styled('div')({
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

const StyledWrap = styled('div')({
  margin: '0 auto',
});

export default function Wrap(props) {
  const { type, children } = props;

  const Component = type !== 'grid' ? StyledWrapGrid : StyledWrap;

  return <Component>{children}</Component>;
}
