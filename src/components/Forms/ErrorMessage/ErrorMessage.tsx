import type React from 'react';

import { cn } from '@/utils/cn';

export type ErrorMessageProps = {
  id?: string; // Add an ID prop to the ErrorMessage component
  error?: string;
  children?: React.ReactNode;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ id, error, children }) => {
  if (!error) return null;
  return (
    <p
      data-testid='errorMessage'
      id={id}
      className={cn('mt-2 text-sm text-red-600')}
      role='alert'
    >
      {children || error}
    </p>
  );
};

export default ErrorMessage;
