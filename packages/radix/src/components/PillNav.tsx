import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { transparentize } from 'polished';
import { MarginProps, themeGet } from 'styled-system';
import { Box } from './Box';

type PillNavProps = MarginProps & {
  children: ReactElement<PillProps>[];
};

export const PillNav: FC<PillNavProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

type PillProps = {
  active?: boolean;
};

export const Pill = styled('button')<PillProps>(
  ({ active, ...props }) =>
    css({
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      flexBasis: 0,
      flexGrow: 1,
      position: 'relative',
      fontSize: 2,
      fontFamily: 'medium',
      fontWeight: 500,
      backgroundColor: active ? 'grays.1' : 'white',
      border: '1px solid',
      borderColor: active ? 'grays.4' : 'grays.3',
      color: 'grays.5',
      height: 5,
      paddingY: 0,
      paddingX: 4,
      minWidth: 5,
      textDecoration: 'none',
      outline: 'none',
      zIndex: active ? 1 : 0,
      margin: 0,
      marginLeft: -1,
      pointerEvents: active && 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      boxShadow:
        active &&
        `inset 0 1px 0 ${transparentize(
          0.9,
          themeGet('colors.grays.8')(props)
        )}`,
      '&:first-child': {
        marginLeft: 0,
        borderTopLeftRadius: 9999,
        borderBottomLeftRadius: 9999,
      },
      '&:last-child': {
        borderTopRightRadius: 9999,
        borderBottomRightRadius: 9999,
      },
      '&:hover': {
        borderColor: 'grays.4',
        zIndex: 2,
      },
      '&:disabled': {
        backgroundColor: 'grays.1',
        color: 'grays.4',
        pointerEvents: 'none',
      },
      '&::-moz-focus-inner': {
        border: 0,
      },
    }),
  {
    lineHeight: 1,
  }
);
