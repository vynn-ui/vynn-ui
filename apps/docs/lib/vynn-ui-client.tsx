'use client';

// @vynn/ui has no 'use client' directives of its own — it has to stay
// framework-agnostic to also work in Vite/Storybook, where the directive is
// meaningless. Next.js App Router pages are Server Components by default, and
// Base UI's primitives (Checkbox, Switch, ...) rely on client-side hooks
// internally, so anything rendered live in MDX needs a client boundary.
//
// Compound components (Alert.Root, Card.Root, ...) can't cross that boundary
// as nested objects — a 'use client' export becomes an opaque reference at
// the RSC boundary, and member access like Alert.Description on the server
// side of that reference doesn't reach the real object. Each part has to be
// re-exported flat instead.
import {
  Button,
  Badge,
  Checkbox,
  Switch,
  Input,
  Alert as AlertNS,
  Card as CardNS,
} from '@vynn/ui';

export { Button, Badge, Checkbox, Switch, Input };

export const AlertRoot = AlertNS.Root;
export const AlertIcon = AlertNS.Icon;
export const AlertTitle = AlertNS.Title;
export const AlertDescription = AlertNS.Description;

export const UICardRoot = CardNS.Root;
export const UICardHeader = CardNS.Header;
export const UICardTitle = CardNS.Title;
export const UICardDescription = CardNS.Description;
export const UICardContent = CardNS.Content;
export const UICardFooter = CardNS.Footer;
