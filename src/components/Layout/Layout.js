import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { ThemeProvider } from 'emotion-theming';

import themeDefault from './themeDefault';
import './globalStyles';

const RouteContainer = posed.div({
  entering: { x: '100%' },
  enter: {
    opacity: 1,
    delay: 100,
    x: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      x: { ease: 'easeIn', duration: 300 },
    },
  },
  exit: {
    opacity: 0,
    x: '-10%',
    delay: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 150 },
    },
  },
});

export default function Wrapper(props) {
  const { children, location } = props;

  return (
    <ThemeProvider theme={themeDefault}>
      <PoseGroup preEnterPose="entering">
        <RouteContainer key={location.key}>{children}</RouteContainer>
      </PoseGroup>
    </ThemeProvider>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
