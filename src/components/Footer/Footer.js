import React from 'react';
import styled from 'react-emotion';

import WrapGrid from 'components/WrapGrid';

const StyledFooter = styled('div')(
  {
    position: 'absolute',
    bottom: '0',
    left: '0',
    height: '100px',
    width: '100%',
  },
  // props => ({
  // }),
);

export default function Header() {
  // const {} = props;
  return (
    <StyledFooter>
      <WrapGrid>
        Socials(Facebook, Instagram) <br />
        NavigationFooter(AGBs, Datenschutz, Impressum)
      </WrapGrid>
    </StyledFooter>
  );
}
