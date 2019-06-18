import styled from 'styled-components';
import { compose } from 'styled-system';

import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  gridSet,
  GridSetProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from '../system';

type GridProps = AlignContentProps & AlignItemsProps & GridSetProps & MarginProps & PaddingProps;

const styleProps = compose(
  alignContent,
  alignItems,
  gridSet,
  margin,
  padding
);

export const Grid = styled.div<GridProps>({ display: 'grid' }, styleProps);
