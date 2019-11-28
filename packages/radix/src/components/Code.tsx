import React from 'react';
import css from '@styled-system/css';
import { Code as CodePrimitive, CodeProps as CodePrimitiveProps } from 'mdlz-prmtz';
import { variant, Prop } from '@modulz/radix-system';

type Variants = 'normal' | 'fade';
type CodeProps = CodePrimitiveProps & { children?: React.ReactNode; variant?: Prop<Variants> };

export const Code = React.forwardRef<HTMLElement, CodeProps>((props, ref) => (
  <CodePrimitive
    {...props}
    ref={ref}
    css={[
      css({
        borderRadius: 1,
        fontFamily: 'mono',
        fontSize: 2,
        letterSpacing: '-0.0175em',
        paddingY: '0.15em',
        paddingX: 1,
      }),
      variant({
        variant: {
          normal: {
            backgroundColor: 'blue200',
            color: 'blue700',
          },
          fade: {
            backgroundColor: 'gray200',
            color: 'gray700',
          },
        },
      }),
      { lineHeight: 1 },
    ]}
  />
));

Code.defaultProps = { variant: 'normal' };
