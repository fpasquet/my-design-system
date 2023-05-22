const StyleDictionary = require('style-dictionary');
require('./map-deep.format.cjs');

describe('TypeScript Map Deep format', () => {
  it('formats tokens into TypeScript variables', () => {
    const format = StyleDictionary.format['typescript/map-deep'];
    const output = format({
      dictionary: {
        properties: {
          color: {
            primary: {
              value: '#FF9900',
              name: 'color-primary',
              attributes: {
                category: 'color',
              },
            },
          },
          spacing: {
            xs: {
              value: '4px',
              name: 'spacing-xs',
              attributes: {
                category: 'spacing',
              },
            },
          },
        },
      },
      file: { destination: 'tokens.ts' },
      options: {
        showFileHeader: false,
      }
    });

    // Remove all new lines and tabs from the actual string
    const cleanedOutput = output.replace(/[\n\t]/g, '');

    expect(cleanedOutput).toContain(`const tokens = {'color': {'primary': '#FF9900'},'spacing': {'xs': '4px'}};`);
  });
});
