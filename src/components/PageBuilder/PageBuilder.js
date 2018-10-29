import React, { Component } from 'react';
import { graphql } from 'gatsby';

import * as pageBuilderComponents from './PageBuilderComponents';

const componentNamePattern = 'Craft_PageBuilder';

function getComponent(__typename) {
  const componentName = __typename.replace(componentNamePattern, '');
  return pageBuilderComponents[componentName] || false;
}

export default class PageBuilder extends Component {
  render() {
    const { pageBuilder } = this.props;

    return (
      <div className="page-builder">
        {pageBuilder.map((el, index) => {
          const PageBuilderComponent = getComponent(el.__typename);
          return PageBuilderComponent ? (
            <PageBuilderComponent pageBuilder={el} key={index} />
          ) : null;
        })}
      </div>
    );
  }
}

export const query = graphql`
  fragment PageBuilderQuery on Craft_PageBuilderUnion {
    __typename

    ... on Craft_PageBuilderText {
      ...PageBuilderTextQuery
    }

    ... on Craft_PageBuilderImageText {
      ...PageBuilderImageTextQuery
    }

    ... on Craft_PageBuilderSlider {
      ...PageBuilderSliderQuery
    }

    ... on Craft_PageBuilderHero {
      ...PageBuilderHeroQuery
    }
  }
`;
