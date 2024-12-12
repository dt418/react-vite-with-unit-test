import humanFormat from 'human-format';
import type React from 'react';

import { cn } from '@/utils/cn';

type ChangeDirection = 'up' | 'down';
type AnalyticUnit = 'currency' | 'percent' | 'number' | 'time';
export type AnalyticCardProps = {
  title: string;
  value: number;
  changeRate: number;
  changeDirection: ChangeDirection;
  unit: AnalyticUnit;
};
const timeScale = new humanFormat.Scale({
  seconds: 1,
  minutes: 60,
  hours: 3600,
  days: 86400,
  months: 2592000,
});

const AnalyticCard: React.FC<AnalyticCardProps> = ({
  title,
  value,
  changeRate,
  changeDirection,
  unit,
}) => {
  const valueToValueFormat = (unit: AnalyticUnit, value: number) => {
    switch (unit) {
      case 'currency':
        return value.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        });
      case 'percent':
        return `${value}%`;
      case 'number':
        return humanFormat(value);
      case 'time':
        return humanFormat(value, { scale: timeScale, prefix: 'minutes' });
    }
  };
  return (
    <div
      data-testid='analyticCard'
      className='flex items-center justify-center gap-2 border-b border-stroke pb-5 last:border-none dark:border-strokedark xl:border-b-0 xl:border-r xl:pb-0'
    >
      <div>
        <h4 className='mb-0.5 text-xl font-semibold text-black dark:text-white md:text-title-lg'>
          {valueToValueFormat(unit, value)}
        </h4>
        <p className='text-sm font-medium'>{title}</p>
      </div>
      <div className='flex items-center gap-1'>
        <svg
          width={19}
          height={19}
          viewBox='0 0 19 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn({ 'rotate-180': changeDirection === 'down' })}
        >
          <path
            d='M8.25259 5.87281L4.22834 9.89706L3.16751 8.83623L9.00282 3.00092L14.8381 8.83623L13.7773 9.89705L9.75306 5.87281L9.75306 15.0046L8.25259 15.0046L8.25259 5.87281Z'
            fill={changeDirection === 'up' ? '#10B981' : '#F0950C'}
          />
        </svg>
        <span
          className={cn({
            'text-meta-3': changeDirection === 'up',
            'text-meta-8': changeDirection === 'down',
          })}
        >
          {changeRate}%
        </span>
      </div>
    </div>
  );
};

export default AnalyticCard;
