const StyleDictionary = require('style-dictionary');
const { kebabCase } = require('../../helpers/index.cjs');

StyleDictionary.registerFormat({
  name: 'scss/utility-variables',
  formatter: ({ dictionary, file, options }) => {
    let output = '';
    if (options?.showFileHeader !== false) {
      output += StyleDictionary.formatHelpers.fileHeader({ file, commentStyle: 'short' });
    }

    output += [
      `@use 'sass:map';`,
      `@use './tokens' as *;\n\n`
    ].join('\n');

    const tokenList = Object.keys(dictionary.properties).map(propertyName =>
      `$${propertyName}-list: map.get($tokens, '${propertyName}');`
    );
    const cssValuesList = Object.entries(options.systemPropList).reduce((currentCssValuesList, [_, propList]) => {
      const cssValuesListOutput = Object.entries(propList)
        .filter(([_, { cssValues }]) => cssValues)
        .map(([prefix, { cssValues }]) => [
          `$${kebabCase(prefix)}-list: (`,
          Object.entries(cssValues).map(([key, value]) => `\t'${key}': '${value}'`).join(`,\n`),
          `);`,
        ].join('\n'));
      return [...currentCssValuesList, ...cssValuesListOutput];
    }, []);

    output += [
      '// Tokens and CSS Values List',
      `${tokenList.join('\n')}`,
      `${cssValuesList.join('\n')}\n\n`,
    ].join('\n');

    const propList = Object.entries(options.systemPropList).map(([systemPropName, propList]) => {
      const propListOutput = Object.entries(propList)
        .map(([prefix, { cssProperties }]) =>
          `'${prefix}': ${Array.isArray(cssProperties) && cssProperties.length > 1 ? `('${cssProperties.join(`', '`)}')` : `'${cssProperties}'`}`)
          .join(',\n\t'
        );
      return [
        `$${kebabCase(systemPropName)}-prop-list: (`,
        `\t${propListOutput}`,
        `);`,
      ].join('\n');
    });

    output += [
      '// Prop List',
      `${propList.join('\n')}\n\n`,
    ].join('\n');

    const prefixClassNameList = Object.entries(options.systemPropList).reduce((currentPrefixClassNameList, [_, propList]) => {
      const prefixClassNameListOutput = Object.entries(propList)
        .filter(([_, { prefixClassName }]) => prefixClassName)
        .map(([prefix, { prefixClassName }]) => `$${kebabCase(prefix)}-prefix-class-name: '${prefixClassName}';`);
      return [...currentPrefixClassNameList, ...prefixClassNameListOutput];
    }, []);

    output += [
      '// Prefix Class Name',
      `${prefixClassNameList.join('\n')}`,
    ].join('\n');

    return output;
  },
});
