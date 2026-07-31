import * as React from 'react';
import { Toggle as BaseToggle } from '@base-ui-components/react/toggle';
import { cn } from '@vynn/utils';

export interface ToggleProps extends React.ComponentProps<typeof BaseToggle> {
  /** Tabler icon name rendered before the label. */
  icon?: string | null;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <BaseToggle
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 h-control-sm px-3 font-sans text-sm font-medium',
          'border-control border-border-strong rounded-control bg-surface text-ink',
          'cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:focus-ring-role',
          'data-[pressed]:bg-accent-subtle data-[pressed]:text-accent',
          className
        )}
        {...props}
      >
        {icon ? <i className={`ti ti-${icon} icon-sm`} aria-hidden="true" /> : null}
        {children}
      </BaseToggle>
    );
  }
);
Toggle.displayName = 'Toggle';
