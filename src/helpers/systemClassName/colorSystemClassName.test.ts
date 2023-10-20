import { ColorSystemProps } from '@/types';
import { colorSystemClassName } from './colorSystemClassName';

describe('Test method colorSystemClassName', () => {
  test.each<{ props: ColorSystemProps; expected: string }>([
    {
      props: {
        bg: 'primary',
        color: 'white',
      },
      expected: 'bg-primary color-white',
    },
  ])('return color class name $expected', ({ props, expected }) => {
    expect(colorSystemClassName(props)).toStrictEqual(expected);
  });
});
