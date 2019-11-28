import React from 'react';
import css from '@styled-system/css';
import { variant, Prop } from '@modulz/radix-system';
import { Pipe as PipePrimitive, PipeProps as PipePrimitiveProps } from 'mdlz-prmtz';

type SizeProps = 'normal' | 'large' | 'fluid';
type PipeProps = PipePrimitiveProps & { variant?: Prop<SizeProps> };

export const Pipe = React.forwardRef<HTMLDivElement, PipeProps>((props, ref) => (
  <PipePrimitive
    {...props}
    ref={ref}
    css={[
      css({
        backgroundColor: 'gray300',
      }),
      variant({
        variant: {
          normal: {
            height: 3,
          },
          large: {
            height: 7,
          },
          fluid: {
            height: '100%',
          },
        },
      }),
    ]}
  />
));

Pipe.defaultProps = { variant: 'normal' };
