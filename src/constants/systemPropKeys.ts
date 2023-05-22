import { systemPropList } from '@/constants/systemPropList';

export const systemPropKeys = Object.values(systemPropList).reduce<string[]>(
  (keys, systemProp) => [...keys, ...Object.keys(systemProp)],
  []
);
