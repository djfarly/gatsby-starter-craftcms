import React from 'react';

import WrapGrid from 'components/WrapGrid';
import Link from 'components/Link';
import Headline from 'components/Headline';
import Text from 'components/Text';

const NotFoundPage = () => (
  <WrapGrid>
    <Headline>Not found</Headline>
    <Text>
      You just hit a route that doesn&#39;t exist... the sadness. Go back to{' '}
      <Link to="/">start</Link>.
    </Text>
  </WrapGrid>
);

export default NotFoundPage;
