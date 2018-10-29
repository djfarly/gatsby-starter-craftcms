import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import './SliderFlickity.css';

export default class FlickitySlider extends Component {
  render() {
    return <Flickity {...this.props}>{this.props.children}</Flickity>;
  }
}
