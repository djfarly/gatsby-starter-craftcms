import React, { Component } from 'react';

export default class Headline extends Component {
  render() {
    const HeadlineTag = `${this.props.tag}`;

    return (
      <HeadlineTag style={{ maxWidth: '100%' }}>
        {this.props.children}
      </HeadlineTag>
    );
  }
}
