import * as React from 'react';
import { RadioGroup as BaseRadioGroup } from '@base-ui-components/react/radio-group';
import { Radio as BaseRadio } from '@base-ui-components/react/radio';
import { cn } from '@vynn/utils';

function RadioGroupRoot({ className, ...props }: React.ComponentProps<typeof BaseRadioGroup>) {
  return <BaseRadioGroup className={cn('flex flex-col gap-2', className)} {...props} />;
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof BaseRadio.Root>) {
  return (
    <BaseRadio.Root
      className={cn(
        'w-5 h-5 shrink-0 inline-flex items-center justify-center rounded-chip border-control border-border-strong',
        'cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:focus-ring-role',
        'data-[checked]:border-accent',
        className
      )}
      {...props}
    >
      <BaseRadio.Indicator className="w-[10px] h-[10px] rounded-chip bg-accent" />
    </BaseRadio.Root>
  );
}

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
};
