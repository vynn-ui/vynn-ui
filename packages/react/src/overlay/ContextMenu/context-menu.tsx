import * as React from 'react';
import { ContextMenu as BaseContextMenu } from '@base-ui-components/react/context-menu';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@vynn/utils';

const ContextMenuRoot = BaseContextMenu.Root;

function ContextMenuTrigger({ className, ...props }: React.ComponentProps<typeof BaseContextMenu.Trigger>) {
  return <BaseContextMenu.Trigger className={className} {...props} />;
}

function ContextMenuPortal(props: React.ComponentProps<typeof BaseContextMenu.Portal>) {
  return <BaseContextMenu.Portal {...props} />;
}

function ContextMenuPositioner({ className, ...props }: React.ComponentProps<typeof BaseContextMenu.Positioner>) {
  return <BaseContextMenu.Positioner className={cn('z-50 outline-none', className)} {...props} />;
}

function ContextMenuPopup({ className, ...props }: React.ComponentProps<typeof BaseContextMenu.Popup>) {
  return (
    <BaseContextMenu.Popup
      className={cn(
        'min-w-[180px] p-1 bg-surface border-overlay border-border rounded-surface shadow-overlay-role font-sans',
        className
      )}
      {...props}
    />
  );
}

const contextMenuItemVariants = cva(
  'flex items-center gap-2 px-3 py-2 text-sm rounded-sm cursor-pointer outline-none',
  {
    variants: {
      variant: {
        default: 'text-ink data-[highlighted]:bg-subtle',
        danger: 'text-danger-fg data-[highlighted]:bg-danger-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ContextMenuItemProps
  extends React.ComponentProps<typeof BaseContextMenu.Item>,
    VariantProps<typeof contextMenuItemVariants> {}

function ContextMenuItem({ className, variant, ...props }: ContextMenuItemProps) {
  return <BaseContextMenu.Item className={cn(contextMenuItemVariants({ variant }), className)} {...props} />;
}

function ContextMenuSeparator({ className, ...props }: React.ComponentProps<typeof BaseContextMenu.Separator>) {
  return <BaseContextMenu.Separator className={cn('h-px my-1 bg-border', className)} {...props} />;
}

function ContextMenuGroup(props: React.ComponentProps<typeof BaseContextMenu.Group>) {
  return <BaseContextMenu.Group {...props} />;
}

function ContextMenuGroupLabel({ className, ...props }: React.ComponentProps<typeof BaseContextMenu.GroupLabel>) {
  return (
    <BaseContextMenu.GroupLabel
      className={cn('px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted', className)}
      {...props}
    />
  );
}

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Portal: ContextMenuPortal,
  Positioner: ContextMenuPositioner,
  Popup: ContextMenuPopup,
  Item: ContextMenuItem,
  Separator: ContextMenuSeparator,
  Group: ContextMenuGroup,
  GroupLabel: ContextMenuGroupLabel,
};
