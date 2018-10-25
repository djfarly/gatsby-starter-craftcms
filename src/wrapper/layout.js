import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { ContextProviderComponent } from './context';

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

export default class Wrapper extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <ContextProviderComponent>
        <Fragment>
          <PoseGroup preEnterPose="entering">
            <RouteContainer key={location.key}>
              <div style={{ margin: '50px auto', maxWidth: '900px' }}>
                {children}
              </div>
            </RouteContainer>
          </PoseGroup>
        </Fragment>
      </ContextProviderComponent>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
