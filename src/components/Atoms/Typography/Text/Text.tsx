import classNames from 'classnames';
import * as React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { polyRef } from '@/helpers';

import './Text.scss';

export const textSize = ['xs', 's', 'm'] as const;
export type TextSizeType = (typeof textSize)[number];

export interface TextProps extends BoxProps {
  size?: TextSizeType;
  children: React.ReactNode;
}

export const Text = polyRef<'p', TextProps>(({ as = 'p', size, children, ...props }, ref) => (
  <Box as={as} ref={ref} {...props} className={classNames({ [`text-${size}`]: size }, props?.className)}>
    {children}
  </Box>
));
