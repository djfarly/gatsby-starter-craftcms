import React from 'react';
import styled from 'react-emotion';

import WrapGrid from 'components/WrapGrid';
import Logo from 'components/Logo';

const StyledHeader = styled('div')(
  {
    position: 'absolute',
    top: '0',
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
    <StyledHeader>
      <WrapGrid>
        <Logo />
      </WrapGrid>
    </StyledHeader>
  );
}
