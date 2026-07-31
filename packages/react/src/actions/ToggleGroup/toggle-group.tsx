import * as React from 'react';
import { ToggleGroup as BaseToggleGroup } from '@base-ui-components/react/toggle-group';
import { Toggle as BaseToggle } from '@base-ui-components/react/toggle';
import { cn } from '@vynn/utils';

export interface ToggleGroupOption {
  value: string;
  label?: React.ReactNode;
  icon?: string | null;
}

export interface ToggleGroupProps
  extends Omit<React.ComponentProps<typeof BaseToggleGroup>, 'children'> {
  options: ToggleGroupOption[];
}

export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, options, ...props }, ref) => {
    return (
      <BaseToggleGroup
        ref={ref}
        className={cn('inline-flex border-control border-border-strong rounded-control overflow-hidden', className)}
        {...props}
      >
        {options.map((opt, i) => (
          <BaseToggle
            key={opt.value}
            value={opt.value}
            className={cn(
              'inline-flex items-center gap-2 h-control-sm px-3 font-sans text-sm font-medium bg-surface text-ink',
              'cursor-pointer outline-none focus-visible:focus-ring-role',
              'data-[pressed]:bg-accent-subtle data-[pressed]:text-accent',
              i !== 0 && 'border-l-[length:var(--border-width-default)] border-border-strong'
            )}
          >
            {opt.icon ? <i className={`ti ti-${opt.icon} icon-sm`} aria-hidden="true" /> : null}
            {opt.label}
          </BaseToggle>
        ))}
      </BaseToggleGroup>
    );
  }
);
ToggleGroup.displayName = 'ToggleGroup';
