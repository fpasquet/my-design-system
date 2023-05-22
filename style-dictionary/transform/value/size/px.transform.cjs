const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  transitive: true,
  matcher: token => token?.type !== 'scale' && ['spacing', 'font-size'].includes(token.attributes?.category),
  transformer: token => `${parseInt(token.value)}px`,
});
