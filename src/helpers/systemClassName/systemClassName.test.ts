import { systemClassName } from './systemClassName';

describe('Test method systemClassName', () => {
  test.each<{ options: Parameters<typeof systemClassName>[0]; props: Record<string, string>; expected: string }>([
    {
      options: {
        variants: {
          m: {
            xs: 'm-xs',
          },
          p: {
            s: 'p-s',
          },
        },
      },
      props: {
        m: 'xs',
        p: 's',
      },
      expected: 'm-xs p-s',
    },
  ])('return system class name $expected', ({ options, props, expected }) => {
    expect(systemClassName(options)(props)).toStrictEqual(expected);
  });
});
