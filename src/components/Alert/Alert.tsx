import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimesCircle,
} from 'react-icons/fa';

const alertClasses = cva(
  'flex w-full border-l-6 px-7 py-8 shadow-md bg-opacity-[10%] md:p-9 dark:bg-opacity-[15%]',
  {
    variants: {
      type: {
        success: 'border-success bg-success',
        danger: 'border-danger bg-danger',
        warning: 'border-warning bg-warning',
        info: 'border-info bg-info',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

const iconBgClasses = cva(
  'mr-5 inline-flex w-9 h-9 max-w-[36px] items-center justify-center rounded-lg bg-opacity-30',
  {
    variants: {
      type: {
        success: 'bg-success text-success',
        danger: 'bg-danger text-danger',
        warning: 'bg-warning text-warning',
        info: 'bg-info text-info',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  },
);

const titleClasses = cva('mb-3 text-lg font-semibold', {
  variants: {
    type: {
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
      info: 'text-info',
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

const descriptionClasses = cva('text-base leading-relaxed text-body', {
  variants: {
    type: {
      success: 'text-success-400',
      danger: 'text-danger-400',
      warning: 'text-warning-400',
      info: 'text-info-400',
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

type AlertVariants = VariantProps<typeof alertClasses>;

export type AlertProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
} & AlertVariants;

const Alert: React.FC<AlertProps> = ({
  title,
  description,
  icon,
  type = 'info',
}) => {
  const defaultIcons = {
    success: <FaCheckCircle />,
    danger: <FaTimesCircle />,
    warning: <FaExclamationTriangle />,
    info: <FaInfoCircle />,
  };

  const alertType = type ?? 'info';
  return (
    <div data-testid="alert" className={alertClasses({ type })}>
      <div className={iconBgClasses({ type })}>
        {icon || defaultIcons[alertType]}
      </div>
      <div className="w-full">
        <h5 className={titleClasses({ type })}>{title}</h5>
        <p className={descriptionClasses({ type })}>{description}</p>
      </div>
    </div>
  );
};

export default Alert;
