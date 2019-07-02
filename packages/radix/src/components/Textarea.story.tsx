import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Textarea } from './Textarea';

storiesOf('Components|Textara', module).add('default', () => (
  <Box maxWidth="300px">
    <Box mb="4">
      <Textarea placeholder="Your email" />
    </Box>

    <Box mb="4">
      <Textarea size={1} placeholder="Your email" />
    </Box>

    <Box mb="4">
      <Textarea variant="ghost" placeholder="Your email" />
    </Box>
  </Box>
));
