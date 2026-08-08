import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';
import { cn } from '@vynn/utils';

const DrawerRoot = BaseDialog.Root;

function DrawerTrigger({ className, ...props }: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return <BaseDialog.Trigger className={className} {...props} />;
}

function DrawerPortal(props: React.ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function DrawerBackdrop({ className, ...props }: React.ComponentProps<typeof BaseDialog.Backdrop>) {
  return <BaseDialog.Backdrop className={cn('fixed inset-0 bg-backdrop', className)} {...props} />;
}

function DrawerContent({ className, children, ...props }: React.ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Popup
      className={cn(
        'fixed inset-x-0 bottom-0 max-h-[80%] bg-surface rounded-t-surface shadow-overlay-role p-card-padding font-sans outline-none',
        'border-t-[length:var(--overlay-border-width)] border-border',
        className
      )}
      {...props}
    >
      <div className="w-10 h-1 rounded-chip bg-border-strong mx-auto mb-4" />
      {children}
    </BaseDialog.Popup>
  );
}

function DrawerTitle({ className, ...props }: React.ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      className={cn('text-lg font-display weight-display text-ink mb-1', className)}
      {...props}
    />
  );
}

function DrawerDescription({ className, ...props }: React.ComponentProps<typeof BaseDialog.Description>) {
  return <BaseDialog.Description className={cn('text-sm text-secondary mb-4', className)} {...props} />;
}

function DrawerClose({ className, ...props }: React.ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close className={className} {...props} />;
}

export const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Portal: DrawerPortal,
  Backdrop: DrawerBackdrop,
  Content: DrawerContent,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Close: DrawerClose,
};
