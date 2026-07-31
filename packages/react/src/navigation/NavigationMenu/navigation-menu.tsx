import * as React from 'react';
import { cn } from '@vynn/utils';

function NavigationMenuRoot({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn('flex gap-5 font-sans', className)} {...props} />;
}

export interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

function NavigationMenuLink({ className, active, ...props }: NavigationMenuLinkProps) {
  return (
    <a
      className={cn(
        'text-sm font-semibold label-role no-underline',
        active ? 'text-accent' : 'text-ink',
        className
      )}
      {...props}
    />
  );
}

export const NavigationMenu = {
  Root: NavigationMenuRoot,
  Link: NavigationMenuLink,
};
