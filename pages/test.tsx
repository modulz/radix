import React from 'react';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../components/Badge';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Kbd } from '../components/Kbd';
import { Separator } from '../components/Separator';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { Code } from '../components/Code';
import { Input } from '../components/Input';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { TabLink } from '../components/TabLink';
import { SimpleToggle } from '../components/SimpleToggle';
import { ScrollArea } from '../components/Scrollbar';
import { Tooltip } from '../components/Tooltip';
import { Slider } from '../components/Slider';
import { Dialog, DialogTrigger, DialogContent } from '../components/Dialog';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../components/Popover';
import { Checkbox } from '../components/Checkbox';
import { RadioGroup, Radio } from '../components/Radio';
import { ProgressBar } from '../components/ProgressBar';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../components/AlertDialog';
import { Tabs, TabsList, TabsTab, TabsPanel } from '../components/Tabs';
import { Skeleton } from '../components/Skeleton';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from '../components/Accordion';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { Paragraph } from '../components/Paragraph';

import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
import { Color } from '../custom/Color';
import { Avatars } from '../custom/Avatars';
import { Toolbar } from '../custom/Toolbar';
import {
  ActivityLogIcon,
  BarChartIcon,
  CodeIcon,
  CommitIcon,
  ExclamationTriangleIcon,
  FontItalicIcon,
  FontStyleIcon,
  GearIcon,
  HamburgerMenuIcon,
  HeadingIcon,
  LetterCaseCapitalizeIcon,
  LetterCaseLowercaseIcon,
  LetterCaseUppercaseIcon,
  LockClosedIcon,
  PlayIcon,
  ReaderIcon,
  ShadowNoneIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TriangleUpIcon,
  VideoIcon,
} from '@radix-ui/react-icons';

function Test() {
  return (
    <Box css={{ height: '100%' }}>
      <Toolbar />
      <Box css={{ bc: '$loContrast', height: '100%', px: 250, pt: '36px' }}>
        <ScrollArea>
          <Section size="3">
            <Container size="2">
              <Title css={{ ta: 'center', mb: '$3' }}>Radix UI test suite</Title>
              <Subtitle css={{ ta: 'center' }}>
                An environment for testing tokens, theming, and components on Radix UI design
                system.
              </Subtitle>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Section size="1" css={{ bc: '$gray200' }}>
              <Text as="p" size="4" css={{ ta: 'center' }}>
                Section 1
              </Text>
            </Section>
            <Section size="2" css={{ bc: '$gray200', my: '$1' }}>
              <Text as="p" size="4" css={{ ta: 'center' }}>
                Section 2
              </Text>
            </Section>
            <Section size="3" css={{ bc: '$gray200' }}>
              <Text as="p" size="4" css={{ ta: 'center' }}>
                Section 3
              </Text>
            </Section>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="1">
              <Box
                css={{
                  p: '$5',
                  border: '1px solid $gray500',
                  borderRadius: '$3',
                }}
              >
                <form>
                  <Input
                    type="email"
                    size="2"
                    placeholder="Email"
                    autoComplete="off"
                    css={{ mb: '$3' }}
                  />
                  <Input
                    type="password"
                    size="2"
                    placeholder="Password"
                    autoComplete="off"
                    css={{ mb: '$3' }}
                  />
                  <Flex css={{ ai: 'center', jc: 'space-between' }}>
                    <Text size="2" css={{ color: '$gray900' }}>
                      Forgot password
                    </Text>
                    <Button size="2" variant="blue">
                      Log in
                    </Button>
                  </Flex>
                </form>
              </Box>
            </Container>
            <Container size="2" css={{ my: '$9' }}>
              <Paragraph>
                This is a really long paragraph of text, to demonstrate prose text, like for
                example, the kind you might read in a blog post. The reason we're using prose here
                is because the most common use case for this container size is longform text. So
                we're previewing some longform text here so we can make sure the container width
                provides an optimal line length for this font size.
              </Paragraph>
            </Container>
            <Container size="3" css={{ my: '$9' }}>
              <Grid
                css={{
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: '$7',
                }}
              >
                <Box>
                  <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                    This is a much shorter paragraph of text, to demonstrate narrow text container.
                    The reason we're using text here is because one common use case for this
                    container size is a 3-up grid.
                  </Text>
                </Box>
                <Box>
                  <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                    This is a much shorter paragraph of text, to demonstrate narrow text container.
                    The reason we're using text here is because one common use case for this
                    container size is a 3-up grid.
                  </Text>
                </Box>
                <Box>
                  <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                    This is a much shorter paragraph of text, to demonstrate narrow text container.
                    The reason we're using text here is because one common use case for this
                    container size is a 3-up grid.
                  </Text>
                </Box>
              </Grid>
            </Container>
            <Container size="4">
              <Text as="p" size="3" css={{ ta: 'center', bc: '$gray200', py: '$2' }}>
                No max width
              </Text>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Text
                size="6"
                as="h4"
                css={{
                  fontWeight: 500,
                  lineHeight: '27px',
                  mb: '$1',
                }}
              >
                Tracking test
              </Text>
              <Paragraph css={{ mb: '$7' }}>Tracking should be tight and sexi.</Paragraph>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$4' }}>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    900
                  </Text>
                  <Text size="9" as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    800
                  </Text>
                  <Text size="8" as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    700
                  </Text>
                  <Text size="7" as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    600
                  </Text>
                  <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    500
                  </Text>
                  <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    400
                  </Text>
                  <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    300
                  </Text>
                  <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    200
                  </Text>
                  <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    100
                  </Text>
                  <Text size="1" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
              </Flex>
            </Container>

            <Container size="2">
              <Text
                size="6"
                as="h4"
                css={{
                  fontWeight: 500,
                  lineHeight: '27px',
                  mt: '$8',
                  mb: '$1',
                }}
              >
                Corrective indent test
              </Text>
              <Paragraph css={{ mb: '$7' }}>
                Text should be aligned with the yellow box along the left edge. There's some optical
                shit going on here too, so this is not gospel.
              </Paragraph>
            </Container>
            <Container size="2">
              <Flex css={{ fd: 'column', gap: '$4', position: 'relative' }}>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    900
                  </Text>
                  <Text size="9" as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>
                    The quick brown fox
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    800
                  </Text>
                  <Text size="8" as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    700
                  </Text>
                  <Text size="7" as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>
                    The quick brown fox jumped
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    600
                  </Text>
                  <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    500
                  </Text>
                  <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    400
                  </Text>
                  <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    300
                  </Text>
                  <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    200
                  </Text>
                  <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Flex css={{ ai: 'center' }}>
                  <Text size="2" css={{ color: '$gray900', width: '65px' }}>
                    100
                  </Text>
                  <Text size="1" as="p" css={{ lineHeight: '20px' }}>
                    The quick brown fox jumped over the lazy dog.
                  </Text>
                </Flex>
                <Box
                  css={{
                    position: 'absolute',
                    top: '0',
                    left: '65px',
                    right: '0',
                    bottom: '0',
                    background: '$yellow500',
                    zIndex: '-1',
                  }}
                ></Box>
              </Flex>
            </Container>

            <Container size="2">
              <Text
                size="6"
                as="h4"
                css={{
                  fontWeight: 500,
                  lineHeight: '27px',
                  mt: '$8',
                  mb: '$1',
                }}
              >
                Text components
              </Text>
              <Paragraph css={{ mb: '$7' }}>
                A set of pre-formatted components for setting text.
              </Paragraph>

              <Flex css={{ fd: 'column', gap: '$6' }}>
                <Title>This is a title</Title>
                <Subtitle>
                  This is a subtitle, used to support a title or heading. It defaults to h2 but can
                  be rendered as any h level.
                </Subtitle>
                <Heading>This is a large heading</Heading>
                <Subheading>This is a small heading</Subheading>
                <Paragraph>
                  This is a really long paragraph of text, to demonstrate prose text, like for
                  example, the kind you might read in a blog post. The reason we're using prose here
                  is because the most common use case for this container size is longform text. So
                  we're previewing some longform text here so we can make sure the container width
                  provides an optimal line length for this font size.
                </Paragraph>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Flex
                css={{
                  ai: 'center',
                  gap: '$5',
                  fw: 'wrap',
                  mb: '$7',
                }}
              >
                <Skeleton variant="avatar1" />
                <Skeleton variant="avatar2" />
                <Skeleton variant="avatar3" />
                <Skeleton variant="avatar4" />
                <Skeleton variant="avatar5" />
                <Skeleton variant="avatar6" />
              </Flex>
              <Flex
                css={{
                  fd: 'column',
                  gap: '$4',
                  mb: '$7',
                }}
              >
                <Skeleton variant="text" />
                <Skeleton variant="text" css={{ width: '75%' }} />
                <Skeleton variant="text" />
                <Skeleton variant="text" css={{ width: '50%' }} />
              </Flex>
              <Flex
                css={{
                  fd: 'column',
                  gap: '$4',
                  mb: '$7',
                }}
              >
                <Skeleton variant="button" />
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="3">
              <Flex
                css={{
                  ai: 'center',
                  jc: 'center',
                  gap: '$5',
                  fw: 'wrap',
                  mb: '$7',
                }}
              >
                <Badge size="1">Coming soon</Badge>
                <Badge size="2">Coming soon</Badge>
              </Flex>
              <Flex css={{ jc: 'center', gap: '$5', fw: 'wrap' }}>
                <Badge size="2" variant="red">
                  New
                </Badge>
                <Badge size="2" variant="crimson">
                  Approved
                </Badge>
                <Badge size="2" variant="pink">
                  Pending
                </Badge>
                <Badge size="2" variant="purple">
                  Failed
                </Badge>
                <Badge size="2" variant="violet">
                  New
                </Badge>
                <Badge size="2" variant="indigo">
                  Approved
                </Badge>
                <Badge size="2" variant="blue">
                  Pending
                </Badge>
                <Badge size="2" variant="turquoise">
                  Failed
                </Badge>
                <Badge size="2" variant="teal">
                  New
                </Badge>
                <Badge size="2" variant="green">
                  Approved
                </Badge>
                <Badge size="2" variant="lime">
                  Pending
                </Badge>
                <Badge size="2" variant="yellow">
                  Failed
                </Badge>
                <Badge size="2" variant="orange">
                  Failed
                </Badge>
                <Badge size="2" variant="gold">
                  Winner
                </Badge>
                <Badge size="2" variant="bronze">
                  Runner-up
                </Badge>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Flex css={{ gap: '$6' }}>
                <Button>Button</Button>
                <Button variant="blue">Important</Button>
                <Button variant="green">Secure</Button>
                <Button variant="red">Warning</Button>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Flex css={{ ai: 'center', jc: 'space-between' }}>
                <Text>Resize selected object</Text>
                <Flex css={{ ai: 'center', gap: '$1' }}>
                  <Kbd>⌘</Kbd>
                  <Kbd>⇧</Kbd>
                  <Kbd>
                    <TriangleUpIcon />
                  </Kbd>
                </Flex>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Flex css={{ ai: 'baseline' }}>
                <Text size="3" css={{ fontWeight: '500' }}>
                  Colm Tuite
                </Text>
                <VerifiedBadge css={{ as: 'center', mx: '$1' }} />
                <Text size="3" css={{ color: '$gray900' }}>
                  @colmtuite
                </Text>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Flex css={{ gap: '$6' }}>
                <Text size="3" css={{ color: '$gray900' }}>
                  Documentation
                </Text>
                <Text size="5" css={{ color: '$blue600' }}>
                  Documentation
                </Text>
                <Text size="3" css={{ color: '$gray900' }}>
                  About
                </Text>
                <Text size="3" css={{ color: '$gray900' }}>
                  Blog
                </Text>
              </Flex>

              <Paragraph>
                There are 5 variants to choose from. Use is for positive states.{' '}
                <Link css={{}} href="#">
                  This is a link
                </Link>{' '}
                Traditional business literature won’t help you solve it- most of that stuff is
                focused on life after product/market fit, after the Trough of Sorrow. A lot of
                startup stuff is focused on the initial phases, when you don’t have a team, idea, or
                investors.
              </Paragraph>
              <Link variant="blue" css={{}} href="#">
                This is a link
              </Link>
              <Link variant="subtle" css={{}} href="#">
                This is a link
              </Link>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Input size="1" placeholder="Search components..." css={{ mb: '$6' }} />
              <Input size="2" placeholder="Search components..." />
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Paragraph>
                There are 5 variants to choose from. Use <Code>console.log('Radix').console</Code>{' '}
                is for positive states. Traditional business literature won’t help you solve it-
                most of that stuff is focused on life after product/market fit, after the Trough of
                Sorrow. A lot of startup stuff is focused on the initial phases, when you don’t have
                a team, idea, or investors.
              </Paragraph>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">{/* <Switch /> */}</Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <AlertDialog>
                <AlertDialogTrigger as={Button}>Alert Dialog</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogTitle as={Subheading}>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription as={Text} css={{ mt: '$2' }}>
                    This will do a very dangerous thing. Thar be dragons!
                  </AlertDialogDescription>
                  <Flex css={{ jc: 'flex-end', gap: '$3', mt: '$5' }}>
                    <AlertDialogCancel as={Button} variant="ghost">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction as={Button} variant="red">
                      Delete
                    </AlertDialogAction>
                  </Flex>
                </AlertDialogContent>
              </AlertDialog>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Dialog>
                <DialogTrigger as={Button}>Open dialog</DialogTrigger>
                <DialogContent>
                  <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                    Dialog Heading
                  </Text>
                  <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                    There are 5 variants to choose from. Use is for positive states. This is a link
                    Traditional business literature won’t help you solve it- most of that stuff is
                    focused on life after product/market fit, after the Trough of Sorrow.
                  </Text>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger as={Button}>Dialog</DialogTrigger>

                <DialogContent>
                  <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                    Dialog Heading
                  </Text>
                  <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                    There are 5 variants to choose from. Use is for positive states. This is a link
                    Traditional business literature won’t help you solve it- most of that stuff is
                    focused on life after product/market fit, after the Trough of Sorrow.
                  </Text>

                  <Popover>
                    <PopoverTrigger as={Button}>Open</PopoverTrigger>
                    <PopoverContent>
                      <PopoverClose as={Button} variant="ghost">
                        Close
                      </PopoverClose>
                    </PopoverContent>
                  </Popover>
                </DialogContent>
              </Dialog>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Box css={{ mb: '$6' }}>
                <Text size="2">Indeterminate</Text>
                <ProgressBar css={{ my: '$2' }} />
              </Box>
              <Box css={{ mb: '$6' }}>
                <Text size="2">Download 50% complete</Text>
                <ProgressBar max={100} value={80} css={{ my: '$2' }} />
                <Text size="1" css={{ color: '$gray900' }}>
                  46 hours remaining
                </Text>
              </Box>
              <Box css={{ mb: '$6' }}>
                <ProgressBar max={100} color="gradient" value={100} />
              </Box>
              <Box css={{ mb: '$6' }}>
                <ProgressBar color="blue" max={100} value={50} />
              </Box>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Popover>
                <PopoverTrigger as={Button}>Popover</PopoverTrigger>
                <PopoverContent css={{ padding: '$4' }} hideArrow>
                  <Text>Hello, from Popover</Text>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger as={Button}>Popover</PopoverTrigger>
                <PopoverContent css={{ padding: '$4' }} hideArrow>
                  <Text>Hello, from Popover</Text>
                </PopoverContent>
              </Popover>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Accordion>
                <AccordionItem value="accordion-one">
                  <AccordionButton>
                    <Text size="3" css={{ fontWeight: 500 }}>
                      Accordion one
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Text size="3" css={{ lineHeight: '23px' }}>
                      The other main improvement is with tables, which we'll probably use a lot.
                      With horizontal overflow on small devices and when zoomed in, tables are a
                      pain to navigate. I added a focus wrapper that will announce the table context
                      to the user when focused, which also allows keyboard users to navigate the
                      overflow more easily.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="accordion-two">
                  <AccordionButton>
                    <Text size="3" css={{ fontWeight: 500 }}>
                      Accordion two
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Text size="3" css={{ lineHeight: '23px' }}>
                      The other main improvement is with tables, which we'll probably use a lot.
                      With horizontal overflow on small devices and when zoomed in, tables are a
                      pain to navigate. I added a focus wrapper that will announce the table context
                      to the user when focused, which also allows keyboard users to navigate the
                      overflow more easily.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="accordion-three">
                  <AccordionButton>
                    <Text size="3" css={{ fontWeight: 500 }}>
                      Accordion one
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Text size="3" css={{ lineHeight: '23px' }}>
                      The other main improvement is with tables, which we'll probably use a lot.
                      With horizontal overflow on small devices and when zoomed in, tables are a
                      pain to navigate. I added a focus wrapper that will announce the table context
                      to the user when focused, which also allows keyboard users to navigate the
                      overflow more easily.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="accordion-four">
                  <AccordionButton>
                    <Text size="3" css={{ fontWeight: 500 }}>
                      Accordion two
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Text size="3" css={{ lineHeight: '23px' }}>
                      The other main improvement is with tables, which we'll probably use a lot.
                      With horizontal overflow on small devices and when zoomed in, tables are a
                      pain to navigate. I added a focus wrapper that will announce the table context
                      to the user when focused, which also allows keyboard users to navigate the
                      overflow more easily.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Avatars />

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2" css={{ py: '$7' }}>
              <Tabs defaultValue="tab-one">
                <TabsList>
                  <TabsTab value="tab-one">General</TabsTab>
                  <TabsTab value="tab-two">Hosting</TabsTab>
                  <TabsTab value="tab-three">Editor</TabsTab>
                  <TabsTab value="tab-four">Billing</TabsTab>
                  <TabsTab value="tab-five">SEO</TabsTab>
                </TabsList>
                <TabsPanel value="tab-one">
                  <Text>Panel 1</Text>
                </TabsPanel>
                <TabsPanel value="tab-two">
                  <Text>Panel 2</Text>
                </TabsPanel>
                <TabsPanel value="tab-three">
                  <Text>Panel 3</Text>
                </TabsPanel>
                <TabsPanel value="tab-four">
                  <Text>Panel 4</Text>
                </TabsPanel>
                <TabsPanel value="tab-five">
                  <Text>Panel 5</Text>
                </TabsPanel>
              </Tabs>

              <Tabs defaultValue="tab-one" orientation="vertical" css={{ mt: '$9' }}>
                <TabsList>
                  <TabsTab value="tab-one">General</TabsTab>
                  <TabsTab value="tab-two">Hosting</TabsTab>
                  <TabsTab value="tab-three">Editor</TabsTab>
                  <TabsTab value="tab-four">Billing</TabsTab>
                  <TabsTab value="tab-five">SEO</TabsTab>
                  <TabsTab value="tab-six">Forms</TabsTab>
                  <TabsTab value="tab-seven">Fonts</TabsTab>
                  <TabsTab value="tab-eight">Backups</TabsTab>
                  <TabsTab value="tab-nine">Integrations</TabsTab>
                  <TabsTab value="tab-ten">Custom code</TabsTab>
                </TabsList>
                <TabsPanel value="tab-one">
                  <Text>Panel 1</Text>
                </TabsPanel>
                <TabsPanel value="tab-two">
                  <Text>Panel 2</Text>
                </TabsPanel>
                <TabsPanel value="tab-three">
                  <Text>Panel 3</Text>
                </TabsPanel>
                <TabsPanel value="tab-four">
                  <Text>Panel 4</Text>
                </TabsPanel>
                <TabsPanel value="tab-five">
                  <Text>Panel 5</Text>
                </TabsPanel>
                <TabsPanel value="tab-six">
                  <Text>Panel 6</Text>
                </TabsPanel>
                <TabsPanel value="tab-seven">
                  <Text>Panel 7</Text>
                </TabsPanel>
                <TabsPanel value="tab-eight">
                  <Text>Panel 8</Text>
                </TabsPanel>
                <TabsPanel value="tab-nine">
                  <Text>Panel 9</Text>
                </TabsPanel>
                <TabsPanel value="tab-ten">
                  <Text>Panel 10</Text>
                </TabsPanel>
              </Tabs>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="3" css={{ py: '$7' }}>
              <Flex css={{ borderBottom: '1px solid $gray500' }}>
                <TabLink href="#" active>
                  <Box css={{ mr: '$1' }}>
                    <CodeIcon />
                  </Box>
                  Code
                </TabLink>
                <TabLink href="#">
                  <Box css={{ mr: '$1' }}>
                    <ExclamationTriangleIcon />
                  </Box>
                  Issues
                </TabLink>
                <TabLink href="#">
                  <Box css={{ mr: '$1' }}>
                    <CommitIcon />
                  </Box>
                  Pull requests
                </TabLink>
                <TabLink href="#">
                  <Box css={{ mr: '$1' }}>
                    <VideoIcon />
                  </Box>
                  Actions
                </TabLink>
                <TabLink href="#">
                  <Box css={{ mr: '$1' }}>
                    <ActivityLogIcon />
                  </Box>
                  Projects
                </TabLink>
                <TabLink href="#">
                  <Box css={{ mr: '$1' }}>
                    <ReaderIcon />
                  </Box>
                  Wiki
                </TabLink>
                <TabLink href="#">
                  <Box css={{ mr: '$1' }}>
                    <LockClosedIcon />
                  </Box>
                  Security
                </TabLink>
                <TabLink href="#">
                  <Box css={{ mr: '$1' }}>
                    <BarChartIcon />
                  </Box>
                  Insights
                </TabLink>
                <TabLink href="#">
                  <Box css={{ mr: '$1' }}>
                    <GearIcon />
                  </Box>
                  Settings
                </TabLink>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Box css={{ width: '100px' }}>
                <Slider defaultValue={[50]} />
              </Box>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2">
              <Grid
                css={{
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: '$7',
                }}
              >
                <Box>
                  <SimpleToggle shape="circle">
                    <ShadowNoneIcon />
                  </SimpleToggle>
                </Box>
                <Flex css={{ gap: 2 }}>
                  <SimpleToggle shape="circle">
                    <FontItalicIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="circle">
                    <FontStyleIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="circle">
                    <HeadingIcon />
                  </SimpleToggle>
                </Flex>
                <Flex>
                  <SimpleToggle shape="square">
                    <TextAlignLeftIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="square">
                    <TextAlignCenterIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="square">
                    <TextAlignRightIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="square">
                    <TextAlignJustifyIcon />
                  </SimpleToggle>
                </Flex>
              </Grid>
              <Flex css={{ alignItems: 'center', gap: '$1' }}>
                <Flex css={{ gap: 2 }}>
                  <SimpleToggle shape="circle">
                    <FontItalicIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="circle">
                    <FontStyleIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="circle">
                    <HeadingIcon />
                  </SimpleToggle>
                </Flex>
                <Separator orientation="vertical" />
                <Flex>
                  <SimpleToggle shape="square">
                    <TextAlignLeftIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="square">
                    <TextAlignCenterIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="square">
                    <TextAlignRightIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="square">
                    <TextAlignJustifyIcon />
                  </SimpleToggle>
                </Flex>
                <Separator orientation="vertical" />
                <Flex>
                  <SimpleToggle shape="square">
                    <LetterCaseCapitalizeIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="square">
                    <LetterCaseUppercaseIcon />
                  </SimpleToggle>
                  <SimpleToggle shape="square">
                    <LetterCaseLowercaseIcon />
                  </SimpleToggle>
                </Flex>
              </Flex>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2" css={{ py: '$7' }}>
              <Checkbox css={{ mr: '$5' }} />
              <Checkbox size="2" css={{ mr: '$5' }} />
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Section size="3">
            <Container size="2" css={{ py: '$7' }}>
              <RadioGroup defaultValue="1">
                <Radio value="1" css={{ mr: '$5' }} />
                <Radio value="2" size="2" css={{ mr: '$5' }} />
              </RadioGroup>
            </Container>
          </Section>

          <Flex css={{ jc: 'center' }}>
            <Separator size="2" />
          </Flex>

          <Color />
        </ScrollArea>

        <Layers />
        <Properties />
      </Box>
    </Box>
  );
}

export default Test;
