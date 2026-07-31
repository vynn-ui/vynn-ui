import * as React from 'react';
import { Popover as BasePopover } from '@base-ui-components/react/popover';
import { cn } from '@vynn/utils';
import { Calendar } from '../Calendar';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({ value, onChange, placeholder = 'Pick a date', className }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <BasePopover.Root open={open} onOpenChange={setOpen}>
      <BasePopover.Trigger
        className={cn(
          'inline-flex items-center gap-2 h-control-md px-input-x text-sm font-sans',
          'bg-surface border-control border-border-strong rounded-control shadow-control outline-none',
          'focus-visible:shadow-none focus-visible:focus-ring-role',
          value ? 'text-ink' : 'text-muted',
          className
        )}
      >
        <i className="ti ti-calendar icon-sm" aria-hidden="true" />
        {value ? value.toLocaleDateString() : placeholder}
      </BasePopover.Trigger>
      <BasePopover.Portal>
        <BasePopover.Positioner sideOffset={4} className="z-50 outline-none">
          <BasePopover.Popup>
            <Calendar
              selected={value}
              onSelect={(date) => {
                onChange?.(date);
                setOpen(false);
              }}
            />
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
