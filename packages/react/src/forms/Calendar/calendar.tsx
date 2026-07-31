import * as React from 'react';
import { cn } from '@vynn/utils';

// Base UI has no calendar/date-grid primitive — self-contained fallback, same
// reasoning as InputOTP.
export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  defaultMonth?: Date;
  className?: string;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ selected, onSelect, defaultMonth, className }, ref) => {
    const [view, setView] = React.useState(() => defaultMonth ?? selected ?? new Date());
    const year = view.getFullYear();
    const month = view.getMonth();

    const first = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = first.getDay();
    const cells: (number | null)[] = [
      ...Array(startOffset).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    const goToMonth = (delta: number) => setView(new Date(year, month + delta, 1));

    return (
      <div
        ref={ref}
        className={cn(
          'w-[280px] p-3 bg-surface border-control border-border rounded-surface shadow-role font-sans',
          className
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <button
            type="button"
            onClick={() => goToMonth(-1)}
            aria-label="Previous month"
            className="inline-flex items-center justify-center w-6 h-6 rounded-control text-ink hover:bg-subtle"
          >
            <i className="ti ti-chevron-left icon-sm" aria-hidden="true" />
          </button>
          <div className="text-sm font-semibold text-ink">
            {view.toLocaleString('en', { month: 'long' })} {year}
          </div>
          <button
            type="button"
            onClick={() => goToMonth(1)}
            aria-label="Next month"
            className="inline-flex items-center justify-center w-6 h-6 rounded-control text-ink hover:bg-subtle"
          >
            <i className="ti ti-chevron-right icon-sm" aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-[2px] mb-1">
          {WEEKDAYS.map((w) => (
            <div key={w} className="text-center text-xs text-muted">
              {w}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-[2px]">
          {cells.map((d, i) => {
            const date = d ? new Date(year, month, d) : null;
            const isSelected = date && selected && isSameDay(date, selected);
            return (
              <div
                key={i}
                onClick={() => date && onSelect?.(date)}
                className={cn(
                  'h-[30px] flex items-center justify-center text-sm rounded-sm',
                  d ? 'cursor-pointer' : 'cursor-default',
                  isSelected ? 'bg-accent text-on-accent' : d ? 'text-ink hover:bg-subtle' : ''
                )}
              >
                {d ?? ''}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
Calendar.displayName = 'Calendar';
