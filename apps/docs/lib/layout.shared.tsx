import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'vynn-ui',
    },
    links: [
      {
        text: 'Storybook',
        url: process.env.NEXT_PUBLIC_STORYBOOK_URL ?? 'http://localhost:6006',
        external: true,
      },
      {
        text: 'GitHub',
        url: 'https://github.com/vynn-ui/vynn-ui',
        external: true,
      },
    ],
  };
}
