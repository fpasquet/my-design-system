import { typographySystemClassName } from './typographySystemClassName';

describe('Test method typographySystemClassName', () => {
  test.each<{ props: Parameters<typeof typographySystemClassName>[0]; expected: string }>([
    {
      props: {
        textAlign: 'center',
        weight: 'bold',
        italic: true,
        textTransform: 'capitalize',
        textDecoration: 'underline',
      },
      expected: 'text-center text-bold text-italic text-capitalize text-underline',
    },
  ])('return typography class name $expected', ({ props, expected }) => {
    expect(typographySystemClassName(props)).toEqual(expected);
  });
});
