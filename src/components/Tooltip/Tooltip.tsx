import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  offset,
  type Placement,
  type ReferenceType,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import { ReactNode, useRef, useState } from 'react';

import { cn } from '@/utils/cn';

type RenderOpenerProps = Record<string, unknown> & {
  ref: (node: ReferenceType | null) => void;
};
export type TooltipProps = {
  content?: ReactNode;
  renderOpener: (props: RenderOpenerProps) => ReactNode;
  placement?: Placement;
};

/**
 * A tooltip component that displays a floating text when a user hovers or focuses on an opener element.
 *
 * @param {TooltipProps} props - The props for the Tooltip component.
 * @param {ReactNode} props.content - The content to be displayed in the tooltip.
 * @param {(props: RenderOpenerProps) => ReactNode} props.renderOpener - A function that renders the opener element.
 * @param {Placement} [props.placement] - The placement of the tooltip relative to the opener element.
 * @return {JSX.Element} The Tooltip component.
 */
const Tooltip: React.FC<TooltipProps> = ({
  content,
  renderOpener,
  placement,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // A reference to the arrow element that will be used to position the tooltip
  const arrowRef = useRef(null);

  // Creates a floating element that will be positioned relative to the opener element
  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: placement,
    middleware: [
      // Offset the tooltip by 12px from the opener element
      offset(12),
      // Flip the tooltip if it is too close to the edge of the window
      flip(),
      // Shift the tooltip if it is too close to the edge of the window
      shift(),
      // Use the arrow ref to position the tooltip
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  // Handles hover events on the opener element
  const hover = useHover(context, { move: false });

  // Handles focus events on the opener element
  const focus = useFocus(context);

  // Handles dismiss events on the opener element
  const dismiss = useDismiss(context);

  // Sets the role of the tooltip to 'tooltip'
  const role = useRole(context, { role: 'tooltip' });

  // Gets the styles for the transition animation
  const { styles: transitionStyles } = useTransitionStyles(context, {
    initial: {
      // Set the opacity to 0 and scale to 0.8 initially
      opacity: 0,
      transform: 'scale(0.8)',
    },
  });

  // Gets the props for the opener element
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      {/* Renders the opener element */}
      {renderOpener({ ref: setReference, ...getReferenceProps() })}
      {/* Renders the tooltip if it is open */}
      {isOpen && content && (
        <div
          data-testid="tooltip"
          ref={setFloating}
          style={{ ...floatingStyles, zIndex: 1 }}
          {...getFloatingProps()}
        >
          <div
            data-testid="tooltip-container"
            style={transitionStyles}
            className={cn('max-w-80 rounded-md bg-black p-4 text-white')}
          >
            {/* Renders the arrow element */}
            <FloatingArrow
              tipRadius={2}
              height={8}
              ref={arrowRef}
              context={context}
              className="fill-black"
              data-testid="tooltip-arrow"
            />
            {/* Renders the content of the tooltip */}
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default Tooltip;
