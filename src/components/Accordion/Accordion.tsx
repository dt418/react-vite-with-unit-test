import * as RadixAccordion from '@radix-ui/react-accordion';
import { type FC, type HTMLProps, forwardRef } from 'react';
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
  <RadixAccordion.Header className='flex'>
    <RadixAccordion.Trigger
      className={cn(
        'group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none text-violet-900 shadow-[0_1px_0] shadow-zinc-600 outline-none hover:bg-zinc-200',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <RxChevronDown
        className='text-violet-800 transition-transform duration-300 ease-in group-data-[state=open]:rotate-180'
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
      'overflow-hidden bg-zinc-200 text-[15px] text-zinc-800 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className='px-5 py-[15px]'>{children}</div>
  </RadixAccordion.Content>
));

const AccordionItem = forwardRef<HTMLDivElement | null, AccordionItemProps>(
  ({ className, title, content, ...props }, forwardedRef) => {
    return (
      <RadixAccordion.Item
        className={cn(
          'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-violet-500',
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
      data-testid='accordion'
      className={cn(
        'w-[300px] rounded-md bg-violet-500 shadow-[0_2px_10px] shadow-black/5',
        className,
      )}
    >
      {items?.map((item) => (
        <AccordionItem
          key={item.value}
          title={item.title}
          value={item.value}
          content={item.content}
        />
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;
