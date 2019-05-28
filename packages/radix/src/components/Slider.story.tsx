import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Slider } from './Slider';
import { Button } from './Button';
import { Text } from './Text';

function SliderStory() {
  const [value, setValue] = useState('50');
  return (
    <Box width={350}>
      <Box mb="4">
        <Text as="p">Uncontrolled</Text>
        <Slider />
      </Box>

      <Box mt="4" mb="4">
        <Text as="p">Controlled</Text>
        <Slider
          value={value}
          onChange={event => setValue(event.target.value)}
          min={0}
        />
        <div>
          <Text as="p" size={3} my="3">
            Current value is {value}
          </Text>
          <Button mx="1" onClick={() => setValue('0')}>
            change to 0
          </Button>
          <Button mx="1" onClick={() => setValue('50')}>
            change to 50
          </Button>
          <Button mx="1" onClick={() => setValue('100')}>
            change to 100
          </Button>
        </div>
      </Box>

      <Box mb="4">
        <Text as="p">Highlight</Text>
        <Slider variant="highlight" />
      </Box>

      <Box mb="4">
        <Text as="p">Epxlicit</Text>
        <Slider disabled />
      </Box>
    </Box>
  );
}

storiesOf('Components|Slider', module).add('default', () => <SliderStory />);
