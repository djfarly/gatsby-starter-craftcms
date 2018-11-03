import React from 'react';
import styled from 'react-emotion';

import Link from 'components/Link';

const StyledLogo = styled('span')({}, props => ({
  color: props.theme.colorPrimary,
  fontWeight: 900,
  letterSpacing: '3px',
  textTransform: 'uppercase',
}));

export default function Logo() {
  return (
    <Link csshover="color: #00fff8;" to="/de/start">
      <StyledLogo>Evo Fitness</StyledLogo>
    </Link>
  );
}
