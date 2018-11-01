import React, { Component } from 'react';
import { graphql } from 'gatsby';

import PageBuilder from 'components/PageBuilder/PageBuilder';

export default class Pages extends Component {
  render() {
    const {
      data: {
        craft: { entry },
      },
    } = this.props;

    return <PageBuilder pageBuilder={entry.pageBuilder} />;
  }
}

export const pageQuery = graphql`
  query QueryDefault($id: [Int]!) {
    craft {
      entry(id: $id) {
        ... on Craft_Pages {
          pageBuilder {
            ...PageBuilderQuery
          }
        }
      }
    }
  }
`;
