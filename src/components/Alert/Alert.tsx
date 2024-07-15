import { cva } from 'class-variance-authority';
import React from 'react';

type AlertProps = {
  // define your props here
  title: string;
  description: string;
  icon?: React.ReactNode;
  type: 'success' | 'danger' | 'warning';
};

const alertClasses = cva(
  'flex w-full border-l-6 px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9',
  {
    variants: {
      type: {
        success: 'border-success bg-success bg-opacity-[15%]',
        danger: 'border-danger bg-danger bg-opacity-[15%]',
        warning: 'border-warning bg-warning bg-opacity-[15%]',
      },
    },
  },
);

const iconBgClasses = cva(
  'mr-5 flex h-9 w-9 items-center justify-center rounded-lg',
  {
    variants: {
      type: {
        success: 'bg-success bg-opacity-30',
        danger: 'bg-danger bg-opacity-30',
        warning: 'bg-warning bg-opacity-30',
      },
    },
  },
);

const titleClasses = cva('mb-3 text-lg font-semibold', {
  variants: {
    type: {
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
    },
  },
});

const descriptionClasses = cva('leading-relaxed', {
  variants: {
    type: {
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
    },
  },
});

const Alert: React.FC<AlertProps> = ({ title, description, icon, type }) => {
  return (
    <div data-testid="alert" className={alertClasses({ type })}>
      <div className={iconBgClasses({ type })}>{icon}</div>
      <div className="w-full">
        <h5 className={titleClasses({ type })}>{title}</h5>
        <p className={descriptionClasses({ type })}>{description}</p>
      </div>
    </div>
  );
};

export default Alert;
