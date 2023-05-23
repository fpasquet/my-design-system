import { getArgTypesByCategory } from '@/helpers/storybook';

export const marginArgTypes = getArgTypesByCategory('margin');
export const paddingArgTypes = getArgTypesByCategory('padding');

export const spacingArgTypes = {
  ...marginArgTypes,
  ...paddingArgTypes,
};

export const colorArgTypes = getArgTypesByCategory('color');

export const typographyArgTypes = getArgTypesByCategory('typography');

/*
 * Components
 */
export const boxArgTypes = {
  ...spacingArgTypes,
  ...colorArgTypes,
  ...typographyArgTypes,
  as: {
    table: {
      disable: true,
    },
  },
  ref: {
    table: {
      disable: true,
    },
  },
};
