import * as React from 'react';
import { Slider as BaseSlider } from '@base-ui-components/react/slider';
import { cn } from '@vynn/utils';

export const Slider = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof BaseSlider.Root>>(
  ({ className, ...props }, ref) => {
    return (
      <BaseSlider.Root ref={ref} className={cn('flex items-center gap-3', className)} {...props}>
        <BaseSlider.Control className="relative flex-1 h-5 flex items-center">
          <BaseSlider.Track className="h-[6px] w-full rounded-chip bg-subtle border-hairline border-border">
            <BaseSlider.Indicator className="h-full rounded-chip bg-accent" />
          </BaseSlider.Track>
          <BaseSlider.Thumb className="w-[18px] h-[18px] rounded-chip bg-surface border-control border-accent outline-none focus-visible:focus-ring-role" />
        </BaseSlider.Control>
        <BaseSlider.Value className="font-mono text-xs text-muted min-w-[28px] text-right" />
      </BaseSlider.Root>
    );
  }
);
Slider.displayName = 'Slider';
