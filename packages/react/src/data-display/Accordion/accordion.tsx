import * as React from 'react';
import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
import { cn } from '@vynn/utils';

function AccordionRoot({ className, ...props }: React.ComponentProps<typeof BaseAccordion.Root>) {
  return (
    <BaseAccordion.Root
      className={cn('font-sans border-control border-border rounded-surface overflow-hidden', className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      className={cn(
        '[&:not(:last-child)]:border-b-[length:var(--border-width-hairline)] [&:not(:last-child)]:border-border',
        className
      )}
      {...props}
    />
  );
}

function AccordionHeader({ className, ...props }: React.ComponentProps<typeof BaseAccordion.Header>) {
  return <BaseAccordion.Header className={cn('m-0', className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Trigger
      className={cn(
        'group flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-ink cursor-pointer outline-none',
        className
      )}
      {...props}
    >
      {children}
      <i
        className="ti ti-chevron-down icon-sm text-ink transition-transform duration-fast group-data-[panel-open]:rotate-180"
        aria-hidden="true"
      />
    </BaseAccordion.Trigger>
  );
}

function AccordionPanel({ className, ...props }: React.ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel className={cn('px-4 pb-4 text-sm text-secondary', className)} {...props} />
  );
}

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
};
