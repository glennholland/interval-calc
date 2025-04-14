import _ from 'lodash';
import { PropsWithChildren } from 'react';

export const deepCompareProps = (
  prevProps: PropsWithChildren,
  nextProps: PropsWithChildren
) => _.isEqual(prevProps, nextProps);
