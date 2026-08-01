import * as React from 'react';
import { cn } from '@vynn/utils';

// Base UI has no carousel primitive — self-contained fallback, same reasoning
// as InputOTP/Calendar/Command.
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[];
}

export function Carousel({ items, className, ...props }: CarouselProps) {
  const [idx, setIdx] = React.useState(0);
  const go = (d: number) => setIdx((idx + d + items.length) % items.length);

  return (
    <div className={cn('relative w-full font-sans', className)} {...props}>
      <div className="bg-surface border-control border-border rounded-surface shadow-role overflow-hidden">
        {items[idx]}
      </div>
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-chip border-control border-border-strong bg-surface cursor-pointer inline-flex items-center justify-center"
      >
        <i className="ti ti-chevron-left icon-sm" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-chip border-control border-border-strong bg-surface cursor-pointer inline-flex items-center justify-center"
      >
        <i className="ti ti-chevron-right icon-sm" aria-hidden="true" />
      </button>
      <div className="flex justify-center gap-1.5 mt-2">
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setIdx(i)}
            className={cn(
              'w-[6px] h-[6px] rounded-chip cursor-pointer',
              i === idx ? 'bg-accent' : 'bg-border-strong'
            )}
          />
        ))}
      </div>
    </div>
  );
}
