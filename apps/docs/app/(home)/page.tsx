import Link from 'next/link';
import {
  Button,
  Badge,
  UICardRoot,
  UICardHeader,
  UICardTitle,
  UICardDescription,
  UICardContent,
} from '../../lib/vynn-ui-client';

const CATEGORIES = [
  { name: 'Actions', count: 3 },
  { name: 'Data Display', count: 13 },
  { name: 'Feedback', count: 2 },
  { name: 'Forms', count: 13 },
  { name: 'Layout', count: 2 },
  { name: 'Navigation', count: 5 },
  { name: 'Overlay', count: 11 },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-20 bg-page text-ink">
      <div className="w-full max-w-3xl flex flex-col items-center text-center gap-4">
        <Badge tone="accent">Classic &amp; Neobrutalism</Badge>
        <h1 className="text-4xl font-display weight-display text-ink">vynn-ui</h1>
        <p className="text-secondary text-base max-w-xl">
          A React component library with two complete themes sharing one token system — the same
          49 components, restyled from the ground up rather than palette-swapped.
        </p>
        <div className="flex gap-3 mt-2">
          <Link href="/docs">
            <Button variant="primary">Read the docs</Button>
          </Link>
          <a href={process.env.NEXT_PUBLIC_STORYBOOK_URL ?? 'http://localhost:6006'}>
            <Button variant="outline">Browse in Storybook</Button>
          </a>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-16">
        <UICardRoot>
          <UICardHeader>
            <UICardTitle>49 components, 7 categories</UICardTitle>
            <UICardDescription>Every component ships in both themes from one source.</UICardDescription>
          </UICardHeader>
          <UICardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
              {CATEGORIES.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between px-3 py-2 bg-subtle rounded-control text-sm"
                >
                  <span className="text-ink">{c.name}</span>
                  <span className="text-muted">{c.count}</span>
                </div>
              ))}
            </div>
          </UICardContent>
        </UICardRoot>
      </div>
    </main>
  );
}
