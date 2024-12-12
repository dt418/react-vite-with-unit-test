import { type VariantProps, cva } from 'class-variance-authority';
import type React from 'react';

import { cn } from '@/utils/cn';

const avatarVariants = cva(['w-full rounded-full'], {
  variants: {
    size: {
      xs: 'h-6 max-w-6',
      sm: 'h-9.5 max-w-9.5',
      md: 'h-13 max-w-13',
      lg: 'h-20 max-w-20',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const avatarPulseVariants = cva(
  ['absolute w-full rounded-full border-white dark:border-black'],
  {
    variants: {
      size: {
        xs: '-right-px -top-px h-2 max-w-2 border',
        sm: '-right-0.5 -top-0.5 h-3.5 max-w-3.5 border-2',
        md: '-right-0.5 -top-0.5 h-4.5 max-w-4.5 border-[2.7px]',
        lg: 'right-0 top-0 h-5.5 max-w-5.5 border-[3px]',
      },
      color: {
        green: 'bg-[#219653]',
        gray: 'bg-gray',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'green',
    },
  },
);
export type AvatarProps = VariantProps<
  typeof avatarVariants & typeof avatarPulseVariants
> &
  React.ImgHTMLAttributes<HTMLImageElement> & {
    isPusle?: boolean;
    // define your props here
  };

const Avatar: React.FC<AvatarProps> = ({
  size,
  color,
  src,
  alt,
  isPusle,
  ...rest
}) => {
  return (
    <div
      data-testid='avatar'
      className={cn(avatarVariants({ size }), { relative: isPusle })}
    >
      <img src={src} alt={alt} {...rest} />
      {isPusle && (
        <span className={cn(avatarPulseVariants({ size, color }))}></span>
      )}
    </div>
  );
};

export default Avatar;
