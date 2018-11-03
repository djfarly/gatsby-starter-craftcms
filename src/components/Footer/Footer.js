import React from 'react';
import styled from 'react-emotion';

import WrapGrid from 'components/WrapGrid';

const StyledFooter = styled('div')({
  position: 'fixed',
  bottom: '0',
  left: '0',
  zIndex: '3',
  height: '100px',
  width: '100%',
});

export default function Header() {
  return (
    <StyledFooter>
      <WrapGrid>
        Socials(Facebook, Instagram) <br />
        NavigationFooter(AGBs, Datenschutz, Impressum)
      </WrapGrid>
    </StyledFooter>
  );
}
