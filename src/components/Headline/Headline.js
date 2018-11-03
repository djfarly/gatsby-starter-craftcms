import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledH1 = styled('h1')(
  {
    fontSize: '34px',
    lineHeight: '42px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontWeight: 900,
    maxWidth: '100%',
  },
  props => ({
    color: props.theme.colorBright,
    margin: props.margin,
  }),
);

const StyledH2 = styled('h2')(
  {
    fontSize: '34px',
    lineHeight: '42px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontWeight: 900,
    maxWidth: '100%',
  },
  props => ({
    color: props.theme.colorBright,
    margin: props.margin,
  }),
);

const StyledH3 = styled('h3')(
  {
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    fontWeight: 900,
    maxWidth: '100%',
  },
  props => ({
    color: props.theme.colorBright,
    margin: props.margin,
  }),
);

const StyledH4 = styled('h4')(
  {
    maxWidth: '100%',
  },
  props => ({
    color: props.theme.colorBright,
    margin: props.margin,
  }),
);

const StyledH5 = styled('h5')(
  {
    maxWidth: '100%',
  },
  props => ({
    color: props.theme.colorBright,
    margin: props.margin,
  }),
);

const StyledH6 = styled('h6')(
  {
    maxWidth: '100%',
  },
  props => ({
    color: props.theme.colorBright,
    margin: props.margin,
  }),
);

export default function Headline(props) {
  const { element, children, margin } = props;
  const ComponentList = {
    h1: StyledH1,
    h2: StyledH2,
    h3: StyledH3,
    h4: StyledH4,
    h5: StyledH5,
    h6: StyledH6,
  };
  const Component = ComponentList[element];

  return <Component margin={margin}>{children}</Component>;
}

Headline.propTypes = {
  element: PropTypes.string,
};

Headline.defaultProps = {
  element: 'h3',
};
