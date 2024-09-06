import React, { HTMLAttributes, useId, useState } from 'react';

import { cn } from '@/utils/cn';

export type SwitchInputProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> & {
  // define your props here
  label?: string;
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
};

/**
 * A toggle switch component that can be used to toggle a boolean value.
 *
 * The component takes a `label` prop which is an optional string that will be
 * rendered next to the switch. The component also takes any other valid HTML
 * attributes that can be applied to a `div` element, such as a `className` or
 * `style`.
 *
 * The component uses the `useId` hook from React to generate a unique id for
 * the input element, which is necessary for accessibility.
 *
 * The component also uses the `useState` hook to keep track of the state of the
 * switch. When the switch is toggled, the `enabled` state variable is updated
 * and the component is re-rendered with the new state.
 */
const SwitchInput: React.FC<SwitchInputProps> = ({
  label,
  activeIcon,
  inactiveIcon,
  ...props
}) => {
  const [enabled, setEnabled] = useState<boolean>(false);

  const id = useId();
  const idTemplate = `${id}-switch-input`;

  /**
   * A function that is called when the switch is toggled. It simply updates
   * the `enabled` state variable to the opposite of its current value.
   */
  const handleChangeEnable = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <div data-testid="switchInput" {...props}>
      <label
        aria-labelledby={idTemplate}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={idTemplate}
            className="sr-only"
            // when the switch is toggled, update the enabled state and re-render
            // the component with the new state
            onChange={handleChangeEnable}
            value={String(enabled)}
          />
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={cn(
              'absolute left-1 top-1 flex size-6 items-center justify-center rounded-full bg-white transition',
              {
                '!right-1 !translate-x-full !bg-primary dark:!bg-white':
                  enabled,
              },
            )}
          >
            {inactiveIcon && (
              <span className={cn({ hidden: enabled })}>{inactiveIcon}</span>
            )}
            {activeIcon && (
              <span className={cn({ hidden: !enabled })}>{activeIcon}</span>
            )}
          </div>
        </div>
        {label && (
          <span className="ml-3 text-black dark:text-white">{label}</span>
        )}
      </label>
    </div>
  );
};

export default SwitchInput;
