# @vynn/tokens

Design token source of truth for vynn-ui — primitive → semantic (per theme: `classic`, `neobrutalism`) → role. Values ported 1:1 from the original `reference/tokens/*.css` design files; do not re-derive or guess values here, edit the source and re-port instead.

Consumed by `@vynn/styles`, which wires these CSS custom properties into real Tailwind v4 utility classes.
