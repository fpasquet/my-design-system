import type { systemPropList, textAlignList, textDecorationList, textTransformList, tokens } from '@/constants';

export type BreakpointType = keyof (typeof tokens)['breakpoint'];

export type TypeWithConditionType<TConditionType extends string, TPropValue> = Partial<
  Record<TConditionType, TPropValue>
>;
export type TypeWithBreakpointType<T> = T | TypeWithConditionType<BreakpointType, T>;

export type SpacingType = keyof (typeof tokens)['spacing'];
export type ColorType = keyof (typeof tokens)['color'];

/*
 * Typography
 */
export type FontWeightType = keyof (typeof tokens)['font-weight'];
export type TextAlignType = (typeof textAlignList)[number];
export type TextTransformType = (typeof textTransformList)[number];
export type TextDecorationType = (typeof textDecorationList)[number];
/*
 * Prop Type
 */

export type MarginPropType = keyof typeof systemPropList.margin;
export type PaddingPropType = keyof typeof systemPropList.padding;
export type ColorPropType = keyof typeof systemPropList.color;

/*
 * System Props
 */

export type MarginSystemProps = Partial<Record<MarginPropType, TypeWithBreakpointType<SpacingType>>>;
export type PaddingSystemProps = Partial<Record<PaddingPropType, TypeWithBreakpointType<SpacingType>>>;
export type SpacingSystemProps = MarginSystemProps & PaddingSystemProps;

export type ColorSystemProps = Partial<Record<ColorPropType, ColorType>>;

export interface TypographySystemProps {
  textAlign?: TextAlignType;
  weight?: FontWeightType;
  italic?: boolean;
  textTransform?: TextTransformType;
  textDecoration?: TextDecorationType;
}
