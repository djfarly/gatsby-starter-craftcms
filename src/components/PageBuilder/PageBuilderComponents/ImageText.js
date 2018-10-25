import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Image from '../../Image';

export default class ImageText extends Component {
  render() {
    const { image, text } = this.props.pageBuilder;

    return (
      <div className="page-builder__image-text">
        <Image src={image[0].url} />
        <div>{text}</div>
      </div>
    );
  }
}

export const query = graphql`
  fragment PageBuilderImageTextQuery on Craft_PageBuilderImageText {
    text
    image {
      url
    }
  }
`;
