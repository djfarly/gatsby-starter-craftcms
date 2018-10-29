import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    const TextTag = `${this.props.tag}`;

    return <TextTag>{this.props.children}</TextTag>;
  }
}
