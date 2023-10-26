import classNames from 'classnames';
import * as React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { polyRef } from '@/helpers';

import './Link.scss';

export interface LinkProps extends BoxProps {
  children: React.ReactNode;
}

export const Link = polyRef<'a', LinkProps>(({ as = 'a', children, ...props }, ref) => (
  <Box as={as} ref={ref} className={classNames('link', props?.className)} {...props}>
    {children}
  </Box>
));
