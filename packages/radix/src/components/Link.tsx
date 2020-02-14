import React from 'react';
import { Link as LinkPrimitive, LinkProps as LinkPrimitiveProps } from '@modulz/primitives';
import { theme } from '../theme';

export type LinkProps = LinkPrimitiveProps & { to?: string; children?: React.ReactNode; as?: any };

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, forwardedRef) => (
  <LinkPrimitive
    {...props}
    ref={forwardedRef}
    styleConfig={{
      base: {
        link: {
          normal: {
            color: theme.colors.blue700,
          },
          focus: {
            boxShadow: `0 0 0 2px ${theme.colors.blue500}`,
          },
        },
      },
    }}
  />
));
