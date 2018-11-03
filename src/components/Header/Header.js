import React from 'react';
import styled from 'react-emotion';

import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import WrapGrid from 'components/WrapGrid';
import Logo from 'components/Logo';

const StyledHeader = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '3',
  height: '100px',
  width: '100%',
});

export default function Header() {
  return (
    <StyledHeader>
      <WrapGrid>
        <Grid>
          <GridItem>
            <Logo />
          </GridItem>
        </Grid>
      </WrapGrid>
    </StyledHeader>
  );
}
