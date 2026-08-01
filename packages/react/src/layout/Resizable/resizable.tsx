import * as React from 'react';
import { cn } from '@vynn/utils';

// Base UI's resizable-panel API couldn't be confirmed stable/available at the time
// of writing — self-contained fallback, same reasoning as InputOTP/Calendar/Command/Carousel.
export interface ResizableProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  initialWidth?: number;
  minWidth?: number;
  maxWidth?: number;
}

export function Resizable({
  children,
  initialWidth = 240,
  minWidth = 160,
  maxWidth = 420,
  className,
  ...props
}: ResizableProps) {
  const [width, setWidth] = React.useState(initialWidth);
  const dragging = React.useRef(false);

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      setWidth((w) => Math.min(maxWidth, Math.max(minWidth, e.movementX + w)));
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [minWidth, maxWidth]);

  return (
    <div
      className={cn('flex border-control border-border rounded-surface overflow-hidden', className)}
      {...props}
    >
      <div style={{ width }} className="p-3 bg-subtle font-sans text-sm text-ink">
        {children}
      </div>
      <div
        onMouseDown={() => {
          dragging.current = true;
        }}
        className="w-[6px] cursor-col-resize bg-border"
      />
      <div className="flex-1 p-3 text-xs text-muted font-sans">drag the handle →</div>
    </div>
  );
}
