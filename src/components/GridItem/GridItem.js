import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import media from 'utils/mediaqueries';

import { GridContext } from 'components/Grid/Grid';

const StyledGridItem = styled('div')(
  {
    flex: '1',
  },
  props => ({
    width: props.mobile,
    flexBasis: props.mobile,
    [media('tablet')]: {
      width: props.tablet,
      flexBasis: props.tablet,
    },
    [media('tabletFluid')]: {
      width: props.tabletFluid,
      flexBasis: props.tabletFluid,
    },
    [media('laptop')]: {
      width: props.laptop,
      flexBasis: props.laptop,
    },
    [media('desktop')]: {
      width: props.desktop,
      flexBasis: props.desktop,
    },
    padding: `${props.gutter} 0 0 ${props.gutter}`,
    order: props.order,
  }),
);

export default function GridItem(props) {
  const {
    children,
    first,
    last,
    mobile,
    tablet,
    tabletFluid,
    laptop,
    desktop,
  } = props;

  const { gutter } = useContext(GridContext);

  const order = {
    first: '1',
    last: '-1',
  };

  function toPercent(number) {
    if (typeof number !== 'number') return number;
    return `${number * 100}%`;
  }
  const percentMobile = toPercent(mobile);
  const percentTablet = toPercent(tablet);
  const percentTabletFluid = toPercent(tabletFluid);
  const percentLaptop = toPercent(laptop);
  const percentDesktop = toPercent(desktop);

  return (
    <StyledGridItem
      gutter={gutter}
      order={order[(first && 'first') || (last && 'last')]}
      mobile={percentMobile}
      tablet={percentTablet}
      tabletFluid={percentTabletFluid}
      laptop={percentLaptop}
      desktop={percentDesktop}
    >
      {children}
    </StyledGridItem>
  );
}

GridItem.propTypes = {
  mobile: PropTypes.number,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

GridItem.defaultProps = {
  mobile: 1,
  first: false,
  last: false,
};
