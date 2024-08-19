import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import {
  RxCheckCircled,
  RxCrossCircled,
  RxExclamationTriangle,
  RxInfoCircled,
} from 'react-icons/rx';

const alertClasses = cva(
  'flex w-full border-l-6 bg-opacity-[10%] px-7 py-8 shadow-md dark:bg-opacity-[15%] md:p-9',
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
  'bg-current/30 mr-5 inline-flex size-9 max-w-[36px] items-center justify-center rounded-lg',
  {
    variants: {
      type: {
        success: 'bg-transparent text-success',
        danger: 'bg-transparent text-danger',
        warning: 'bg-transparent text-warning',
        info: 'bg-transparent text-info',
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
  message: string;
} & AlertVariants;

const Alert: React.FC<AlertProps> = ({ title, message, type = 'info' }) => {
  const defaultIcons = {
    success: <RxCheckCircled size={28} />,
    danger: <RxCrossCircled size={28} />,
    warning: <RxExclamationTriangle size={28} />,
    info: <RxInfoCircled size={28} />,
  };

  const alertType = type ?? 'info';
  return (
    <div data-testid="alert" className={alertClasses({ type })}>
      <div className={iconBgClasses({ type })}>{defaultIcons[alertType]}</div>
      <div className="w-full">
        <h5 className={titleClasses({ type })}>{title}</h5>
        <p className={descriptionClasses({ type })}>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
