import clsx from 'clsx';
import { FC, HTMLProps, ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type AccordionItemContent = {
  title: string;
  content: ReactNode;
};

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  className?: HTMLProps<HTMLElement>['className'];
  isOpen: boolean;
  onToggle: () => void;
};

type AccordionProps = {
  items: AccordionItemContent[];
  className?: HTMLProps<HTMLElement>['className'];
};

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  children,
  className,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={twMerge(
        'p-4 border border-gray-300 rounded-lg mb-2',
        className,
      )}
    >
      <summary
        className="cursor-pointer text-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onToggle}
      >
        {title}
      </summary>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};
const Accordion: FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div data-testid="Accordion" className={clsx('accordion', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
