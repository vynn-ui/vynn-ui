import * as React from 'react';
import { cn } from '@vynn/utils';

function FormRoot({ className, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return <form className={cn('flex flex-col gap-4 font-sans', className)} {...props} />;
}

function FormField({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1', className)} {...props} />;
}

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

function FormLabel({ className, children, required, ...props }: FormLabelProps) {
  return (
    <label
      className={cn('text-sm font-semibold label-role text-ink', className)}
      {...props}
    >
      {children}
      {required ? <span className="text-danger"> *</span> : null}
    </label>
  );
}

function FormDescription({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('text-xs text-muted', className)} {...props} />;
}

function FormMessage({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('text-xs text-danger-fg', className)} {...props} />;
}

export const Form = {
  Root: FormRoot,
  Field: FormField,
  Label: FormLabel,
  Description: FormDescription,
  Message: FormMessage,
};
