import * as React from 'react';
import { cn } from '@vynn/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  radius?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width = '100%', height = 16, radius, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ width, height, borderRadius: radius, ...style }}
        className={cn('skeleton-shimmer', !radius && 'rounded-sm', className)}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';
