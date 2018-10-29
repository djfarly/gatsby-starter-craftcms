import React, { Component } from 'react';
import { graphql } from 'gatsby';

export default class Text extends Component {
  render() {
    const { text, headline, headlineTag } = this.props.pageBuilder;
    const CustomHeadlineTag = `${headlineTag}`;

    return (
      <div>
        {headline && <CustomHeadlineTag>{headline}</CustomHeadlineTag>}
        {text && <div>{text}</div>}
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
