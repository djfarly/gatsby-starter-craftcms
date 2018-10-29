import React, { Component } from 'react';
import { graphql } from 'gatsby';
import FlickitySlider from '../../FlickitySlider/';
import Image from '../../Image';

const flickityOptions = {
  contain: 'true',
};

export default class Slider extends Component {
  render() {
    const { images } = this.props.pageBuilder;

    if (!images.length) {
      return null;
    }

    return (
      <FlickitySlider options={flickityOptions}>
        {images.map((el, index) => (
          <div style={{ width: '100%', height: '300px' }} key={index}>
            <Image src={el.url} />
          </div>
        ))}
      </FlickitySlider>
    );
  }
}

export const query = graphql`
  fragment PageBuilderSliderQuery on Craft_PageBuilderSlider {
    images {
      url
    }
  }
`;
