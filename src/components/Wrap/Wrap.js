import React from 'react';
import styled from 'react-emotion';

const StyledWrap = styled('div')(
  {
    position: 'relative',
  },
  props => ({
    height: props.height,
  }),
);

export default function Wrap(props) {
  const { children, height } = props;
  return <StyledWrap height={height}>{children}</StyledWrap>;
}
