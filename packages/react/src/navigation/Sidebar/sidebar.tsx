import * as React from 'react';
import { cn } from '@vynn/utils';

function SidebarRoot({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-[220px] p-4 flex flex-col gap-5 bg-subtle border-control border-border font-sans',
        className
      )}
      {...props}
    />
  );
}

function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1', className)} {...props} />;
}

function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-5', className)} {...props} />;
}

function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1', className)} {...props} />;
}

function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(className)} {...props} />;
}

function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mb-2 text-xs font-semibold uppercase tracking-wider text-muted', className)}
      {...props}
    />
  );
}

function SidebarGroupItems({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-0.5', className)} {...props} />;
}

export interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

function SidebarItem({ className, active, children, ...props }: SidebarItemProps) {
  return (
    <a
      className={cn(
        'flex items-center gap-2 px-3 py-2 rounded-control text-sm font-medium no-underline',
        active ? 'text-accent bg-accent-subtle' : 'text-ink bg-transparent',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export const Sidebar = {
  Root: SidebarRoot,
  Header: SidebarHeader,
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupLabel: SidebarGroupLabel,
  GroupItems: SidebarGroupItems,
  Item: SidebarItem,
};
