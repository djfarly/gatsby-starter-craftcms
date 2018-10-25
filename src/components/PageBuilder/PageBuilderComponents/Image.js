import React, { Component } from 'react';
import { graphql } from 'gatsby';

export default class Image extends Component {
  render() {
    const { id, image } = this.props.pageBuilder;

    return (
      <div className="image">
        [image]
      </div>
    );
  }
}

export const query = graphql`
  fragment PageBuilderImageQuery on Craft_PageBuilderImage {
    id
    image
  }
`;
