import * as React from 'react';
import { Popover as BasePopover } from '@base-ui-components/react/popover';
import { cn } from '@vynn/utils';

const PopoverRoot = BasePopover.Root;

function PopoverTrigger({ className, ...props }: React.ComponentProps<typeof BasePopover.Trigger>) {
  return <BasePopover.Trigger className={className} {...props} />;
}

function PopoverPortal(props: React.ComponentProps<typeof BasePopover.Portal>) {
  return <BasePopover.Portal {...props} />;
}

function PopoverPositioner({ className, ...props }: React.ComponentProps<typeof BasePopover.Positioner>) {
  return (
    <BasePopover.Positioner className={cn('z-50 outline-none', className)} sideOffset={8} {...props} />
  );
}

function PopoverPopup({ className, ...props }: React.ComponentProps<typeof BasePopover.Popup>) {
  return (
    <BasePopover.Popup
      className={cn(
        'min-w-[220px] p-3 bg-surface border-overlay border-border rounded-surface shadow-overlay-role font-sans',
        className
      )}
      {...props}
    />
  );
}

function PopoverTitle({ className, ...props }: React.ComponentProps<typeof BasePopover.Title>) {
  return (
    <BasePopover.Title
      className={cn('text-sm font-display weight-display text-ink mb-1', className)}
      {...props}
    />
  );
}

function PopoverDescription({ className, ...props }: React.ComponentProps<typeof BasePopover.Description>) {
  return <BasePopover.Description className={cn('text-sm text-secondary', className)} {...props} />;
}

function PopoverClose({ className, ...props }: React.ComponentProps<typeof BasePopover.Close>) {
  return <BasePopover.Close className={className} {...props} />;
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Popup: PopoverPopup,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
};
