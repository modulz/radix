import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled, StitchesProps } from '../stitches.config';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { menuCss, separatorCss, itemCss, interactiveItemCss, labelCss } from './Menu';
import { Box } from './Box';
import { Panel } from './Panel';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const StyledDropdownMenuContent = styled(DropdownMenuPrimitive.Content, menuCss);

type MenuCSSProp = Pick<StitchesProps<typeof StyledDropdownMenuContent>, 'css'>;
type MenuOwnProps = Polymorphic.OwnProps<typeof DropdownMenuPrimitive.Content> & MenuCSSProp;
type MenuComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof DropdownMenuPrimitive.Content>,
  MenuOwnProps
>;

export const DropdownMenuContent = React.forwardRef((props, forwardedRef) => (
  <StyledDropdownMenuContent as={Panel} {...props} ref={forwardedRef} />
)) as MenuComponent;

export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss);

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);

const StyledMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, interactiveItemCss);

type MenuRadioItemCSSProp = Pick<StitchesProps<typeof StyledMenuRadioItem>, 'css'>;
type MenuRadioItemOwnProps = Polymorphic.OwnProps<typeof DropdownMenuPrimitive.RadioItem> &
  MenuRadioItemCSSProp;
type MenuRadioItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof DropdownMenuPrimitive.RadioItem>,
  MenuRadioItemOwnProps
>;

export const DropdownMenuRadioItem = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuRadioItem>
)) as MenuRadioItemComponent;

const StyledMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, interactiveItemCss);

type MenuCheckboxItemCSSProp = Pick<StitchesProps<typeof StyledMenuCheckboxItem>, 'css'>;
type MenuCheckboxItemOwnProps = Polymorphic.OwnProps<typeof DropdownMenuPrimitive.CheckboxItem> &
  MenuCheckboxItemCSSProp;
type MenuCheckboxItemComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof DropdownMenuPrimitive.CheckboxItem>,
  MenuCheckboxItemOwnProps
>;

export const DropdownMenuCheckboxItem = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuCheckboxItem>
)) as MenuCheckboxItemComponent;

export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);

// Group CSS cant be abstraced because it contains variants
// and Stitches Alpha types dont work properly
export const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {
  variants: {
    indented: {
      true: {
        '[data-radix-menu-item], [data-radix-menu-label]': {
          paddingLeft: '$5',
        },
      },
    },
  },
});

// Group CSS cant be abstraced because it contains variants
// and Stitches Alpha types dont work properly
export const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {
  variants: {
    indented: {
      true: {
        '[data-radix-menu-item], [data-radix-menu-label]': {
          paddingLeft: '$5',
        },
      },
    },
  },
});
