import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledH1 = styled('h1')({
  fontSize: '2.4em',
  maxWidth: '100%',
});

const StyledH2 = styled('h2')({
  fontSize: '1.8em',
  maxWidth: '100%',
});

const StyledH3 = styled('h3')({
  maxWidth: '100%',
});

const StyledH4 = styled('h4')({
  maxWidth: '100%',
});

const StyledH5 = styled('h5')({
  maxWidth: '100%',
});

const StyledH6 = styled('h6')({
  maxWidth: '100%',
});

export default function Headline(props) {
  const { element, children } = props;
  const ComponentList = {
    h1: StyledH1,
    h2: StyledH2,
    h3: StyledH3,
    h4: StyledH4,
    h5: StyledH5,
    h6: StyledH6,
  };
  const Component = ComponentList[element];

  return <Component>{children}</Component>;
}

Headline.propTypes = {
  element: PropTypes.string,
};

Headline.defaultProps = {
  element: 'h3',
};
