import * as React from 'react';
import { Select as BaseSelect } from '@base-ui-components/react/select';
import { cn } from '@vynn/utils';

const SelectRoot = BaseSelect.Root;

function SelectTrigger({ className, ...props }: React.ComponentProps<typeof BaseSelect.Trigger>) {
  return (
    <BaseSelect.Trigger
      className={cn(
        'w-full h-control-md px-input-x flex items-center justify-between gap-2 text-sm font-sans',
        'bg-surface border-control border-border-strong rounded-control shadow-control',
        'text-ink data-[popup-open]:shadow-none focus-visible:outline-none focus-visible:focus-ring-role',
        className
      )}
      {...props}
    />
  );
}

function SelectValue({ className, ...props }: React.ComponentProps<typeof BaseSelect.Value>) {
  return <BaseSelect.Value className={cn('truncate', className)} {...props} />;
}

function SelectIcon({ className, ...props }: React.ComponentProps<typeof BaseSelect.Icon>) {
  return (
    <BaseSelect.Icon className={cn('shrink-0', className)} {...props}>
      <i className="ti ti-chevron-down icon-sm text-muted" aria-hidden="true" />
    </BaseSelect.Icon>
  );
}

function SelectPortal(props: React.ComponentProps<typeof BaseSelect.Portal>) {
  return <BaseSelect.Portal {...props} />;
}

function SelectPositioner({ className, ...props }: React.ComponentProps<typeof BaseSelect.Positioner>) {
  return <BaseSelect.Positioner className={cn('z-50 outline-none', className)} sideOffset={4} {...props} />;
}

function SelectPopup({ className, ...props }: React.ComponentProps<typeof BaseSelect.Popup>) {
  return (
    <BaseSelect.Popup
      className={cn(
        'w-[var(--anchor-width)] max-h-[min(24rem,var(--available-height))] overflow-auto p-1',
        'bg-surface border-overlay border-border rounded-surface shadow-overlay-role font-sans',
        className
      )}
      {...props}
    />
  );
}

function SelectItem({ className, ...props }: React.ComponentProps<typeof BaseSelect.Item>) {
  return (
    <BaseSelect.Item
      className={cn(
        'flex items-center justify-between gap-2 px-input-x py-2 text-sm text-ink rounded-control cursor-pointer',
        'data-[highlighted]:bg-accent-subtle data-[selected]:bg-accent-subtle outline-none',
        className
      )}
      {...props}
    />
  );
}

function SelectItemText({ className, ...props }: React.ComponentProps<typeof BaseSelect.ItemText>) {
  return <BaseSelect.ItemText className={cn('truncate', className)} {...props} />;
}

function SelectItemIndicator({ className, ...props }: React.ComponentProps<typeof BaseSelect.ItemIndicator>) {
  return (
    <BaseSelect.ItemIndicator className={cn('shrink-0', className)} {...props}>
      <i className="ti ti-check icon-sm text-accent" aria-hidden="true" />
    </BaseSelect.ItemIndicator>
  );
}

function SelectGroup(props: React.ComponentProps<typeof BaseSelect.Group>) {
  return <BaseSelect.Group {...props} />;
}

function SelectGroupLabel({ className, ...props }: React.ComponentProps<typeof BaseSelect.GroupLabel>) {
  return (
    <BaseSelect.GroupLabel
      className={cn('px-input-x pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted', className)}
      {...props}
    />
  );
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof BaseSelect.Separator>) {
  return <BaseSelect.Separator className={cn('my-1 h-px bg-border', className)} {...props} />;
}

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Positioner: SelectPositioner,
  Popup: SelectPopup,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Separator: SelectSeparator,
};
