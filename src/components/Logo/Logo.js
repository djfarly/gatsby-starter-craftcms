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
          <Icon type="arrowLeft" />
          <Icon type="arrowRight" />
          <Icon type="hamburger" />
          <Icon type="socialInstagram" />
          <Icon type="socialFacebook" />
          <Icon type="logoEvo" />
          <Icon type="logoEvo" width="50" />
          <Icon type="logoEvo" />
        </StyledLogo>
      </Link>
    </StyledLogoWrap>
  );
}
