import { kebabCase } from '@/helpers';

export const getLinkMdnByCssProperty = (cssProperty: string): string =>
  `https://developer.mozilla.org/en-US/docs/Web/CSS/${cssProperty}`;

export const createDescriptionMdn = (options: { cssProperties: readonly string[] }): string => {
  const description: string[] = [];
  const cssProps = options.cssProperties
    .map(kebabCase)
    .map((cssProperty) => ` [${cssProperty}](${getLinkMdnByCssProperty(cssProperty)})`)
    .join(', ');

  description.push(`**CSS Properties**: ${cssProps}`);

  return description.join('<br />');
};
