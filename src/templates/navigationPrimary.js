import React from 'react';
import { graphql } from 'gatsby';

import Header from 'components/Header';
import Overlay from 'components/Overlay';
import Wrap from 'components/Wrap';
import WrapGrid from 'components/WrapGrid';
import Image from 'components/Image';
import NavigationPrimary from 'components/NavigationPrimary';
import NavigationPrimarySections from 'components/NavigationPrimarySections';
import Footer from 'components/Footer';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';

export default function TemplateNavigationPrimary(props) {
  const { entry, entries } = props?.data?.craft;
  const { navigationBackground } = entry;

  return (
    <Wrap height="100vh">
      <Image
        src={navigationBackground?.[0]?.url}
        alt={navigationBackground?.[0]?.title}
        isBackground
        fit="cover"
        position="fixed"
      />
      <Overlay position="fixed" />
      <Header />

      <WrapGrid height="100vh" padding="100px 0">
        <Grid middle>
          <GridItem tabletFluid={1 / 3} laptop={1 / 3} desktop={1 / 3}>
            <NavigationPrimary data={entries} currentId={entry.id} />
          </GridItem>
          <GridItem tabletFluid={2 / 3} laptop={2 / 3} desktop={2 / 3}>
            <NavigationPrimarySections data={entry} />
          </GridItem>
        </Grid>
      </WrapGrid>
      <Footer />
    </Wrap>
  );
}

export const query = graphql`
  query TemplateNavigationPrimary($id: [Int]!) {
    craft {
      entry(id: $id) {
        ... on Craft_NavigationPrimaryNavigation {
          id
          fullUri
          title
          __typename
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
      }

      entries(section: navigationPrimary) {
        ... on Craft_NavigationPrimaryNavigation {
          id
          fullUri
          title
          navigationEntry {
            id
          }
        }
      }
    }
  }
`;
