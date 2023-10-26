import {
  fontWeightTokenNameList,
  systemPropList,
  textAlignList,
  textDecorationList,
  textTransformList,
} from '@/constants';
import type { FontWeightType, TextAlignType, TextDecorationType, TextTransformType } from '@/types';

import { systemClassName } from './systemClassName';

export const typographySystemClassName = systemClassName({
  variants: {
    textAlign: textAlignList.reduce(
      (props, tokenName) => {
        props[tokenName] = `${systemPropList.typography.textAlign.prefixClassName}-${tokenName}`;
        return props;
      },
      {} as Record<TextAlignType, string>
    ),
    weight: fontWeightTokenNameList.reduce(
      (props, tokenName) => {
        props[tokenName] = `${systemPropList.typography.weight.prefixClassName}-${tokenName}`;
        return props;
      },
      {} as Record<FontWeightType, string>
    ),
    italic: {
      true: `${systemPropList.typography.italic.prefixClassName}-italic`,
    },
    textTransform: textTransformList.reduce(
      (props, tokenName) => {
        props[tokenName] = `${systemPropList.typography.textTransform.prefixClassName}-${tokenName}`;
        return props;
      },
      {} as Record<TextTransformType, string>
    ),
    textDecoration: textDecorationList.reduce(
      (props, tokenName) => {
        props[tokenName] = `${systemPropList.typography.textDecoration.prefixClassName}-${tokenName}`;
        return props;
      },
      {} as Record<TextDecorationType, string>
    ),
  },
});
