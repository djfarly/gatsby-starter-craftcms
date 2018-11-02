import React from 'react';
import { graphql } from 'gatsby';
import styled from 'react-emotion';

import Header from 'components/Header';
import Overlay from 'components/Overlay';
import Link from 'components/Link';
import Wrap from 'components/Wrap';
import WrapGrid from 'components/WrapGrid';
import Image from 'components/Image';
import NavigationPrimarySections from 'components/NavigationPrimarySections';
import Footer from 'components/Footer';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';

const NavigationItem = styled('h3')(
  {
    fontSize: '24px',
    fontWeight: 900,
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
  props => ({
    color: props.theme.colorBright,
    fontFamily: props.theme.fontFamilySecondary,
    marginBottom: props.theme.spaceDoubleEight,
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
        position="fixed"
      />
      <Overlay position="fixed" />
      <Header />

      <WrapGrid>
        <Grid>
          <GridItem tabletFluid={1 / 2}>
            {allItems.map(item => (
              <NavigationItem key={item.navigationEntry[0].id}>
                <Link
                  activecss="opacity: 0.5;"
                  to={item.navigationEntry[0].fullUri}
                >
                  {item.navigationEntry[0].title}
                </Link>
              </NavigationItem>
            ))}
          </GridItem>
          <GridItem tabletFluid={1 / 2}>
            <NavigationPrimarySections content={navigationTeaser} />
          </GridItem>
        </Grid>
      </WrapGrid>
      <Footer />
    </Wrap>
  );
}

export const queryAllItems = graphql`
  fragment NavigationAllItems on Craft_NavigationPrimaryNavigation {
    navigationEntry {
      id
      fullUri
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
      fullUri
      title
    }
  }
`;
