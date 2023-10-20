import classNames from 'classnames';
import * as React from 'react';

import { systemPropKeys } from '@/constants';
import {
  splitRestProps,
  spacingSystemClassName,
  colorSystemClassName,
  typographySystemClassName,
  polyRef,
} from '@/helpers';
import { ColorSystemProps, SpacingSystemProps, TypographySystemProps } from '@/types';

export interface BoxProps extends SpacingSystemProps, ColorSystemProps, TypographySystemProps {
  className?: string;
  children: React.ReactNode;
}

export const Box = polyRef<'div', BoxProps>(({ as: As = 'div', children, ...props }, ref) => {
  const { omited, picked, className: originalClassName } = splitRestProps(props, systemPropKeys);
  const className = classNames(
    spacingSystemClassName(picked),
    colorSystemClassName(picked),
    typographySystemClassName(picked),
    originalClassName
  );

  return (
    <As ref={ref} className={className} {...omited}>
      {children}
    </As>
  );
});
