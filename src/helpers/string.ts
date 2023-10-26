export const kebabCase = (string_: string): string =>
  string_
    .replaceAll(/([a-z])([A-Z])/g, '$1-$2')
    .replaceAll(/[\s_]+/g, '-')
    .toLowerCase();

export const capitalize = (string_: string): string => `${string_.charAt(0).toUpperCase()}${string_.slice(1)}`;
