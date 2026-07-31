import * as React from 'react';
import { Menubar as BaseMenubar } from '@base-ui-components/react/menubar';
import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@vynn/utils';

function MenubarRoot({ className, ...props }: React.ComponentProps<typeof BaseMenubar>) {
  return (
    <BaseMenubar
      className={cn(
        'flex w-fit bg-surface border-control border-border-strong rounded-control font-sans',
        className
      )}
      {...props}
    />
  );
}

// Each top-level menu is still its own Menu.Root — Menubar.Root above provides
// the roving-focus/arrow-key coordination context between sibling triggers.
const MenubarMenu = BaseMenu.Root;

function MenubarTrigger({ className, ...props }: React.ComponentProps<typeof BaseMenu.Trigger>) {
  return (
    <BaseMenu.Trigger
      className={cn(
        'px-3 py-2 text-sm text-ink cursor-pointer outline-none data-[popup-open]:bg-subtle',
        className
      )}
      {...props}
    />
  );
}

function MenubarPortal(props: React.ComponentProps<typeof BaseMenu.Portal>) {
  return <BaseMenu.Portal {...props} />;
}

function MenubarPositioner({ className, ...props }: React.ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Positioner className={cn('z-50 outline-none', className)} sideOffset={4} align="start" {...props} />
  );
}

function MenubarPopup({ className, ...props }: React.ComponentProps<typeof BaseMenu.Popup>) {
  return (
    <BaseMenu.Popup
      className={cn(
        'min-w-[160px] p-1 bg-surface border-overlay border-border rounded-surface shadow-overlay-role font-sans',
        className
      )}
      {...props}
    />
  );
}

const menubarItemVariants = cva(
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

export interface MenubarItemProps
  extends React.ComponentProps<typeof BaseMenu.Item>,
    VariantProps<typeof menubarItemVariants> {}

function MenubarItem({ className, variant, ...props }: MenubarItemProps) {
  return <BaseMenu.Item className={cn(menubarItemVariants({ variant }), className)} {...props} />;
}

function MenubarSeparator({ className, ...props }: React.ComponentProps<typeof BaseMenu.Separator>) {
  return <BaseMenu.Separator className={cn('h-px my-1 bg-border', className)} {...props} />;
}

export const Menubar = {
  Root: MenubarRoot,
  Menu: MenubarMenu,
  Trigger: MenubarTrigger,
  Portal: MenubarPortal,
  Positioner: MenubarPositioner,
  Popup: MenubarPopup,
  Item: MenubarItem,
  Separator: MenubarSeparator,
};
