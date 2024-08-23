import React, { HtmlHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export type ProgressBarProps = HtmlHTMLAttributes<HTMLDivElement> & {
  // define your props here
  percent?: number;
};

/**
 * Renders a progress bar with the given percentage.
 *
 * @param {ProgressBarProps} props
 * @param {number} [props.percent=0] - The percentage of the progress bar.
 * @param {string} [props.className] - Additional CSS classes to add to the component.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - The rest of the props passed to the component.
 * @returns {React.ReactElement} The component.
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
  percent = 0,
  className,
  ...rest
}) => {
  const percentWithFallback = percent > 100 ? 100 : percent < 0 ? 0 : percent;
  return (
    <div
      data-testid="progressBar"
      {...rest}
      className={cn(
        // The outer container is a relative block element with a height of 4.5,
        // rounded corners, and a background color of #f7f9fc.
        'relative block h-4.5 w-full rounded bg-meta-9 dark:bg-meta-4',
        // We also apply any additional CSS classes passed as a prop.
        className,
      )}
    >
      <div
        className={cn(
          // The inner container is an absolute element with a height of 100%,
          // left-aligned, and with a background color of #409eff.
          'absolute left-0 top-0 flex h-full items-center justify-center rounded bg-primary text-xs font-medium text-white',
          // We also add the width of the progress bar based on the percentage.
          `w-[${percentWithFallback}%]`,
        )}
      >
        {/* The inner container contains the percentage text. */}
        {percentWithFallback}%
      </div>
    </div>
  );
};

export default ProgressBar;
