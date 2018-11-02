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
    boxDirection: props.boxDirection,
    alignSelf: props.alignself,
    alignItems: props.alignitems,
    justifyContent: props.spacing,
  }),
);

export default function GridItem(props) {
  const {
    children,
    first,
    last,
    left,
    center,
    right,
    top,
    middle,
    bottom,
    between,
    around,
    reverse,
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

  const boxDirection = {
    reverse: 'reverse',
  };

  const selfAlignment = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const itemsAlignment = {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end',
  };

  const itemsSpacings = {
    between: 'space-between',
    around: 'space-around',
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

  // const mobile = {
  //   '1/1': '100%',
  //   '1/2': '50%',
  //   '1/3': '33.33333%',
  //   '1/4': '25%',
  //   '1/5': '20%',
  //   '1/6': '16.66666%',
  //   '1/7': '14.2857%',
  //   '1/8': '12.5%',
  //   '1/9': '11.11111%',
  //   '1/10': '10%',
  //   '1/11': '9.09090%',
  //   '1/12': '8.33333%',
  // };

  // <GridItem mobile="1/2" desktop="1/4">Hi</GridItem>

  return (
    <StyledGridItem
      gutter={gutter}
      order={order[(first && 'first') || (last && 'last')]}
      alignself={
        selfAlignment[
          (left && 'left') || (center && 'center') || (right && 'right')
        ]
      }
      alignitems={
        itemsAlignment[
          (top && 'top') || (middle && 'middle') || (bottom && 'bottom')
        ]
      }
      spacing={itemsSpacings[(around && 'around') || (between && 'between')]}
      boxDirection={boxDirection[reverse && 'reverse']}
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
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  middle: PropTypes.bool,
  bottom: PropTypes.bool,
  between: PropTypes.bool,
  around: PropTypes.bool,
  reverse: PropTypes.bool,
};

GridItem.defaultProps = {
  mobile: 1,
  first: false,
  last: false,
  left: false,
  center: false,
  right: false,
  top: false,
  middle: false,
  bottom: false,
  between: false,
  around: false,
  reverse: false,
};
