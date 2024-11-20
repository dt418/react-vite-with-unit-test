import { type VariantProps, cva } from 'class-variance-authority';
import type React from 'react';
import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

const heading = cva('font-bold', {
  variants: {
    as: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
    },
    weight: {
      bold: 'font-bold',
      normal: 'font-normal',
      medium: 'font-medium',
      light: 'font-light',
      thin: 'font-thin',
    },
    color: {
      black: 'text-black',
      blue: 'text-blue-500',
      green: 'text-green-500',
      red: 'text-red-500',
      purple: 'text-purple-500',
      pink: 'text-pink-500',
      yellow: 'text-yellow-500',
    },
    margin: {
      none: 'm-0',
      sm: 'm-2',
      md: 'm-4',
      lg: 'm-6',
      xl: 'm-8',
    },
  },
  defaultVariants: {
    as: 'h1',
    weight: 'bold',
    color: 'black',
    margin: 'none',
  },
});

export type HeadingProps = VariantProps<typeof heading> & {
  // define your props here
  children: ReactNode;
};

const Heading: React.FC<HeadingProps> = ({
  as = 'h1',
  children,
  weight = 'bold',
  color = 'black',
  margin = 'none',
}) => {
  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    <Tag
      data-testid="heading"
      className={cn(heading({ as, weight, color, margin }))}
    >
      {children}
    </Tag>
  );
};

export default Heading;
