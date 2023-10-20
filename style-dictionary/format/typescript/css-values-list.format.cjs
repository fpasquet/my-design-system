const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'typescript/css-values-list',
  formatter: ({ file, options }) => {
    let output = '';
    if (options?.showFileHeader !== false) {
      output += StyleDictionary.formatHelpers.fileHeader({ file, commentStyle: 'short' });
    }

    output += `import { systemPropList } from './systemPropList';\n\n`;

    const cssValuesList = Object.entries(options.systemPropList).reduce((currentCssValuesList, [systemPropName, propList]) => {
      const cssValuesListOutput = Object.entries(propList)
        .filter(([_, { cssValues }]) => cssValues)
        .map(([propName]) => `export const ${propName}List = Object.keys(systemPropList.${systemPropName}.${propName}.cssValues);`);
      return [...currentCssValuesList, ...cssValuesListOutput];
    }, []);

    output += `${cssValuesList.join('\n')}`;

    return output;
  },
});
