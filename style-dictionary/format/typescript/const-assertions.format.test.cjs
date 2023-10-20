const StyleDictionary = require('style-dictionary');
require('./const-assertions.format.cjs');

describe('TypeScript Const Assertions format', () => {
  it('formats data into const assertions', () => {
    const format = StyleDictionary.format['typescript/const-assertions'];
    const output = format({
      file: { destination: 'system-props.ts' },
      options: {
        showFileHeader: false,
        variableName: 'systemPropList',
        data: {
          margin: {
            m: {
              cssProperties: ['margin'],
              tokenCategory: 'spacing',
            }
          }
        },
      }
    });

    // Remove all new lines and tabs from the actual string
    const cleanedOutput = output.replace(/[\n\t]/g, '').replace(/\s+/g, ' ');

    expect(cleanedOutput).toContain(`export const systemPropList = { "margin": { "m": { "cssProperties": [ "margin" ], "tokenCategory": "spacing" } }} as const;`);
  });
});
