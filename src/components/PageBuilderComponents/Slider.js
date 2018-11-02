import React from 'react';
import { graphql } from 'gatsby';

import SliderFlickity from 'components/SliderFlickity';
import Image from 'components/Image';

const flickityOptions = {
  contain: 'true',
};

export default function Slider(props) {
  const { images } = props?.pageBuilder;

  if (!images.length) {
    return null;
  }

  return (
    <SliderFlickity options={flickityOptions}>
      {images.map(el => (
        <div style={{ width: '100%', height: '300px' }} key={el.id}>
          <Image src={el.url} />
        </div>
      ))}
    </SliderFlickity>
  );
}

export const query = graphql`
  fragment PageBuilderSliderQuery on Craft_PageBuilderSlider {
    images {
      id
      url
    }
  }
`;
