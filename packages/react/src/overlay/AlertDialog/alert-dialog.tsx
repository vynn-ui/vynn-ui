import * as React from 'react';
import { AlertDialog as BaseAlertDialog } from '@base-ui-components/react/alert-dialog';
import { cn } from '@vynn/utils';

const AlertDialogRoot = BaseAlertDialog.Root;

function AlertDialogTrigger({ className, ...props }: React.ComponentProps<typeof BaseAlertDialog.Trigger>) {
  return <BaseAlertDialog.Trigger className={className} {...props} />;
}

function AlertDialogPortal(props: React.ComponentProps<typeof BaseAlertDialog.Portal>) {
  return <BaseAlertDialog.Portal {...props} />;
}

function AlertDialogBackdrop({ className, ...props }: React.ComponentProps<typeof BaseAlertDialog.Backdrop>) {
  return <BaseAlertDialog.Backdrop className={cn('fixed inset-0 bg-backdrop', className)} {...props} />;
}

function AlertDialogContent({ className, ...props }: React.ComponentProps<typeof BaseAlertDialog.Popup>) {
  return (
    <BaseAlertDialog.Popup
      className={cn(
        'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] max-w-[90vw]',
        'bg-surface border-overlay border-border rounded-surface shadow-overlay-role p-card-padding font-sans',
        className
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof BaseAlertDialog.Title>) {
  return (
    <BaseAlertDialog.Title
      className={cn('text-lg font-display weight-display text-ink mb-1', className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseAlertDialog.Description>) {
  return <BaseAlertDialog.Description className={cn('text-sm text-secondary', className)} {...props} />;
}

function AlertDialogActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-5 flex justify-end gap-2', className)} {...props} />;
}

function AlertDialogClose({ className, ...props }: React.ComponentProps<typeof BaseAlertDialog.Close>) {
  return <BaseAlertDialog.Close className={className} {...props} />;
}

export const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Backdrop: AlertDialogBackdrop,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Actions: AlertDialogActions,
  Close: AlertDialogClose,
};
