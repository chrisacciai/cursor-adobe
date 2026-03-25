import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: 'default' | 'elevated';
}

const variantStyles = {
  default: 'border border-gray-200 bg-white shadow-sm',
  elevated: 'border border-gray-100 bg-white shadow-md hover:shadow-lg',
};

export function Card({
  title,
  children,
  variant = 'default',
  className = '',
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl p-5 transition-shadow ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {title && (
        <h3 className="mb-4 text-base font-semibold tracking-tight text-gray-900">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
