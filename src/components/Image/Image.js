import React from 'react';
import styled from 'react-emotion';

const StyledImage = styled('img')(
  {
    width: '100%',
    maxWidth: '100%',
  },
  props => ({
    objectFit: props.objectFit && props.objectFit,
  }),
);

export default function Image(props) {
  const { src, alt, objectFit } = props;
  return <StyledImage href={src} alt={alt} objectFit={objectFit} />;
}
