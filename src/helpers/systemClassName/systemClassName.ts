import { klass as klassBase, KlassFn, VariantsSchema } from '@klass/core';

export const systemClassName = function <T extends VariantsSchema>(options: { variants: T }): KlassFn<T> {
  return klassBase<T>({ variants: options.variants });
};
