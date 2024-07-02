import clsx from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type BageVariant =
  | 'gray'
  | 'blue'
  | 'lightGray'
  | 'red'
  | 'teal'
  | 'white'
  | 'yellow';

type BadgeProps = {
  variant: BageVariant;
  children: ReactNode;
};
const variantClasses: Record<BadgeProps['variant'], string> = {
  gray: 'bg-gray-100 text-gray-800',
  lightGray: 'bg-gray-50 text-gray-500',
  teal: 'bg-teal-100 text-teal-800',
  blue: 'bg-blue-100 text-blue-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  white: 'bg-white/10 text-white',
};

const Badge: React.FC<BadgeProps> = ({ variant = 'gray', children }) => {
  const baseClasses =
    'inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium';
  const variantClass = variantClasses[variant] || variantClasses.gray;
  const classes = twMerge(baseClasses, clsx(variantClass));

  return (
    <span className={classes} data-testid="Badge">
      {children}
    </span>
  );
};

export default Badge;
