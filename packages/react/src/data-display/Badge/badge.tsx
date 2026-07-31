import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@vynn/utils';

const badgeVariants = cva(
  'inline-flex items-center h-[22px] px-2 font-sans text-xs font-semibold label-role rounded-chip border-chip',
  {
    variants: {
      tone: {
        neutral: 'bg-subtle text-ink border-border',
        accent: 'bg-accent-subtle text-accent border-accent',
        success: 'bg-success-subtle text-success-fg border-success-fg',
        warning: 'bg-warning-subtle text-warning-fg border-warning-fg',
        danger: 'bg-danger-subtle text-danger-fg border-danger-fg',
        info: 'bg-info-subtle text-info-fg border-info-fg',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone, ...props }, ref) => {
    return <span ref={ref} className={cn(badgeVariants({ tone }), className)} {...props} />;
  }
);
Badge.displayName = 'Badge';
