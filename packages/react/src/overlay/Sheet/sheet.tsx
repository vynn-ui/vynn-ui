import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@vynn/utils';

const SheetRoot = BaseDialog.Root;

function SheetTrigger({ className, ...props }: React.ComponentProps<typeof BaseDialog.Trigger>) {
  return <BaseDialog.Trigger className={className} {...props} />;
}

function SheetPortal(props: React.ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function SheetBackdrop({ className, ...props }: React.ComponentProps<typeof BaseDialog.Backdrop>) {
  return <BaseDialog.Backdrop className={cn('fixed inset-0 bg-backdrop', className)} {...props} />;
}

const sheetContentVariants = cva(
  'fixed bg-surface shadow-overlay-role p-card-padding font-sans outline-none',
  {
    variants: {
      side: {
        right: 'inset-y-0 right-0 h-full w-[340px] border-l-[length:var(--overlay-border-width)] border-border',
        left: 'inset-y-0 left-0 h-full w-[340px] border-r-[length:var(--overlay-border-width)] border-border',
        top: 'inset-x-0 top-0 w-full border-b-[length:var(--overlay-border-width)] border-border',
        bottom: 'inset-x-0 bottom-0 w-full border-t-[length:var(--overlay-border-width)] border-border',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

export interface SheetContentProps
  extends React.ComponentProps<typeof BaseDialog.Popup>,
    VariantProps<typeof sheetContentVariants> {}

function SheetContent({ className, side, ...props }: SheetContentProps) {
  return <BaseDialog.Popup className={cn(sheetContentVariants({ side }), className)} {...props} />;
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      className={cn('text-lg font-display weight-display text-ink mb-1', className)}
      {...props}
    />
  );
}

function SheetDescription({ className, ...props }: React.ComponentProps<typeof BaseDialog.Description>) {
  return <BaseDialog.Description className={cn('text-sm text-secondary mb-4', className)} {...props} />;
}

function SheetClose({ className, ...props }: React.ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close className={className} {...props} />;
}

export const Sheet = {
  Root: SheetRoot,
  Trigger: SheetTrigger,
  Portal: SheetPortal,
  Backdrop: SheetBackdrop,
  Content: SheetContent,
  Title: SheetTitle,
  Description: SheetDescription,
  Close: SheetClose,
};
