import * as React from 'react';
import './Button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ primary = false, size = 'medium', children, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button type="button" className={['button', `button--${size}`, mode].join(' ')} {...props}>
      {children}
    </button>
  );
};
