import React, { Component } from 'react';
import { graphql } from 'gatsby';
import styled from 'react-emotion';

const HeroSection = styled('section')(
  {
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  props => ({
    backgroundImage: props.backgroundImage,
  }),
);

const HeroContent = styled('div')({
  maxWidth: 900,
});

const Headline = styled('h1')({
  textAlign: 'center',
});

const Text = styled('div')({
  textAlign: 'center',
});

export default class Hero extends Component {
  render() {
    const { headline, text, backgroundImage } = this.props.pageBuilder;
    const bgImage = backgroundImage[0]
      ? 'url(' + backgroundImage[0].url + ')'
      : 'none';

    return (
      <HeroSection backgroundImage={bgImage}>
        <HeroContent>
          {headline && <Headline>{headline}</Headline>}
          {text && <Text>{text}</Text>}
        </HeroContent>
      </HeroSection>
    );
  }
}

export const query = graphql`
  fragment PageBuilderHeroQuery on Craft_PageBuilderHero {
    headline
    text
    backgroundImage {
      url
    }
  }
`;
