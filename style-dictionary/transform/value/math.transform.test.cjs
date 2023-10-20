const StyleDictionary = require('style-dictionary');
require('./math.transform.cjs');

describe('math transformer', () => {
  test.each([
    { token: { value: '2px' }, matcherExpected: false },
    { token: { value: 'red' }, matcherExpected: false },
    { token: { value: '2 + 2' }, matcherExpected: true, transformerExpected: 4 },
    { token: { value: '3 * 5' }, matcherExpected: true, transformerExpected: 15 },
    { token: { value: '10 / 2' }, matcherExpected: true, transformerExpected: 5 },
    { token: { value: '5 - 1' }, matcherExpected: true, transformerExpected: 4 },
    { token: { value: '1 + 2px + 3 + 4 + 5' }, matcherExpected: true, transformerExpected: 15 },
  ])('evaluate expressions and transforms correctly $token', ({ token, matcherExpected, transformerExpected }) => {
    const transform = StyleDictionary.transform['math'];
    expect(transform.matcher(token)).toEqual(matcherExpected);
    if (matcherExpected) {
      expect(transform.transformer(token)).toEqual(transformerExpected);
    }
  });
});
