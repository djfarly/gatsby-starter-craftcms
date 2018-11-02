import React from 'react';
import { graphql } from 'gatsby';

import Headline from 'components/Headline';
import TextDefault from 'components/Text';

export default function Text(props) {
  const { text, headline, headlineTag } = props?.pageBuilder;

  return (
    <div>
      {headline && <Headline element={headlineTag}>{headline}</Headline>}
      {text && <TextDefault element="span">{text}</TextDefault>}
    </div>
  );
}

export const query = graphql`
  fragment PageBuilderTextQuery on Craft_PageBuilderText {
    id
    text
    headline
    headlineTag
  }
`;
