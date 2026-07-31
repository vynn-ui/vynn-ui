import * as React from 'react';
import { cn } from '@vynn/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  /** Tabler icon name shown at the start of the field. */
  icon?: string | null;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, icon, disabled, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon ? (
          <i
            className={cn('ti', `ti-${icon}`, 'icon-sm absolute left-input-x text-muted pointer-events-none')}
            aria-hidden="true"
          />
        ) : null}
        <input
          ref={ref}
          disabled={disabled}
          className={cn(
            'w-full h-control-md pr-input-x text-sm text-ink font-sans rounded-control border-control bg-surface shadow-control outline-none placeholder:text-muted disabled:bg-subtle disabled:cursor-not-allowed focus-visible:shadow-none focus-visible:focus-ring-role',
            icon ? 'pl-8' : 'pl-input-x',
            invalid ? 'border-danger' : 'border-border-strong',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';
