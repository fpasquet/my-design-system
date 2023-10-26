import classNames from 'classnames';
import * as React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { polyRef } from '@/helpers';

import './Heading.scss';

export const headingSize = ['s', 'm', 'l'] as const;
export type HeadingSizeType = (typeof headingSize)[number];

export interface HeadingProps extends BoxProps {
  size: HeadingSizeType;
  children: React.ReactNode;
}

export const Heading = polyRef<'h1', HeadingProps>(({ as = 'h1', size, children, ...props }, ref) => (
  <Box as={as} ref={ref} className={classNames(`heading-${size}`, props?.className)} {...props}>
    {children}
  </Box>
));
