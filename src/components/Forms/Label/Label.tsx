import type React from 'react';
import type { LabelHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  htmlFor: string;
  required?: boolean;
};

const Label: React.FC<LabelProps> = ({
  label,
  required,
  htmlFor,
  className,
  ...props
}) => {
  return (
    <label
      data-testid='label'
      htmlFor={htmlFor}
      className={cn('mb-3 block text-black dark:text-white', className)}
      {...props}
    >
      {label}
      {required && <span className='ml-1 text-red-500'>*</span>}
    </label>
  );
};

export default Label;
