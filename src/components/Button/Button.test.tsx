import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders with the correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders with the correct size class', () => {
    const { container } = render(<Button size="small">Small Button</Button>);
    expect(container.firstChild).toHaveClass('button--small');
  });

  test('renders with the primary class when primary prop is true', () => {
    const { container } = render(<Button primary>Primary Button</Button>);
    expect(container.firstChild).toHaveClass('button--primary');
  });

  test('calls the onClick function when clicked', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
