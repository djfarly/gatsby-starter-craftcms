import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Image from '../../Image';

export default class ImageText extends Component {
  render() {
    const { image, text } = this.props.pageBuilder;

    return (
      <div className="page-builder__image-text">
        {image[0] && <Image src={image[0].url} />}
        {text && <div>{text}</div>}
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
