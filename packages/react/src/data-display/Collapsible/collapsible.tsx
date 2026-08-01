import * as React from 'react';
import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible';
import { cn } from '@vynn/utils';

function CollapsibleRoot({ className, ...props }: React.ComponentProps<typeof BaseCollapsible.Root>) {
  return <BaseCollapsible.Root className={cn('font-sans', className)} {...props} />;
}

function CollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      className={cn(
        'group flex items-center gap-2 text-sm font-semibold text-ink cursor-pointer outline-none',
        className
      )}
      {...props}
    >
      <i
        className="ti ti-chevron-right icon-sm transition-transform duration-fast group-data-[panel-open]:rotate-90"
        aria-hidden="true"
      />
      {children}
    </BaseCollapsible.Trigger>
  );
}

function CollapsiblePanel({ className, ...props }: React.ComponentProps<typeof BaseCollapsible.Panel>) {
  return <BaseCollapsible.Panel className={cn('mt-2 pl-5 text-sm text-secondary', className)} {...props} />;
}

export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
};
