import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import themeDefault from 'components/Layout/themeDefault';

const StyledGrid = styled('div')(
  {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
  },
  props => ({
    margin: `${props.theme.gridSpaceGutter} 0 0 ${props.theme.gridSpaceGutter}`,
  }),
);

export default function Grid(props) {
  const { children, gutter } = props;
  return (
    <GridContext.Provider value={{ gutter }}>
      <StyledGrid gutter={gutter}>{children}</StyledGrid>
    </GridContext.Provider>
  );
}

Grid.propTypes = {
  gutter: PropTypes.string,
};

Grid.defaultProps = {
  gutter: themeDefault.gridSpaceGutter,
};

export const GridContext = createContext({
  gutter: Grid.defaultProps.gutter,
});

// Settings

// // Grid
// .#{$base-prefix}o-grid {

//   &__item {
//     flex: 1;
//     padding: to-rem($object-grid-gutter) 0 0 to-rem($object-grid-gutter);

//     // Reorders column as first `grid__item`
//     @include breakpoints-to-element('&--first') {
//       order: -1;
//     }

//     // Reorders column as last `grid__item`
//     @include breakpoints-to-element('&--last') {
//       order: 1;
//     }
//   }

//   // Horizontal align
//   @include breakpoints-to-element('&--center') {
//     align-self: center;
//   }

//   @include breakpoints-to-element('&--left') {
//     align-self: flex-start;
//   }

//   @include breakpoints-to-element('&--right') {
//     align-self: flex-end;
//   }

//   // Justify
//   // @credit
//   // https://css-tricks.com/almanac/properties/j/justify-content/
//   @include breakpoints-to-element('&--justify-between') {
//     justify-content: space-between;
//   }

//   @include breakpoints-to-element('&--justify-around') {
//     justify-content: space-around;
//   }

//   // Vertical align
//   @include breakpoints-to-element('&--top') {
//     align-items: flex-start;
//   }

//   @include breakpoints-to-element('&--middle') {
//     align-items: center;
//   }

//   @include breakpoints-to-element('&--bottom') {
//     align-items: flex-end;
//   }

//   // Revert
//   @include breakpoints-to-element('&--revert') {
//     box-direction: reverse;
//   }

//   // Unified fractions applied via grid modifier.
//   // If there is no unique grid__item behaviour this is the cleanest method to
//   // create an organized grid behaviour.
//   @include generate-fractions-modifier('o-grid');

// }
