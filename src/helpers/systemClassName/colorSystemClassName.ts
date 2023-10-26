import { colorTokenNameList, systemPropList } from '@/constants';
import type { ColorPropType, ColorType } from '@/types';

import { systemClassName } from './systemClassName';

export const colorPropNameList = Object.keys(systemPropList.color) as ReadonlyArray<ColorPropType>;

export const colorSystemClassName = systemClassName<Record<ColorPropType, Record<ColorType, string>>>({
  variants: colorPropNameList.reduce(
    (variants, propName) => {
      variants[propName] = colorTokenNameList.reduce(
        (props, tokenName) => {
          props[tokenName] = `${propName}-${tokenName}`;
          return props;
        },
        {} as Record<ColorType, string>
      );
      return variants;
    },
    {} as Record<ColorPropType, Record<ColorType, string>>
  ),
});
