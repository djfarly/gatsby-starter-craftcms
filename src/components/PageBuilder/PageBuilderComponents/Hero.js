import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'react-emotion';
import { css } from 'emotion';

const HeroSection = styled('section')`
  ${props => ({
    backgroundImage: props.backgroundImage
  })}

  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled('div')`
  max-width: 900px;
`;

const Headline = styled('h1')`
  text-align: center;
`

const Text = styled('div')`
  text-align: center;
`

export default class Hero extends Component {
  render() {
    const { headline, text, backgroundImage } = this.props.pageBuilder;
    const bgImage = backgroundImage[0] ? 'url(' + backgroundImage[0].url + ')' : 'none';

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
