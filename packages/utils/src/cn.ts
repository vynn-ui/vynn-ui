import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// These @utility classes (packages/styles/src/utilities.css) set border-width+style.
// Plain twMerge's default border-color group matches any `border-{word}` class, so it
// was treating e.g. `border-control border-border` as a same-group conflict and
// silently dropping border-control — killing every themed border in the library.
// Register them as their own group so they never collide with real Tailwind
// border-color classes.
const customTwMerge = extendTailwindMerge<'vynn-border-control'>({
  extend: {
    classGroups: {
      'vynn-border-control': [
        'border-control',
        'border-control-strong',
        'border-chip',
        'border-hairline',
        'border-overlay',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
