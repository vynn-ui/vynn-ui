import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as VynnUI from './lib/vynn-ui-client';

/** A hand-picked set of vynn-ui components (see lib/vynn-ui-client.tsx) is
 * available directly inside .mdx content, e.g. <Button variant="primary">Click</Button>,
 * so docs pages can show real, live-rendered components instead of static code
 * blocks. defaultMdxComponents is spread last so fumadocs-ui's own reserved
 * names (Card, Cards, Tabs, Tab, ...) always win on a clash. */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...VynnUI,
    ...defaultMdxComponents,
    ...components,
  };
}
