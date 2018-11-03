import React from 'react';
import styled from 'react-emotion';

import Link from 'components/Link';
import Null from 'components/Null';

const NavigationPrimaryItemWrap = styled('h3')({}, props => ({
  marginBottom: props.theme.spaceDoubleEight,
}));

const NavigationPrimaryItemWrapBefore = {
  content: '""',
  position: 'absolute',
  top: 'calc(50% - 2px)',
  right: '100%',
  marginRight: '56px',
  backgroundColor: '#fff',
  height: '2px',
  width: '500%',
};

const NavigationPrimaryItemWrapAfter = {
  content: '""',
  position: 'absolute',
  top: 'calc(50% - 2px)',
  left: '100%',
  marginLeft: '56px',
  backgroundColor: '#fff',
  height: '2px',
  width: '500%',
};

const NavigationPrimaryItem = styled('div')(
  {
    position: 'relative',
    height: '100%',
    display: 'inline-block',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 900,
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
  props => ({
    color: props.theme.colorBright,
    fontFamily: props.theme.fontFamilySecondary,
    ':before': props.isActive && NavigationPrimaryItemWrapBefore,
    ':after': props.isActive && NavigationPrimaryItemWrapAfter,
  }),
);

export default function NavigationPrimary(props) {
  const { data, isActive, show } = props;
  const Component = show ? NavigationPrimaryItemWrap : Null;

  return (
    <Component>
      <NavigationPrimaryItem isActive={isActive}>
        <Link
          cssstyles="text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); opacity: 0.5;"
          cssactive="opacity: 1;"
          to={data.fullUri}
        >
          {data.title}
        </Link>
      </NavigationPrimaryItem>
    </Component>
  );
}
