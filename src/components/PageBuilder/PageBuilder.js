import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';

import Text from './Text';
import Image from './Image';

export default class PageBuilder extends Component {
  render() {
    const { pageBuilder } = this.props;

    const componentNamePattern = 'Craft_PageBuilder';
    // todo: how to create a react component from string?
    const components = {
      Text: Text,
      Image: Image,
    };

    return (
      <Fragment>
        {pageBuilder.map((el, index) => {
          const PageBuilderComponent =
            components[el.__typename.replace(componentNamePattern, '')];
          return <PageBuilderComponent pageBuilder={el} key={index} />;
        })}
      </Fragment>
    );
  }
}

export const query = graphql`
  fragment PageBuilderQuery on Craft_PageBuilderUnion {
    __typename

    ... on Craft_PageBuilderText {
      ...PageBuilderTextQuery
    }

    ... on Craft_PageBuilderImage {
      ...PageBuilderImageQuery
    }
  }
`;
