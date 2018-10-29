import React from 'react';
import styled from 'react-emotion';

const NavigationItem = styled('div')(
  {
    color: 'darkorchid',
  },
  props => ({
    fontSize: props.fontSize,
    borderRadius: props.theme.borderRadius,
  }),
);

export default function Navigation() {
  return (
    <NavigationItem fontSize={16}>This is a darkorchid button.</NavigationItem>
  );
}
