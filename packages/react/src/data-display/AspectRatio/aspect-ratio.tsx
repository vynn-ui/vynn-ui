import * as React from 'react';
import { cn } from '@vynn/utils';

// Base UI has no aspect-ratio primitive in this version — plain CSS `aspect-ratio`
// property fallback, same reasoning as InputOTP/Calendar/Command/Carousel.
export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 16 / 9, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ aspectRatio: ratio, ...style }}
        className={cn('w-full overflow-hidden rounded-surface border-control border-border', className)}
        {...props}
      />
    );
  }
);
AspectRatio.displayName = 'AspectRatio';
