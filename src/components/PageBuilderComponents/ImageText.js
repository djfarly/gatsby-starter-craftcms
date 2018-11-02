import React from 'react';
import { graphql } from 'gatsby';

import Image from 'components/Image';
import Text from 'components/Text';

export default function ImageText(props) {
  const { image, text } = props?.pageBuilder;

  return (
    <div>
      {image[0] && <Image src={image[0].url} />}
      {text && <Text element="div">{text}</Text>}
    </div>
  );
}

export const query = graphql`
  fragment PageBuilderImageTextQuery on Craft_PageBuilderImageText {
    text
    image {
      url
    }
  }
`;
