import { MarginSystemProps, PaddingSystemProps, SpacingSystemProps } from '@/types';
import { marginSystemClassName, paddingSystemClassName, spacingSystemClassName } from './spacingSystemClassName';

describe('Test method spacingSystemProps', () => {
  test.each<{ props: MarginSystemProps; expected: string }>([
    {
      props: {
        m: {
          xs: 'xs',
          md: 'm',
        },
      },
      expected: 'm-xs@xs m-m@md',
    },
  ])('return margin system class name $expected', ({ props, expected }) => {
    expect(marginSystemClassName(props)).toEqual(expected);
  });

  test.each<{ props: PaddingSystemProps; expected: string }>([
    {
      props: {
        p: {
          xs: 'xs',
          md: 'm',
        },
      },
      expected: 'p-xs@xs p-m@md',
    },
  ])('return padding system class name $expected', ({ props, expected }) => {
    expect(paddingSystemClassName(props)).toEqual(expected);
  });

  test.each<{ props: SpacingSystemProps; expected: string }>([
    {
      props: {
        p: 'm',
        m: {
          xs: 'xs',
          md: 'm',
        },
      },
      expected: 'm-xs@xs m-m@md p-m@xs',
    },
  ])('return spacing system class name $expected', ({ props, expected }) => {
    expect(spacingSystemClassName(props)).toEqual(expected);
  });
});
