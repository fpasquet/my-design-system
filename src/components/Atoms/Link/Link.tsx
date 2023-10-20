import classNames from 'classnames';
import * as React from 'react';
import './Link.scss';

import { Box, BoxProps } from '@/components';
import { polyRef } from '@/helpers';

export interface LinkProps extends BoxProps {
  children: React.ReactNode;
}

export const Link = polyRef<'a', LinkProps>(({ as = 'a', children, ...props }, ref) => (
  <Box as={as} ref={ref} className={classNames('link', props?.className)} {...props}>
    {children}
  </Box>
));
