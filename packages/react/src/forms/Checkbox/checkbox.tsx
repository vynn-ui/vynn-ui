import * as React from 'react';
import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';
import { cn } from '@vynn/utils';

export const Checkbox = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof BaseCheckbox.Root>>(
  ({ className, ...props }, ref) => {
    return (
      <BaseCheckbox.Root
        ref={ref}
        className={cn(
          'w-5 h-5 shrink-0 inline-flex items-center justify-center rounded-sm border-control border-border-strong bg-surface',
          'cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:focus-ring-role',
          'data-[checked]:bg-accent data-[checked]:border-accent',
          className
        )}
        {...props}
      >
        <BaseCheckbox.Indicator className="flex items-center justify-center text-on-accent">
          <i className="ti ti-check text-[14px]" aria-hidden="true" />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
    );
  }
);
Checkbox.displayName = 'Checkbox';
