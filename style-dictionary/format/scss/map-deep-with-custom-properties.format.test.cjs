const StyleDictionary = require('style-dictionary');
require('./map-deep-with-custom-properties.format.cjs');

describe('SCSS Map Deep with Custom Properties format', () => {

  it('formats tokens into SCSS variables', () => {
    const format = StyleDictionary.format['scss/map-deep-with-custom-properties'];
    const output = format({
      dictionary: {
        properties: {
          breakpoint: {
            xs: {
              value: 0,
              name: 'breakpoint-xs',
              attributes: {
                category: 'breakpoint',
              },
            },
          },
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
      file: { destination: '_tokens.scss' },
      options: {
        rawValueForCategories: ['breakpoint'],
        showFileHeader: false,
      },
    });

    // Remove all new lines and tabs from the actual string
    const cleanedOutput = output.replace(/[\n\t]/g, '');

    expect(cleanedOutput).toEqual("$tokens: ('breakpoint': ('xs': 0),'color': ('primary': var(--color-primary)),'spacing': ('xs': var(--spacing-xs)));");
  });
});
