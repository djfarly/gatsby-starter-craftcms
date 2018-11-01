import React from 'react';
import { graphql } from 'gatsby';
import styled from 'react-emotion';

import Wrap from 'components/Wrap';
import Logo from 'components/Logo';
import Image from 'components/Image';
import NavigationPrimarySections from 'components/NavigationPrimarySections';

const NavigationItem = styled('div')(
  {
    color: 'darkorchid',
  },
  props => ({
    fontSize: props.fontSize,
    borderRadius: props.theme.borderRadius,
  }),
);

export default function NavigationPrimary(props) {
  const { allItems, currentItem } = props;
  const { navigationTeaser, navigationBackground } = currentItem;

  return (
    <Wrap type="grid">
      <Logo />

      {allItems.map(item => (
        <NavigationItem fontSize={16} key={item.navigationEntry[0].id}>
          {item.navigationEntry[0].title}
        </NavigationItem>
      ))}

      <NavigationPrimarySections content={navigationTeaser} />

      <Image
        src={navigationBackground[0].url}
        alt={navigationBackground[0].title}
        objectFit="cover"
      />
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