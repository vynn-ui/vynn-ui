import * as React from 'react';
import { Tabs as BaseTabs } from '@base-ui-components/react/tabs';
import { cn } from '@vynn/utils';

const TabsRoot = BaseTabs.Root;

function TabsList({ className, ...props }: React.ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      className={cn(
        'flex gap-1 font-sans border-b-[length:var(--border-width-default)] border-border',
        className
      )}
      {...props}
    />
  );
}

function TabsTab({ className, ...props }: React.ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      className={cn(
        'px-4 py-2 text-sm font-semibold label-role cursor-pointer text-muted',
        'border-b-[length:var(--border-width-strong)] border-transparent -mb-[length:var(--border-width-default)]',
        'data-[selected]:text-ink data-[selected]:border-accent',
        'outline-none focus-visible:focus-ring-role',
        className
      )}
      {...props}
    />
  );
}

function TabsPanel({ className, ...props }: React.ComponentProps<typeof BaseTabs.Panel>) {
  return <BaseTabs.Panel className={cn('mt-4 text-sm text-ink font-sans', className)} {...props} />;
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
};
