import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';
import { cn } from '@vynn/utils';

const DialogRoot = BaseDialog.Root;

function DialogTrigger({ className, ...props }: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return <BaseDialog.Trigger className={className} {...props} />;
}

function DialogPortal(props: React.ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function DialogBackdrop({ className, ...props }: React.ComponentProps<typeof BaseDialog.Backdrop>) {
  return <BaseDialog.Backdrop className={cn('fixed inset-0 bg-overlay', className)} {...props} />;
}

function DialogContent({ className, ...props }: React.ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Popup
      className={cn(
        'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] max-w-[90vw]',
        'bg-surface border-overlay border-border rounded-surface shadow-overlay-role p-card-padding font-sans',
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      className={cn('text-xl font-display weight-display text-ink mb-1', className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof BaseDialog.Description>) {
  return <BaseDialog.Description className={cn('text-sm text-secondary mb-4', className)} {...props} />;
}

function DialogClose({ className, ...props }: React.ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close className={className} {...props} />;
}

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Backdrop: DialogBackdrop,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
};
