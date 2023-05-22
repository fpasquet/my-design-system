import { splitRestProps } from './splitRestProps';

describe('Test method splitRestProps', () => {
  test.each<{ parameters: Parameters<typeof splitRestProps>; expected: ReturnType<typeof splitRestProps> }>([
    {
      parameters: [
        {
          m: 'xxs',
          name: 'john',
          disabled: true,
        },
        ['m'],
      ],
      expected: {
        picked: {
          m: 'xxs',
        },
        omited: {
          name: 'john',
          disabled: true,
        },
      },
    },
    {
      parameters: [
        {
          m: 'xxs',
          name: 'john',
          disabled: true,
          className: 'list',
        },
        ['m'],
      ],
      expected: {
        picked: {
          m: 'xxs',
        },
        omited: {
          name: 'john',
          disabled: true,
        },
        className: 'list',
      },
    },
  ])('split rest props $expected', ({ parameters, expected }) => {
    expect(splitRestProps(...parameters)).toEqual(expected);
  });
});
