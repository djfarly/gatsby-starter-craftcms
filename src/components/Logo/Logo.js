import React from 'react';
import styled from 'react-emotion';

const StyledLogo = styled('div')(
  {
    color: 'red',
  },
  // props => ({
  //   objectFit: props.objectFit && props.objectFit,
  // }),
);

export default function Logo() {
  // const { src, alt, objectFit } = props;
  return <StyledLogo>Evo Fitness</StyledLogo>;
}
