import * as React from 'react';
import { Tooltip as BaseTooltip } from '@base-ui-components/react/tooltip';
import { cn } from '@vynn/utils';

const TooltipProvider = BaseTooltip.Provider;
const TooltipRoot = BaseTooltip.Root;

function TooltipTrigger({ className, ...props }: React.ComponentProps<typeof BaseTooltip.Trigger>) {
  return <BaseTooltip.Trigger className={className} {...props} />;
}

function TooltipPortal(props: React.ComponentProps<typeof BaseTooltip.Portal>) {
  return <BaseTooltip.Portal {...props} />;
}

function TooltipPositioner({ className, ...props }: React.ComponentProps<typeof BaseTooltip.Positioner>) {
  return (
    <BaseTooltip.Positioner className={cn('z-50 outline-none', className)} sideOffset={6} {...props} />
  );
}

function TooltipPopup({ className, ...props }: React.ComponentProps<typeof BaseTooltip.Popup>) {
  return (
    <BaseTooltip.Popup
      className={cn(
        'whitespace-nowrap px-2 py-1 text-xs font-sans rounded-sm border-control',
        'bg-inverse text-ink-inverse border-inverse',
        className
      )}
      {...props}
    />
  );
}

export const Tooltip = {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Positioner: TooltipPositioner,
  Popup: TooltipPopup,
};
