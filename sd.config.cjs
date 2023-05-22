const StyleDictionary = require('style-dictionary');
require('./style-dictionary/format/index.cjs');
require('./style-dictionary/transform/index.cjs');
require('./style-dictionary/transformGroup/index.cjs');
const systemPropList = require('./systemPropList.json');

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'tokens',
      buildPath: 'src/styles/',
      files: [
        {
          destination: '_variables.scss',
          format: 'css/variables',
          filter: token => token.type !== 'scale',
        },
        {
          destination: 'abstracts/variables/_tokens.scss',
          format: 'scss/map-deep-with-custom-properties',
          filter: token => token.type !== 'scale',
          options: {
            rawValueForCategories: ['breakpoint']
          }
        },
        {
          destination: 'abstracts/variables/_utilities.scss',
          format: 'scss/utility-variables',
          options: {
            systemPropList,
          }
        },
      ],
    },
    typescript: {
      transformGroup: 'tokens',
      buildPath: 'src/',
      files: [
        {
          destination: 'constants/tokens.ts',
          format: 'typescript/map-deep',
          filter: token => token.type !== 'scale',
        },
        {
          destination: 'constants/systemPropList.ts',
          format: 'typescript/const-assertions',
          options: {
            variableName: 'systemPropList',
            data: systemPropList,
          }
        },
        {
          destination: 'constants/cssValuesList.ts',
          format: 'typescript/css-values-list',
          options: {
            systemPropList,
          }
        },
      ],
    },
  },
};
