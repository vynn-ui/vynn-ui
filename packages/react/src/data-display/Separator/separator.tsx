import * as React from 'react';
import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import { cn } from '@vynn/utils';

export const Separator = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof BaseSeparator>>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <BaseSeparator
        ref={ref}
        orientation={orientation}
        className={cn(
          'bg-border',
          orientation === 'vertical'
            ? 'w-[length:var(--border-width-default)] self-stretch h-auto'
            : 'h-[length:var(--border-width-default)] w-full',
          className
        )}
        {...props}
      />
    );
  }
);
Separator.displayName = 'Separator';
