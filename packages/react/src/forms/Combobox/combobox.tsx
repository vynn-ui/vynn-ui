import * as React from 'react';
import { Combobox as BaseCombobox } from '@base-ui-components/react/combobox';
import { cn } from '@vynn/utils';

const ComboboxRoot = BaseCombobox.Root;

function ComboboxInput({ className, ...props }: React.ComponentProps<typeof BaseCombobox.Input>) {
  return (
    <div className="relative flex items-center">
      <i className="ti ti-search icon-sm absolute left-input-x text-muted pointer-events-none" aria-hidden="true" />
      <BaseCombobox.Input
        className={cn(
          'w-full h-control-md pl-8 pr-input-x text-sm font-sans text-ink',
          'bg-surface border-control border-border-strong rounded-control shadow-control outline-none',
          'placeholder:text-muted focus-visible:shadow-none focus-visible:focus-ring-role',
          className
        )}
        {...props}
      />
    </div>
  );
}

function ComboboxPortal(props: React.ComponentProps<typeof BaseCombobox.Portal>) {
  return <BaseCombobox.Portal {...props} />;
}

function ComboboxPositioner({ className, ...props }: React.ComponentProps<typeof BaseCombobox.Positioner>) {
  return (
    <BaseCombobox.Positioner className={cn('z-50 outline-none', className)} sideOffset={4} {...props} />
  );
}

function ComboboxPopup({ className, ...props }: React.ComponentProps<typeof BaseCombobox.Popup>) {
  return (
    <BaseCombobox.Popup
      className={cn(
        'w-[var(--anchor-width)] max-h-[180px] overflow-auto p-1',
        'bg-surface border-overlay border-border rounded-surface shadow-overlay-role font-sans',
        className
      )}
      {...props}
    />
  );
}

function ComboboxList(props: React.ComponentProps<typeof BaseCombobox.List>) {
  return <BaseCombobox.List {...props} />;
}

function ComboboxItem({ className, ...props }: React.ComponentProps<typeof BaseCombobox.Item>) {
  return (
    <BaseCombobox.Item
      className={cn(
        'px-input-x py-2 text-sm text-ink rounded-control cursor-pointer',
        'data-[highlighted]:bg-accent-subtle data-[selected]:bg-accent-subtle outline-none',
        className
      )}
      {...props}
    />
  );
}

function ComboboxEmpty({ className, ...props }: React.ComponentProps<typeof BaseCombobox.Empty>) {
  return <BaseCombobox.Empty className={cn('px-input-x py-2 text-sm text-muted', className)} {...props} />;
}

export const Combobox = {
  Root: ComboboxRoot,
  Input: ComboboxInput,
  Portal: ComboboxPortal,
  Positioner: ComboboxPositioner,
  Popup: ComboboxPopup,
  List: ComboboxList,
  Item: ComboboxItem,
  Empty: ComboboxEmpty,
};
