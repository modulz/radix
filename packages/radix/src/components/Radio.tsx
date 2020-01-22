import React from 'react';
import { Radio as RadioPrimitive, RadioProps as RadioPrimitiveProps } from 'mdlz-prmtz';
import { theme } from '../theme';

export type RadioProps = RadioPrimitiveProps;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, forwardedRef) => (
  <RadioPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        radio: {
          normal: {
            width: theme.sizes[4],
            height: theme.sizes[4],
            border: '1px solid',
            borderColor: theme.colors.gray400,
            backgroundColor: theme.colors.white,
          },
          hover: {
            borderColor: theme.colors.gray500,
          },
          focus: {
            borderColor: theme.colors.blue600,
          },
          disabled: {
            opacity: 0.5,
          },
        },
        icon: {
          normal: {
            backgroundColor: theme.colors.blue600,
            width: theme.sizes[2],
            height: theme.sizes[2],
          },
        },
      },
    }}
  />
));
