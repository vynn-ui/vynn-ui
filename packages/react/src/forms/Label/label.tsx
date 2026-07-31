import * as React from 'react';
import { cn } from '@vynn/utils';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'inline-block mb-1 font-sans text-sm font-semibold label-role text-ink',
          className
        )}
        {...props}
      >
        {children}
        {required ? <span className="text-danger"> *</span> : null}
      </label>
    );
  }
);
Label.displayName = 'Label';
