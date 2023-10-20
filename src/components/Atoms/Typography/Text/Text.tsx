import classNames from 'classnames';
import * as React from 'react';
import './Text.scss';

import { Box, BoxProps } from '@/components';
import { polyRef } from '@/helpers';

export const textSize = ['xs', 's', 'm'] as const;
export type TextSizeType = (typeof textSize)[number];

export interface TextProps extends BoxProps {
  size?: TextSizeType;
  children: React.ReactNode;
}

export const Text = polyRef<'p', TextProps>(({ as = 'p', size, children, ...props }, ref) => {
  return (
    <Box as={as} ref={ref} {...props} className={classNames({ [`text-${size}`]: size }, props?.className)}>
      {children}
    </Box>
  );
});
