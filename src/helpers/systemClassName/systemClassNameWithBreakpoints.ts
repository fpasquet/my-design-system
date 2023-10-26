import type { ReklassFn, VariantsSchema } from '@klass/core';
import { reklass as reklassBase } from '@klass/core';

import { breakpointTokenNameList } from '@/constants';
import type { BreakpointType } from '@/types';

type BreakpointCondition = Record<BreakpointType, string>;

export const systemClassNameWithBreakpoints = function <T extends VariantsSchema>(options: {
  variants: T;
}): ReklassFn<BreakpointCondition, T> {
  return reklassBase<BreakpointCondition, T>(
    {
      conditions: breakpointTokenNameList.reduce((conditions, breakpointName) => {
        conditions[breakpointName] = `@${breakpointName}`;
        return conditions;
      }, {} as BreakpointCondition),
      defaultCondition: breakpointTokenNameList[0],
      variants: options.variants,
    },
    { as: 'suffix' }
  );
};
