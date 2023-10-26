import { tokens } from '@/constants/tokens';
import type { BreakpointType, ColorType, FontWeightType, SpacingType } from '@/types';

export const breakpointTokenNameList = Object.keys(tokens['breakpoint']) as ReadonlyArray<BreakpointType>;
export const spacingTokenNameList = Object.keys(tokens['spacing']) as ReadonlyArray<SpacingType>;
export const colorTokenNameList = Object.keys(tokens['color']) as ReadonlyArray<ColorType>;
export const fontWeightTokenNameList = Object.keys(tokens['font-weight']) as ReadonlyArray<FontWeightType>;
