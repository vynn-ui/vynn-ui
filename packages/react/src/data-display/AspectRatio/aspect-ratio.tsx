import * as React from 'react';
import { AspectRatio as BaseAspectRatio } from '@base-ui-components/react/aspect-ratio';
import { cn } from '@vynn/utils';

export interface AspectRatioProps extends React.ComponentProps<typeof BaseAspectRatio.Root> {
  ratio?: number;
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 16 / 9, ...props }, ref) => {
    return (
      <BaseAspectRatio.Root
        ref={ref}
        ratio={ratio}
        className={cn('w-full overflow-hidden rounded-surface border-control border-border', className)}
        {...props}
      />
    );
  }
);
AspectRatio.displayName = 'AspectRatio';
