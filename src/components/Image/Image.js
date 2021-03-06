import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import NullWrap from 'components/NullWrap';

const StyledWrapImage = styled('div')(
  {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
  },
  props => ({
    paddingTop: props.aspectRatio,
  }),
);

const StyledBackground = styled('div')(
  {
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
  },
  props => ({
    position: props.position ? props.position : 'absolute',
    backgroundImage: `url(${props.src})`,
    backgroundSize: props.fit,
    backgroundPosition: props.backgroundPosition,
  }),
);

const StyledImage = styled('img')(
  {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    verticalAlign: 'bottom',
  },
  props => ({
    position: props.position ? props.position : 'absolute',
    objectFit: props.fit,
  }),
);

const StyledImageRaw = styled('img')(
  {
    maxWidth: '100%',
    verticalAlign: 'bottom',
  },
  props => ({
    objectFit: props.fit,
  }),
);

export default function Image(props) {
  const {
    src,
    alt,
    fit,
    isBackground,
    backgroundPosition,
    aspectRatio,
    position,
  } = props;

  const aspectRatios = {
    '0': '0', // no aspect ratio
    '1': '100%', // squared
    '16:9': '56.25%',
    '4:3': '75%',
    '3:2': '66.66666%',
    '8:5': '62.5%',
  };

  const ComponentWrap =
    aspectRatio === '0' ? NullWrap : isBackground ? NullWrap : StyledWrapImage;

  const ComponentImage =
    aspectRatio !== '0' || isBackground
      ? isBackground
        ? StyledBackground
        : StyledImage
      : StyledImageRaw;

  return (
    <ComponentWrap aspectRatio={aspectRatios[aspectRatio]}>
      <ComponentImage
        src={src}
        alt={alt}
        fit={fit}
        position={position}
        backgroundPosition={backgroundPosition}
      />
    </ComponentWrap>
  );
}

Image.propTypes = {
  aspectRatio: PropTypes.string,
  isBackground: PropTypes.bool,
  backgroundPosition: PropTypes.string,
};

Image.defaultProps = {
  aspectRatio: '0',
  isBackground: false,
  backgroundPosition: 'center',
};
