import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { ThemeProvider } from 'emotion-theming';

import themeDefault from './themeDefault';
import './globalStyles';

const RouteContainer = posed.div({
  entering: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { opacity: { ease: 'easeIn', duration: 200 } },
  },
  exit: {
    opacity: 0,
    transition: { opacity: { ease: 'easeOut', duration: 200 } },
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
