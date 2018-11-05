import React from 'react';
import styled from 'react-emotion';

import Link from 'components/Link';
import Icon from 'components/Icon';

const StyledLogoWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  height: 'inherit',
});

const StyledLogo = styled('div')({
  fontWeight: 900,
  letterSpacing: '3px',
  textTransform: 'uppercase',
});

export default function Logo() {
  return (
    <StyledLogoWrap>
      <Link csshover="color: #fff;" to="/de/start">
        <StyledLogo>
          <Icon type="logoEvo" />
        </StyledLogo>
      </Link>
    </StyledLogoWrap>
  );
}
