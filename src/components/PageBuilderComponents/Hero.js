import React from 'react';
import { graphql } from 'gatsby';
import styled from 'react-emotion';

import Headline from 'components/Headline';
import Text from 'components/Text';

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
  textAlign: 'center',
});

export default function Hero(props) {
  const { headline, text, backgroundImage } = props?.pageBuilder;
  const bgImage = backgroundImage[0]
    ? `url(' ${backgroundImage[0].url} ')`
    : 'none';

  return (
    <HeroSection backgroundImage={bgImage}>
      <HeroContent>
        {headline && <Headline element="h1">{headline}</Headline>}
        {text && <Text element="span">{text}</Text>}
      </HeroContent>
    </HeroSection>
  );
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
