import * as React from 'react';
import { Progress as BaseProgress } from '@base-ui-components/react/progress';
import { cn } from '@vynn/utils';

export const Progress = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof BaseProgress.Root>>(
  ({ className, ...props }, ref) => {
    return (
      <BaseProgress.Root ref={ref} className={cn('w-full', className)} {...props}>
        <BaseProgress.Track className="h-[10px] w-full bg-subtle border-hairline border-border rounded-chip overflow-hidden">
          <BaseProgress.Indicator className="h-full bg-accent transition-all duration-normal ease-standard" />
        </BaseProgress.Track>
      </BaseProgress.Root>
    );
  }
);
Progress.displayName = 'Progress';
