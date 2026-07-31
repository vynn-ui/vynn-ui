import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination.Root> = {
  title: 'Navigation/Pagination',
  component: Pagination.Root,
};

export default meta;
type Story = StoryObj<typeof Pagination.Root>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    const totalPages = 10;
    const pages = [Math.max(1, page - 1), page, Math.min(totalPages, page + 1)].filter(
      (p, i, arr) => arr.indexOf(p) === i
    );
    return (
      <Pagination.Root>
        <Pagination.Previous onClick={() => setPage((p) => Math.max(1, p - 1))} />
        {pages[0] > 1 ? <Pagination.Ellipsis /> : null}
        {pages.map((p) => (
          <Pagination.Item key={p} active={p === page} onClick={() => setPage(p)}>
            {p}
          </Pagination.Item>
        ))}
        {pages[pages.length - 1] < totalPages ? <Pagination.Ellipsis /> : null}
        <Pagination.Next onClick={() => setPage((p) => Math.min(totalPages, p + 1))} />
      </Pagination.Root>
    );
  },
};
