const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransformGroup({
  name: 'tokens',
  transforms: ['attribute/cti', 'name/cti/kebab', 'math', 'size/px'],
});
