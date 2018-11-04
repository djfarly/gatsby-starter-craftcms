import React from 'react';
import styled from 'react-emotion';

import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import WrapGrid from 'components/WrapGrid';
import Logo from 'components/Logo';

const StyledHeaderWrap = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '3',
  height: '100px',
  width: '100%',
});

const StyledHeader = styled('div')({
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
});

export default function Header() {
  return (
    <StyledHeaderWrap>
      <WrapGrid>
        <Grid>
          <GridItem>
            <StyledHeader>
              <Logo />
            </StyledHeader>
          </GridItem>
        </Grid>
      </WrapGrid>
    </StyledHeaderWrap>
  );
}
