import * as React from 'react';
import { HoverCard as BaseHoverCard } from '@base-ui-components/react/hover-card';
import { cn } from '@vynn/utils';

const HoverCardRoot = BaseHoverCard.Root;

function HoverCardTrigger({ className, ...props }: React.ComponentProps<typeof BaseHoverCard.Trigger>) {
  return <BaseHoverCard.Trigger className={className} {...props} />;
}

function HoverCardPortal(props: React.ComponentProps<typeof BaseHoverCard.Portal>) {
  return <BaseHoverCard.Portal {...props} />;
}

function HoverCardPositioner({ className, ...props }: React.ComponentProps<typeof BaseHoverCard.Positioner>) {
  return (
    <BaseHoverCard.Positioner className={cn('z-50 outline-none', className)} sideOffset={8} {...props} />
  );
}

function HoverCardPopup({ className, ...props }: React.ComponentProps<typeof BaseHoverCard.Popup>) {
  return (
    <BaseHoverCard.Popup
      className={cn(
        'w-[240px] p-3 text-sm text-secondary bg-surface border-overlay border-border rounded-surface shadow-overlay-role font-sans',
        className
      )}
      {...props}
    />
  );
}

export const HoverCard = {
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
  Portal: HoverCardPortal,
  Positioner: HoverCardPositioner,
  Popup: HoverCardPopup,
};
