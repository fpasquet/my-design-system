import * as React from 'react';
import { PolymorphicWithoutRef } from 'react-polymorphed';

export type PropsPolymorphicWithoutRef<
  Default extends OnlyAs,
  Props extends object = NonNullable<unknown>,
  OnlyAs extends React.ElementType = React.ElementType
> = Parameters<PolymorphicWithoutRef<Default, Props, OnlyAs>>[0];
