import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@vynn/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-sans font-semibold label-role transition-all duration-fast ease-standard focus-visible:outline-none focus-visible:focus-ring-role disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-on-accent border-control border-accent shadow-role hover:bg-accent-hover active:press-role active:shadow-none',
        secondary: 'bg-subtle text-ink border-control border-border-strong active:press-role',
        outline: 'bg-surface text-ink border-control border-border-strong active:press-role',
        ghost: 'bg-transparent text-ink border border-transparent hover:bg-subtle active:press-role',
        destructive:
          'bg-danger text-on-accent border-control border-danger shadow-role active:press-role active:shadow-none',
        link: 'bg-transparent text-accent underline p-0 h-auto border-none shadow-none rounded-none',
      },
      size: {
        sm: 'h-control-sm px-3 text-sm rounded-control',
        md: 'h-control-md px-btn-x text-sm rounded-control',
        lg: 'h-control-lg px-6 text-base rounded-control',
      },
    },
    compoundVariants: [
      {
        variant: 'link',
        className: 'h-auto',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Tabler icon name (e.g. "check", "plus") rendered before the label. */
  icon?: string | null;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {icon ? <i className={`ti ti-${icon}`} aria-hidden="true" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
