const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'typescript/const-assertions',
  formatter: ({ file, options }) => {
    let output = '';
    if (options?.showFileHeader !== false) {
      output += StyleDictionary.formatHelpers.fileHeader({ file, commentStyle: 'short' });
    }

    output += `export const ${options.variableName} = ${JSON.stringify(options.data, null, 2)} as const;`;
    return output;
  },
});
