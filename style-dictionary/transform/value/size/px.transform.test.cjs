const StyleDictionary = require('style-dictionary');
require('./px.transform.cjs');

describe('size/px transformer', () => {
  test.each([
    { token: { type: 'scale', value: '2' }, matcherExpected: false },
    { token: { attributes: { category: 'breakpoint' }, value: '2' }, matcherExpected: false },
    { token: { attributes: { category: 'spacing' }, value: '4' }, matcherExpected: true, transformerExpected: '4px' },
  ])('evaluate expressions and transforms correctly $token', ({ token, matcherExpected, transformerExpected }) => {
    const transform = StyleDictionary.transform['size/px'];
    expect(transform.matcher(token)).toEqual(matcherExpected);
    if (matcherExpected) {
      expect(transform.transformer(token)).toEqual(transformerExpected);
    }
  });
});
