import React from 'react';
import { transparentize } from 'polished';
import themeGet from '@styled-system/theme-get';
import { variant, Prop } from '@modulz/radix-system';
import { Card as CardPrimitive, CardProps as CardPrimitiveProps } from 'mdlz-prmtz';

export type Variants = 'border' | 'shadow' | 'ghost';

type CardProps = CardPrimitiveProps & {
  variant?: Prop<Variants>;
};

const createShadow = (defaultOpacity: any, color: any) => ({
  position: 'relative',
  transition: 'opacity 80ms linear, transform 150ms ease',
  borderColor: 'transparent',
  '&::before': {
    content: `""`,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    pointerEvents: 'none',
    transitionProperty: 'all',
    transitionDuration: '80ms',
    transitionTimingFunction: 'linear',
    boxShadow: `0 10px 38px -10px ${transparentize(0.65, color)},
      0 10px 20px -15px ${transparentize(0.8, color)}`,
    opacity: defaultOpacity,
  },
});

export const baseCard = (props: CardProps) =>
  variant({
    variant: {
      border: {
        position: 'relative',
        padding: 4,
        borderRadius: 2,
        border: '1px solid transparent',
        borderColor: 'grays.3',
      },
      ghost: {
        position: 'relative',
        padding: 4,
        borderRadius: 2,
        border: '1px solid transparent',
        ...createShadow(0, themeGet('colors.grays.8')(props)),
      },
      shadow: {
        position: 'relative',
        padding: 4,
        borderRadius: 2,
        borderColor: 'transparent',
        ...createShadow(1, themeGet('colors.grays.8')(props)),
      },
    },
  })(props);

export const Card = (props: CardProps) => <CardPrimitive {...props} css={baseCard} />;

Card.defaultProps = {
  variant: 'border',
};
