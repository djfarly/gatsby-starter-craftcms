import React, { Component } from 'react';
import { graphql } from 'gatsby';

export default class Text extends Component {
  render() {
    const { id, text, headline, headlineTag } = this.props.pageBuilder;
    const CustomHeadlineTag = `${headlineTag}`;

    return (
      <div className="text">
        <CustomHeadlineTag>{headline}</CustomHeadlineTag>
        <div>{text}</div>
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
