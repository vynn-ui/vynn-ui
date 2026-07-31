import * as React from 'react';
import { cn } from '@vynn/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, rows = 4, disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        className={cn(
          'w-full py-3 px-input-x resize-y leading-normal',
          'font-sans text-sm text-ink bg-surface rounded-control border-control shadow-control outline-none',
          'placeholder:text-muted disabled:bg-subtle disabled:cursor-not-allowed',
          'focus-visible:shadow-none focus-visible:focus-ring-role',
          invalid ? 'border-danger' : 'border-border-strong',
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';
