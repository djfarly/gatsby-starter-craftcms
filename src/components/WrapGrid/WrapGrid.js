import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import config from '~/site.config.js';
import media from 'utils/mediaqueries';

const wrapSizes = config?.responsive?.wrapSizes;

const StyledWrapGrid = styled('div')(
  {
    position: 'relative',
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
  },
  props => ({
    margin: props.margin,
    padding: props.padding,
    height: props.height,
  }),
);

export default function WrapGrid(props) {
  const { children, margin, padding, height } = props;
  return (
    <StyledWrapGrid margin={margin} padding={padding} height={height}>
      {children}
    </StyledWrapGrid>
  );
}

WrapGrid.propTypes = {
  margin: PropTypes.string,
};

WrapGrid.defaultProps = {
  margin: '0 auto',
};
