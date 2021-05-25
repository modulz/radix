import { RadiobuttonIcon, SliderIcon, SwitchIcon, TextIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Code } from '../components/Code';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Section } from '../components/Section';
import { Separator } from '../components/Separator';
import { Text } from '../components/Text';
import { TreeItem } from '../components/TreeItem';
import { ColorTools } from '../custom/ColorTools';
import { darkTheme as darkThemeClassName } from '../stitches.config';

const sidebarWidth = 240;

export const loContrasts = ['lime', 'yellow', 'amber', 'sky', 'mint'];

export const colors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',

  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',

  'blue',
  'cyan',
  'teal',
  'green',
  'grass',

  'brown',
  'bronze',
  'gold',

  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'orange',
] as const;

export default function Colors() {
  const [palette, setPalette] = useLocalStorage('colors-palette', true);
  const [layers, setLayers] = useLocalStorage('colors-layers', true);
  const [alerts, setAlerts] = useLocalStorage('colors-alerts', true);
  const [buttons, setButtons] = useLocalStorage('colors-buttons', true);
  const [lines, setLines] = useLocalStorage('colors-lines', true);
  const [textBlocks, setTextBlocks] = useLocalStorage('colors-textBlocks', true);
  const [alphaValues, setAlphaValues] = useLocalStorage('colors-alphaValues', true);

  const [darkTheme, setDarkTheme] = useLocalStorage('colors-darkTheme', false);
  const [grayscale, setGrayscale] = useLocalStorage('colors-grayscale', false);
  const [blur, setBlur] = useLocalStorage('colors-blur', false);
  const [gap, setGap] = useLocalStorage('colors-gap', true);

  // No SSR please
  if (typeof window === 'undefined') {
    return null;
  }

  React.useLayoutEffect(() => {
    document.body.style.filter = grayscale ? 'saturate(0)' : '';
  }, [grayscale]);

  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle('gap', gap);
  }, [gap]);

  React.useLayoutEffect(() => {
    document.body.classList.toggle('theme-default', !darkTheme);
    document.body.classList.toggle(darkThemeClassName, darkTheme);
    document.documentElement.style.backgroundColor = darkTheme ? 'black' : '';
  }, [darkTheme]);

  return (
    <>
      <Section size="3" css={{ py: '$7', ml: sidebarWidth, overflowY: 'scroll', height: '100vh' }}>
        <Container size="3" css={{ mb: '$5' }}>
          <Box>
            <Checkbox defaultChecked={palette} onChange={(e) => setPalette(e.target.checked)}>
              Palette
            </Checkbox>
            <Checkbox defaultChecked={layers} onChange={(e) => setLayers(e.target.checked)}>
              Layers
            </Checkbox>
            <Checkbox defaultChecked={buttons} onChange={(e) => setButtons(e.target.checked)}>
              Buttons
            </Checkbox>
            <Checkbox defaultChecked={buttons} onChange={(e) => setLines(e.target.checked)}>
              Lines
            </Checkbox>
            <Checkbox defaultChecked={alerts} onChange={(e) => setAlerts(e.target.checked)}>
              Alerts
            </Checkbox>
            <Checkbox defaultChecked={textBlocks} onChange={(e) => setTextBlocks(e.target.checked)}>
              Text Blocks
            </Checkbox>
            <Separator css={{ my: '$3' }} />
            <Checkbox defaultChecked={grayscale} onChange={(e) => setGrayscale(e.target.checked)}>
              Grayscale
            </Checkbox>
            <Checkbox defaultChecked={gap} onChange={(e) => setGap(e.target.checked)}>
              Gaps
            </Checkbox>
            <Checkbox defaultChecked={blur} onChange={(e) => setBlur(e.target.checked)}>
              Blur
            </Checkbox>
            <Checkbox defaultChecked={darkTheme} onChange={(e) => setDarkTheme(e.target.checked)}>
              Dark theme
            </Checkbox>
            <Separator css={{ my: '$3' }} />
            <Checkbox
              data-alpha-values
              defaultChecked={false}
              onChange={(e) => setAlphaValues(e.target.checked)}
            >
              Alpha scales (code only)
            </Checkbox>
          </Box>
        </Container>

        <div style={{ filter: blur ? 'blur(20px)' : undefined }}>
          {palette && <Palette />}
          {layers && <Layers />}
          {buttons && <Buttons />}
          {lines && <Lines />}
          {alerts && <Alerts />}
          {textBlocks && <TextBlocks />}
        </div>
      </Section>
      <Sidebar />
    </>
  );
}

function Sidebar() {
  return (
    <Box
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        bc: 'white',
        overflowY: 'scroll',
        boxShadow: '1px 0 $colors$gray6',
        width: 240,
        [`body.${darkThemeClassName} &`]: {
          bc: 'black',
        } as any,
      }}
    >
      <ColorTools />
    </Box>
  );
}

function Layers() {
  return (
    <Container size="4" css={{ p: '$9' }}>
      <Grid css={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '$5' }}>
        {colors.map((color) => (
          <Box key={color}>
            <TreeItem css={{ bc: `$${color}5` }}>
              <Box css={{ mr: '$2' }}>
                <RadiobuttonIcon />
              </Box>
              <Text size="1">Radio</Text>
            </TreeItem>
            <TreeItem
              css={{
                pl: 45,
                bc: `$${color}3`,
                '&:hover': { bc: `$${color}4` },
                '&:active': { bc: `$${color}5` },
              }}
            >
              <Box css={{ mr: '$2' }}>
                <SliderIcon />
              </Box>
              <Text size="1">Slider</Text>
            </TreeItem>
            <TreeItem
              css={{
                pl: 45,
                bc: `$${color}3`,
                '&:hover': { bc: `$${color}4` },
                '&:active': { bc: `$${color}5` },
              }}
            >
              <Box css={{ mr: '$2' }}>
                <SwitchIcon />
              </Box>
              <Text size="1">Switch</Text>
            </TreeItem>
            <TreeItem
              css={{
                pl: 45,
                bc: `$${color}3`,
                '&:hover': { bc: `$${color}4` },
                '&:active': { bc: `$${color}5` },
              }}
            >
              <Box css={{ mr: '$2' }}>
                <TextIcon />
              </Box>
              <Text size="1">Text</Text>
            </TreeItem>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

function Buttons() {
  return (
    <Container size="3" css={{ my: '$9' }}>
      <Grid css={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '$5' }}>
        {colors.map((color) => (
          <Box key={color} css={{ '&[class] * + *': { ml: '$2', verticalAlign: 'top' } }}>
            <Button variant="gray">Neutral</Button>
            <Button
              css={{
                fontWeight: 500,
                textTransform: 'capitalize',
                backgroundColor: `$${color}2`,
                boxShadow: `inset 0 0 0 1px $colors$${color}7`,
                color: `$${color}11`,
                '@hover': {
                  '&:hover': {
                    boxShadow: `inset 0 0 0 1px $colors$${color}8`,
                  },
                },
                '&:active': {
                  backgroundColor: `$${color}3`,
                  boxShadow: `inset 0 0 0 1px $colors$${color}8`,
                },
                '&:focus': {
                  boxShadow: `inset 0 0 0 1px $colors$${color}8, 0 0 0 1px $colors$${color}8`,
                },
              }}
            >
              {color}
            </Button>
          </Box>
        ))}
      </Grid>

      <Grid css={{ gridTemplateColumns: 'repeat(8, 1fr)', gap: '$5', mt: '$9' }}>
        {colors.map((color) => (
          <Box key={color} css={{ '&[class] * + *': { ml: '$2', verticalAlign: 'top' } }}>
            <Button
              size="2"
              css={{
                // fontWeight: 5,
                textTransform: 'capitalize',
                backgroundColor: `$${color}9`,
                color: getHiContrast(color),
                boxShadow: 'none',
                borderRadius: '$pill',
                '@hover': {
                  '&:hover': {
                    color: getHiContrast(color),
                    boxShadow: 'none',
                    backgroundColor: `var(--colors-${color}10)`,
                  },
                },
                '&:active': {
                  boxShadow: 'none',
                  color: 'white',
                  backgroundColor: `$${color}11`,
                },
                '&:focus': {
                  boxShadow: `0 0 0 2px $colors$${color}7`,
                },
              }}
            >
              {color}
            </Button>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

function Lines() {
  return (
    <Container size="2" css={{ my: '$9' }}>
      <Text size="6" as="h4" css={{ fontWeight: 500, lineHeight: '27px', mt: '$8', mb: '$1' }}>
        Lines
      </Text>
      <Paragraph css={{ mb: '$7' }}>
        The <Code>500</Code> line should be very subtle, but visible on all backgrounds.
      </Paragraph>

      <Flex css={{ position: 'relative' }}>
        <Box
          css={{
            fb: '0',
            fg: '1',
            height: 160,
            backgroundColor: '$gray1',
          }}
        ></Box>
        <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray2' }}></Box>
        <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray3' }}></Box>
        <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray4' }}></Box>
        <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray5' }}></Box>
        <Box
          css={{
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: 1,
            backgroundColor: '$gray6',
          }}
        ></Box>
      </Flex>
    </Container>
  );
}

function Alerts() {
  return (
    <Container size="3" css={{ mb: '$9' }}>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box key={color} css={{ p: '$4', borderRadius: '$3', bc: `$${color}9` }}>
            <Text size="2" as="p" css={{ color: getHiContrast(color) }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              p: '$4',
              bc: `$${color}2`,
              borderLeft: `2px solid $${color}6`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}11` }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              p: '$4',
              bc: `$${color}2`,
              borderLeft: `3px solid $${color}8`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}11` }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              p: '$4',
              borderRadius: '$3',
              bc: `$${color}3`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}12` }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>

      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '$3',
          mb: '$9',
          ai: 'center',
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            css={{
              p: '$4',
              borderRadius: '$3',
              bc: `$${color}2`,
              border: `1px solid $${color}6`,
            }}
          >
            <Text size="2" as="p" css={{ color: `$${color}11` }}>
              Warning: obsessing over {color} is a terrible idea.
            </Text>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

function TextBlocks() {
  const text = `The pigeon guillemot (Cepphus columba) is a species of bird in the auk family, Alcidae.
  One of three species in the genus Cepphus, it is most closely related to the spectacled
  guillemot. There are five subspecies of the pigeon guillemot; all subspecies, when in
  breeding plumage, are dark brown with a black iridescent sheen and a distinctive wing
  patch broken by a brown-black wedge. Its non-breeding plumage has mottled grey and black
  upperparts and white underparts. The long bill is black, as are the claws. The legs, feet,
  and inside of the mouth are red. It closely resembles the black guillemot, which is
  slightly smaller and lacks the dark wing wedge present in the pigeon guillemot. Combined,
  the two form a superspecies.`;

  return (
    <Box css={{ mb: '$9' }}>
      {colors.map((color) => {
        const color1 = `$${color}1`;
        const color2 = `$${color}2`;
        const color3 = `$${color}3`;
        const color9 = `$${color}9`;
        const color12 = `$${color}12`;

        return (
          <Box key={color} css={{ 'html.gap &': { display: 'grid', gap: '$5' } }}>
            <Box css={{ bc: color1, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color12, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color12 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color2, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color12, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color12 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color3, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color12, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color12 }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color9, p: 200 }}>
              <Container size="3">
                <Heading
                  css={{ mb: '$2', color: getHiContrast(color), textTransform: 'capitalize' }}
                >
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: getHiContrast(color) }}>
                  {text}
                </Text>
              </Container>
            </Box>
            <Box css={{ bc: color12, p: 200 }}>
              <Container size="3">
                <Heading css={{ mb: '$2', color: color2, textTransform: 'capitalize' }}>
                  {color}
                </Heading>
                <Text size="3" css={{ lineHeight: '25px', color: color2 }}>
                  {text}
                </Text>
              </Container>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function Palette() {
  const gridStyle = {
    gridAutoRows: '35px',
    gridTemplateColumns: 'repeat(13, minmax(0, 1fr))',
    'html.gap &': { gap: 2 },
  };

  return (
    <Container size="3">
      <Box css={{ mb: '$9', 'html.gap &': { display: 'grid', gap: 2 } }}>
        <Grid css={gridStyle}>
          <Box></Box>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>1</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>2</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>3</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>4</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>5</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>6</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>7</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>8</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>9</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>10</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>11</Text>
          <Text css={{ color: '$gray9', fontSize: '$2', ta: 'center' }}>12</Text>
        </Grid>

        {colors.map((color) => (
          <Grid key={color} css={gridStyle}>
            <Box css={{ alignSelf: 'center' }}>
              <Text size="2" css={{ textTransform: 'capitalize' }}>
                {color}
              </Text>
            </Box>
            <Box
              css={{ bc: `$${color}1` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}1)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}2` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}2)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}3` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}3)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}4` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}4)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}5` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}5)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}6` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}6)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}7` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}7)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}8` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}8)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}9` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}9)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}10` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}10)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}11` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}11)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
            <Box
              css={{ bc: `$${color}12` }}
              onClick={() => {
                const thisColor = `var(--colors-${color}12)`;
                const newColor = document.body.style.backgroundColor === thisColor ? '' : thisColor;
                document.body.style.backgroundColor = newColor;
              }}
            />
          </Grid>
        ))}
      </Box>
    </Container>
  );
}

function Checkbox({
  children,
  ...props
}: React.ComponentProps<'input'> & { children?: React.ReactNode }) {
  return (
    <Box>
      <Text size="2" as="label" css={{ display: 'inline-block', lineHeight: '20px' }}>
        <input
          type="checkbox"
          style={{ verticalAlign: 'middle', margin: 0, marginRight: 5, marginTop: -2 }}
          {...props}
        />{' '}
        {children}
      </Text>
    </Box>
  );
}

export function getHiContrast(color: string) {
  if (loContrasts.includes(color)) {
    return 'hsl(0, 0%, 0%)';
  }

  return 'hsl(0, 0%, 100%)';
}

// https://usehooks.com/useLocalStorage/
function useLocalStorage(key: string, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
