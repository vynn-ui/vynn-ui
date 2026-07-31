import * as React from 'react';
import { Switch as BaseSwitch } from '@base-ui-components/react/switch';
import { cn } from '@vynn/utils';

export const Switch = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof BaseSwitch.Root>>(
  ({ className, ...props }, ref) => {
    return (
      <BaseSwitch.Root
        ref={ref}
        className={cn(
          'w-11 h-6 p-0.5 inline-flex items-center justify-start rounded-chip border-control border-border-strong bg-subtle',
          'cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:focus-ring-role',
          'transition-colors duration-fast ease-standard',
          'data-[checked]:bg-accent data-[checked]:border-accent data-[checked]:justify-end',
          className
        )}
        {...props}
      >
        <BaseSwitch.Thumb className="w-[18px] h-[18px] rounded-chip bg-surface shadow-[0_1px_2px_rgb(0_0_0/0.2)]" />
      </BaseSwitch.Root>
    );
  }
);
Switch.displayName = 'Switch';
