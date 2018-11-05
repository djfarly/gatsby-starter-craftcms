import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

storiesOf('Icons', module).add('All Icons', () => (
  <>
    <Icon type="arrowLeft" />
    <Icon type="arrowRight" />
    <Icon type="hamburger" />
    <Icon type="socialFacebook" />
    <Icon type="logoEvo" />
    <Icon type="logoEvo" />
    <Icon type="socialInstagram" />
  </>
));
