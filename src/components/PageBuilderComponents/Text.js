import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Headline from 'components/Headline';
import TextDefault from 'components/Text';

export default class Text extends Component {
  render() {
    const { text, headline, headlineTag } = this.props.pageBuilder;

    return (
      <div>
        {headline && <Headline tag={headlineTag}>{headline}</Headline>}
        {text && <TextDefault tag="span">{text}</TextDefault>}
      </div>
    );
  }
}

export const query = graphql`
  fragment PageBuilderTextQuery on Craft_PageBuilderText {
    id
    text
    headline
    headlineTag
  }
`;
