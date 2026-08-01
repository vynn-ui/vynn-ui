import * as React from 'react';
import { ScrollArea as BaseScrollArea } from '@base-ui-components/react/scroll-area';
import { cn } from '@vynn/utils';

export interface ScrollAreaProps extends React.ComponentProps<typeof BaseScrollArea.Root> {
  height?: number;
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, height = 200, children, ...props }, ref) => {
    return (
      <BaseScrollArea.Root
        ref={ref}
        style={{ height }}
        className={cn('font-sans border-control border-border rounded-surface overflow-hidden', className)}
        {...props}
      >
        <BaseScrollArea.Viewport className="w-full h-full p-3">{children}</BaseScrollArea.Viewport>
        <BaseScrollArea.Scrollbar
          orientation="vertical"
          className="w-2 p-0.5 flex justify-center bg-transparent data-[hovering]:bg-subtle"
        >
          <BaseScrollArea.Thumb className="w-1 rounded-chip bg-border-strong" />
        </BaseScrollArea.Scrollbar>
        <BaseScrollArea.Scrollbar
          orientation="horizontal"
          className="h-2 p-0.5 flex items-center bg-transparent data-[hovering]:bg-subtle"
        >
          <BaseScrollArea.Thumb className="h-1 rounded-chip bg-border-strong" />
        </BaseScrollArea.Scrollbar>
        <BaseScrollArea.Corner />
      </BaseScrollArea.Root>
    );
  }
);
ScrollArea.displayName = 'ScrollArea';
