const StyleDictionary = require('style-dictionary');
require('./utility-variables.format.cjs');

describe('SCSS Utility Variables format', () => {
  it('formats tokens into utility variables', () => {
    const format = StyleDictionary.format['scss/utility-variables'];
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
      file: { destination: '_utilities.scss' },
      options: {
        showFileHeader: false,
        systemPropList: {
          margin: {
            m: {
              cssProperties: ['margin'],
              tokenCategory: 'spacing',
            },
            mx: {
              cssProperties: ['margin-left', 'margin-right'],
              tokenCategory: 'spacing',
            },
          },
          padding: {
            p: {
              cssProperties: ['padding'],
              tokenCategory: 'spacing',
            },
          },
          color: {
            bg: {
              cssProperties: ['background-color'],
              tokenCategory: 'color',
            },
            color: {
              cssProperties: ['color'],
              tokenCategory: 'color',
            },
          },
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
    const cleanedOutput = output.replace(/[\n\t]/g, '');

    expect(cleanedOutput).toContain(`$color-list: map.get($tokens, 'color');`);
    expect(cleanedOutput).toContain(`$spacing-list: map.get($tokens, 'spacing');`);
    expect(cleanedOutput).toContain(`$text-align-list: ('left': 'left','center': 'center','right': 'right','justify': 'justify');`);
    expect(cleanedOutput).toContain(`$margin-prop-list: ('m': 'margin','mx': ('margin-left', 'margin-right'));`);
    expect(cleanedOutput).toContain(`$padding-prop-list: ('p': 'padding');`);
    expect(cleanedOutput).toContain(`$color-prop-list: ('bg': 'background-color','color': 'color');`);
    expect(cleanedOutput).toContain(`$text-align-prefix-class-name: 'text';`);

  });
});
