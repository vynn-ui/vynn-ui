import * as React from 'react';
import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@vynn/utils';

const DropdownMenuRoot = BaseMenu.Root;

function DropdownMenuTrigger({ className, ...props }: React.ComponentProps<typeof BaseMenu.Trigger>) {
  return <BaseMenu.Trigger className={className} {...props} />;
}

function DropdownMenuPortal(props: React.ComponentProps<typeof BaseMenu.Portal>) {
  return <BaseMenu.Portal {...props} />;
}

function DropdownMenuPositioner({ className, ...props }: React.ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Positioner className={cn('z-50 outline-none', className)} sideOffset={4} align="end" {...props} />
  );
}

function DropdownMenuPopup({ className, ...props }: React.ComponentProps<typeof BaseMenu.Popup>) {
  return (
    <BaseMenu.Popup
      className={cn(
        'min-w-[180px] p-1 bg-surface border-overlay border-border rounded-surface shadow-overlay-role font-sans',
        className
      )}
      {...props}
    />
  );
}

const dropdownMenuItemVariants = cva(
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

export interface DropdownMenuItemProps
  extends React.ComponentProps<typeof BaseMenu.Item>,
    VariantProps<typeof dropdownMenuItemVariants> {}

function DropdownMenuItem({ className, variant, ...props }: DropdownMenuItemProps) {
  return <BaseMenu.Item className={cn(dropdownMenuItemVariants({ variant }), className)} {...props} />;
}

function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof BaseMenu.Separator>) {
  return <BaseMenu.Separator className={cn('h-px my-1 bg-border', className)} {...props} />;
}

function DropdownMenuGroup(props: React.ComponentProps<typeof BaseMenu.Group>) {
  return <BaseMenu.Group {...props} />;
}

function DropdownMenuGroupLabel({ className, ...props }: React.ComponentProps<typeof BaseMenu.GroupLabel>) {
  return (
    <BaseMenu.GroupLabel
      className={cn('px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted', className)}
      {...props}
    />
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Portal: DropdownMenuPortal,
  Positioner: DropdownMenuPositioner,
  Popup: DropdownMenuPopup,
  Item: DropdownMenuItem,
  Separator: DropdownMenuSeparator,
  Group: DropdownMenuGroup,
  GroupLabel: DropdownMenuGroupLabel,
};
