import type { KlassFn, VariantsSchema } from '@klass/core';
import { klass as klassBase } from '@klass/core';

export const systemClassName = function <T extends VariantsSchema>(options: { variants: T }): KlassFn<T> {
  return klassBase<T>({ variants: options.variants });
};
