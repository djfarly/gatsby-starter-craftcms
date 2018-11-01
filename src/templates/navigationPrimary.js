import React from 'react';
import { graphql } from 'gatsby';

import NavigationPrimary from 'components/NavigationPrimary';

export default function Pages(props) {
  const { entry, entries } = props?.data?.craft;
  return <NavigationPrimary allItems={entries} currentItem={entry} />;
}

export const pageQuery = graphql`
  query QueryNavigationPrimary($id: [Int]!) {
    craft {
      entry(id: $id) {
        ... on Craft_NavigationPrimaryNavigation {
          ...NavigationAllItems
        }
      }
      entries(section: navigationPrimary) {
        ... on Craft_NavigationPrimaryNavigation {
          ...NavigationCurrentItem
        }
      }
    }
  }
`;
