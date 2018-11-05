import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

const LOREM_IPSUM =
  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.';

storiesOf('Text', module)
  .add('paragraph text', () => <Text>{LOREM_IPSUM}</Text>)
  .add('with some emoji', () => <Text element="span">{LOREM_IPSUM}</Text>);
