import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import themeDefault from 'components/Layout/themeDefault';

const StyledGrid = styled('div')(
  {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
  },
  props => ({
    margin: `-${props.theme.gridSpaceGutter} 0 0 -${
      props.theme.gridSpaceGutter
    }`,
    boxDirection: props.boxDirection,
    log: console.log(props.boxDirection),
    alignSelf: props.alignself,
    alignItems: props.alignitems,
    justifyContent: props.spacing,
  }),
);

export default function Grid(props) {
  const {
    children,
    gutter,
    left,
    center,
    right,
    top,
    middle,
    bottom,
    between,
    around,
    reverse,
  } = props;

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

  return (
    <GridContext.Provider value={{ gutter }}>
      <StyledGrid
        gutter={gutter}
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
      >
        {children}
      </StyledGrid>
    </GridContext.Provider>
  );
}

Grid.propTypes = {
  gutter: PropTypes.string,
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

Grid.defaultProps = {
  gutter: themeDefault.gridSpaceGutter,
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

export const GridContext = createContext({
  gutter: Grid.defaultProps.gutter,
});

// Settings

// // Grid
// .#{$base-prefix}o-grid {

//   // Unified fractions applied via grid modifier.
//   // If there is no unique grid__item behaviour this is the cleanest method to
//   // create an organized grid behaviour.
//   @include generate-fractions-modifier('o-grid');

// }
