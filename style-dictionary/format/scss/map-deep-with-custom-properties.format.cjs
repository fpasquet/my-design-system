const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'scss/map-deep-with-custom-properties',
  formatter: ({ dictionary, file, options }) => {
    let output = '';
    if (options?.showFileHeader !== false) {
      output += StyleDictionary.formatHelpers.fileHeader({ file, commentStyle: 'short' });
    }

    const formatter = (properties, depth = 0) => {
      let outputFormatter = '';
      const indent = '\t'.repeat(depth + 1);

      if (properties.hasOwnProperty('value')) {
        outputFormatter += options.rawValueForCategories.includes(properties.attributes.category) ? properties.value : `var(--${properties.name})`;
      } else {
        outputFormatter += '(\n';
        outputFormatter += Object.entries(properties)
          .map(([key, property]) => {
            return `${indent}'${key}': ${formatter(property, depth + 1)}`;
          })
          .join(',\n');
        outputFormatter += `\n${'\t'.repeat(depth)})`;
      }

      return outputFormatter;
    };

    output += `$${file.mapName ?? 'tokens'}: ${formatter(dictionary.properties, 0)};`;

    return output;
  },
});
