import React from 'react';
import styled from 'react-emotion';

const StyledOverlay = styled('div')(
  {
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  props => ({
    position: props.position ? props.position : 'absolute',
    background: props.theme.overlayPrimary,
  }),
);

export default function Overlay(props) {
  const { position } = props;
  return <StyledOverlay position={position} />;
}
