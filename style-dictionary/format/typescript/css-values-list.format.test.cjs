const StyleDictionary = require('style-dictionary');
require('./css-values-list.format.cjs');

describe('TypeScript CSS Values List format', () => {
  it('formats systemPropListConfig into CSS Values List', () => {
    const format = StyleDictionary.format['typescript/css-values-list'];
    const output = format({
      file: { destination: 'cssValuesList.ts' },
      options: {
        showFileHeader: false,
        systemPropList: {
          typography: {
            textAlign: {
              prefixClassName: 'text',
              cssProperties: [
                'text-align'
              ],
              cssValues: {
                left: 'left',
                center: 'center',
                right: 'right',
                justify: 'justify'
              }
            }
          }
        },
      }
    });

    // Remove all new lines and tabs from the actual string
    const cleanedOutput = output.replace(/[\n\t]/g, '').replace(/\s+/g, ' ');

    expect(cleanedOutput).toContain(`export const textAlignList = Object.keys(systemPropList.typography.textAlign.cssValues);`);
  });
});
