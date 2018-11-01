import React from 'react';
import { graphql } from 'gatsby';
import styled from 'react-emotion';

import Link from 'components/Link';
import Wrap from 'components/Wrap';
import WrapGrid from 'components/WrapGrid';
import Logo from 'components/Logo';
import Headline from 'components/Headline';
import Text from 'components/Text';
import Image from 'components/Image';
import NavigationPrimarySections from 'components/NavigationPrimarySections';

const NavigationItem = styled('span')(
  {
    fontSize: '24px',
    fontWeight: 900,
    letterSpacing: '1px',
    textDecoration: 'none',
  },
  props => ({
    color: props.theme.colorBright,
    fontFamily: props.theme.fontFamilySecondary,
  }),
);

export default function NavigationPrimary(props) {
  const { allItems, currentItem } = props;
  const { navigationTeaser, navigationBackground } = currentItem;

  return (
    <Wrap height="100vh">
      <Image
        src={navigationBackground[0].url}
        alt={navigationBackground[0].title}
        isBackground
        fit="cover"
      />
      <WrapGrid>
        <Logo />

        <Headline>Test</Headline>
        <Text>Lol</Text>

        {allItems.map(item => (
          <Link
            display="block"
            to={item.navigationEntry[0].uri}
            key={item.navigationEntry[0].id}
          >
            <NavigationItem fontSize={16}>
              {item.navigationEntry[0].title}
            </NavigationItem>
          </Link>
        ))}

        <NavigationPrimarySections content={navigationTeaser} />
      </WrapGrid>
    </Wrap>
  );
}

export const queryAllItems = graphql`
  fragment NavigationAllItems on Craft_NavigationPrimaryNavigation {
    navigationEntry {
      id
      url
      uri
      title
    }
    navigationTeaser
    navigationBackground {
      url
      title
    }
  }
`;

export const queryCurrentItem = graphql`
  fragment NavigationCurrentItem on Craft_NavigationPrimaryNavigation {
    navigationEntry {
      id
      url
      uri
      title
    }
  }
`;
