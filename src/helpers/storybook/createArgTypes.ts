import { systemPropList, tokens } from '@/constants';
import { capitalize } from '@/helpers/string';
import { StorybookArgTypes } from '@/types';
import { createDescriptionMdn } from './mdn';

export const createArgTypes = (options: {
  category?: string;
  subcategory?: string;
  values?: readonly string[];
  cssProperties?: readonly string[];
}): StorybookArgTypes => ({
  description: options.cssProperties ? createDescriptionMdn({ cssProperties: options.cssProperties }) : undefined,
  table: {
    category: options.category,
    subcategory: options.subcategory,
    type: {
      summary: options?.values?.join('|'),
    },
  },
  control: options?.values ? 'select' : undefined,
  options: options?.values,
});

export const getArgTypesByCategory = (category: keyof typeof systemPropList) => {
  return Object.entries(systemPropList[category]).reduce((argTypes, [propName, propOptions]) => {
    let options;
    if (propOptions.tokenCategory || propOptions.cssValues) {
      options = propOptions?.tokenCategory
        ? Object.keys(tokens[propOptions.tokenCategory as keyof typeof tokens])
        : (Object.keys(propOptions.cssValues) as string[]);
    }
    argTypes[propName] = createArgTypes({
      cssProperties: propOptions.cssProperties,
      category: propOptions.tokenCategory ? capitalize(propOptions.tokenCategory) : capitalize(category),
      subcategory:
        propOptions.tokenCategory && propOptions.tokenCategory !== category ? capitalize(category) : undefined,
      values: options,
    });

    return argTypes;
  }, {} as Record<string, StorybookArgTypes>);
};
