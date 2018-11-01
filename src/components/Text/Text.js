import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledP = styled('p')(props => ({
  color: props.theme.colorText,
  letterSpacing: '0.8px',
  lineHeight: '30px',
}));

const StyledSpan = styled('span');

export default function Text(props) {
  const { element, children } = props;
  const ComponentList = {
    p: StyledP,
    span: StyledSpan,
  };
  const Component = ComponentList[element];

  return <Component>{children}</Component>;
}

Text.propTypes = {
  element: PropTypes.string,
};

Text.defaultProps = {
  element: 'p',
};
