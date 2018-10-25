import React, { Component, Fragment } from 'react';

export default class Image extends Component {
  render() {
    const { image } = this.props;

    return (
      <img {...this.props} />
    );
  }
}
