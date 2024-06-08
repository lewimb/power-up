import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  className =
    'border-2 rounded-full px-8 py-2' + (className ? ` ${className}` : '');

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
