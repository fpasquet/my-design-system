const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'typescript/map-deep',
  formatter: ({ dictionary, file, options }) => {
    let output = '';
    if (options?.showFileHeader !== false) {
      output += StyleDictionary.formatHelpers.fileHeader({ file, commentStyle: 'short' });
    }

    const formatter = (properties, depth = 0) => {
      let outputFormatter = '';
      const indent = '\t'.repeat(depth + 1);

      if (properties.hasOwnProperty('value')) {
        const values = [`value: '${properties.value}'`];
        if (properties.hasOwnProperty('comment')) {
          values.push(`description: '${properties.comment}'`);
        }
        outputFormatter += `{ ${values.join(', ')} }`;
      } else {
        outputFormatter += '{\n';
        outputFormatter += Object.entries(properties)
          .map(([key, property]) => {
            return `${indent}'${key}': ${formatter(property, depth + 1)}`;
          })
          .join(',\n');
        outputFormatter += `\n${'\t'.repeat(depth)}}`;
      }

      return outputFormatter;
    };

    output += `export const ${file.mapName ?? 'tokens'} = ${formatter(dictionary.properties, 0)};`;

    return output;
  },
});
