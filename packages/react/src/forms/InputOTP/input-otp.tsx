import * as React from 'react';
import { cn } from '@vynn/utils';

// Base UI has no stable OTP/PIN-input primitive as of this writing — self-contained
// fallback implementation instead of wrapping Base UI, per brief guidance to check first.
export interface InputOTPProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  ({ length = 6, value = '', onChange, disabled, className }, ref) => {
    const chars = React.useMemo(
      () => value.padEnd(length, ' ').split('').slice(0, length),
      [value, length]
    );
    const slotRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const setChar = (i: number, c: string) => {
      const next = chars.map((ch, idx) => (idx === i ? c : ch)).join('').trimEnd();
      onChange?.(next);
      if (c && slotRefs.current[i + 1]) slotRefs.current[i + 1]?.focus();
    };

    const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !chars[i]?.trim() && slotRefs.current[i - 1]) {
        slotRefs.current[i - 1]?.focus();
      }
    };

    return (
      <div ref={ref} className={cn('flex gap-2', className)}>
        {chars.map((ch, i) => (
          <input
            key={i}
            ref={(el) => {
              slotRefs.current[i] = el;
            }}
            maxLength={1}
            value={ch.trim()}
            disabled={disabled}
            onChange={(e) => setChar(i, e.target.value.slice(-1))}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={cn(
              'w-10 h-control-md text-center font-mono text-lg font-semibold',
              'bg-surface border-control border-border-strong rounded-control shadow-control outline-none',
              'disabled:bg-subtle disabled:cursor-not-allowed',
              'focus-visible:shadow-none focus-visible:focus-ring-role'
            )}
          />
        ))}
      </div>
    );
  }
);
InputOTP.displayName = 'InputOTP';
