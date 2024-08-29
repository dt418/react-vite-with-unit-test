import React, { InputHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

import ErrorMessage from '../ErrorMessage/ErrorMessage.lazy';
import Label from '../Label/Label.lazy';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  id,
  required,
  error,
  helperText,
  ...props
}) => {
  const inputId = id || label.replace(/\s+/g, '-').toLowerCase();
  const errorId = `${inputId}-error`;
  const helperTextId = `${inputId}-helper`;

  // Combine IDs for aria-describedby if both error and helper text exist
  const ariaDescribedBy = cn({
    [errorId]: error,
    [helperTextId]: helperText && !error,
  });
  return (
    <>
      <Label label={label} htmlFor={inputId} required={required} />
      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={ariaDescribedBy || undefined}
        aria-required={required}
        data-testid="input"
        className={cn(
          'w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500',
        )}
        {...props}
      />
      {helperText && !error && (
        <p
          id={helperTextId}
          className="mt-2 text-sm text-gray dark:text-gray-2"
        >
          {helperText}
        </p>
      )}
      <ErrorMessage error={error} id={errorId} />
    </>
  );
};

export default Input;
