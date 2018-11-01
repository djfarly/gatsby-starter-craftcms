import React from 'react';
import styled from 'react-emotion';

const StyledLogo = styled('div')({}, props => ({
  color: props.theme.colorPrimary,
}));

export default function Logo() {
  // const { src, alt, objectFit } = props;
  return <StyledLogo>Evo Fitness</StyledLogo>;
}
