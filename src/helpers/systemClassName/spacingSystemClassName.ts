import classNames from 'classnames';
import { systemPropList, spacingTokenNameList } from '@/constants';
import { MarginPropType, PaddingPropType, SpacingType } from '@/types';
import { systemClassNameWithBreakpoints } from './systemClassNameWithBreakpoints';

const marginPropNameList = Object.keys(systemPropList.margin) as ReadonlyArray<MarginPropType>;
const paddingPropNameList = Object.keys(systemPropList.padding) as ReadonlyArray<PaddingPropType>;

export const marginSystemClassName = systemClassNameWithBreakpoints<
  Record<MarginPropType, Record<SpacingType, string>>
>({
  variants: marginPropNameList.reduce((variants, propName) => {
    variants[propName] = spacingTokenNameList.reduce((props, tokenName) => {
      props[tokenName] = `${propName}-${tokenName}`;
      return props;
    }, {} as Record<SpacingType, string>);
    return variants;
  }, {} as Record<MarginPropType, Record<SpacingType, string>>),
});

export const paddingSystemClassName = systemClassNameWithBreakpoints<
  Record<PaddingPropType, Record<SpacingType, string>>
>({
  variants: paddingPropNameList.reduce((variants, propName) => {
    variants[propName] = spacingTokenNameList.reduce((props, tokenName) => {
      props[tokenName] = `${propName}-${tokenName}`;
      return props;
    }, {} as Record<SpacingType, string>);
    return variants;
  }, {} as Record<PaddingPropType, Record<SpacingType, string>>),
});

export const spacingSystemClassName = (
  props: Parameters<typeof marginSystemClassName>[0] & Parameters<typeof paddingSystemClassName>[0]
): string => classNames(marginSystemClassName(props), paddingSystemClassName(props));
