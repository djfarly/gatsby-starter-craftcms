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

    return (
      <FlickitySlider
        options={flickityOptions}
        className="page-builder__slider slider"
      >
        {images.map((el, index) => (
          <div
            className="slider__slide"
            style={{ width: '100%', height: '300px' }}
            key={index}
          >
            <Image src={el.url} className="slider__image" />
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
