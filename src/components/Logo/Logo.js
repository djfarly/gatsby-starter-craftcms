import React from 'react';
import styled from 'react-emotion';

import Link from 'components/Link';

const StyledLogoWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: 'inherit',
});

const StyledLogo = styled('span')({}, props => ({
  color: props.theme.colorPrimary,
  fontWeight: 900,
  letterSpacing: '3px',
  textTransform: 'uppercase',
}));

export default function Logo() {
  return (
    <StyledLogoWrap>
      <Link csshover="color: #00fff8;" to="/de/start">
        <StyledLogo>Evo Fitness</StyledLogo>
      </Link>
    </StyledLogoWrap>
  );
}
