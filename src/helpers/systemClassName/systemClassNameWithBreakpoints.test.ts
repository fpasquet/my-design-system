import type { TypeWithBreakpointType } from '@/types';

import { systemClassNameWithBreakpoints } from './systemClassNameWithBreakpoints';

describe('Test method systemClassNameWithBreakpoints', () => {
  test.each<{
    options: Parameters<typeof systemClassNameWithBreakpoints>[0];
    props: Record<string, TypeWithBreakpointType<string>>;
    expected: string;
  }>([
    {
      options: {
        variants: {
          m: {
            xs: 'm-xs',
            s: 'm-s',
          },
        },
      },
      props: {
        m: {
          xs: 'xs',
          sm: 's',
        },
      },
      expected: 'm-xs@xs m-s@sm',
    },
  ])('return system class name with breakpoints $expected', ({ options, props, expected }) => {
    expect(systemClassNameWithBreakpoints(options)(props)).toStrictEqual(expected);
  });
});
