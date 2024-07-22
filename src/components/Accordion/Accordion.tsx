import * as RadixAccordion from '@radix-ui/react-accordion';
import { FC, forwardRef, HTMLProps } from 'react';
import { RxChevronDown } from 'react-icons/rx';

import { cn } from '@/utils/cn';

type AccordionItemContent = {
  value: string;
  title: string;
  content: string;
};

export type AccordionProps = (
  | RadixAccordion.AccordionSingleProps
  | RadixAccordion.AccordionMultipleProps
) & {
  items?: AccordionItemProps[];
  className?: HTMLProps<HTMLElement>['className'];
};

type AccordionItemProps = RadixAccordion.AccordionItemProps &
  AccordionItemContent;

const AccordionTrigger = forwardRef<
  HTMLButtonElement | null,
  RadixAccordion.AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      className={cn(
        'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <RxChevronDown
        className="text-violet10 ease-in transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));

const AccordionContent = forwardRef<
  HTMLDivElement | null,
  RadixAccordion.AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <RadixAccordion.Content
    className={cn(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </RadixAccordion.Content>
));

const AccordionItem = forwardRef<HTMLDivElement | null, AccordionItemProps>(
  ({ className, title, content, ...props }, forwardedRef) => {
    return (
      <RadixAccordion.Item
        className={cn(
          'focus-within:shadow-violet mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </RadixAccordion.Item>
    );
  },
);
const Accordion: FC<AccordionProps> = ({ items = [], className, type }) => {
  return (
    <RadixAccordion.Root
      type={type}
      collapsible
      data-testid="accordion"
      className={cn(
        'bg-violet w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5',
        className,
      )}
    >
      {items?.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          value={item.value}
          content={item.content}
        />
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;
