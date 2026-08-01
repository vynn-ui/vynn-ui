import * as React from 'react';
import { Avatar as BaseAvatar } from '@base-ui-components/react/avatar';
import { cn } from '@vynn/utils';

export interface AvatarProps extends Omit<React.ComponentProps<typeof BaseAvatar.Root>, 'children'> {
  name: string;
  src?: string;
  size?: number;
}

// Radius stays rounded-chip (radius-full) in both themes per brief §11.5 — do not
// switch to rounded-surface/rounded-control for neobrutalism.
export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ name, src, size = 40, className, style, ...props }, ref) => {
    const initials = name
      .split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    return (
      <BaseAvatar.Root
        ref={ref}
        style={{ width: size, height: size, fontSize: size * 0.38, ...style }}
        className={cn(
          'inline-flex items-center justify-center shrink-0 overflow-hidden rounded-chip',
          'border-control border-border bg-accent-subtle text-accent font-sans font-semibold',
          className
        )}
        {...props}
      >
        <BaseAvatar.Image src={src} alt={name} className="w-full h-full object-cover" />
        <BaseAvatar.Fallback>{initials}</BaseAvatar.Fallback>
      </BaseAvatar.Root>
    );
  }
);
Avatar.displayName = 'Avatar';
