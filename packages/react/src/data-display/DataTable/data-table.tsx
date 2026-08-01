import * as React from 'react';
import { cn } from '@vynn/utils';
import { Table } from '../Table';

export interface DataTableColumn {
  key: string;
  label: string;
}

export interface DataTableProps {
  columns: DataTableColumn[];
  rows: Record<string, React.ReactNode>[];
  pageSize?: number;
  className?: string;
}

export function DataTable({ columns, rows, pageSize = 5, className }: DataTableProps) {
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDir, setSortDir] = React.useState(1);
  const [filter, setFilter] = React.useState('');
  const [page, setPage] = React.useState(1);

  let data = rows.filter((r) =>
    Object.values(r).join(' ').toLowerCase().includes(filter.toLowerCase())
  );
  if (sortKey) {
    data = [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      return av === bv ? 0 : av! > bv! ? sortDir : -sortDir;
    });
  }
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const paged = data.slice((page - 1) * pageSize, page * pageSize);

  const toggleSort = (key: string) => {
    setSortKey(key);
    setSortDir(sortKey === key ? -sortDir : 1);
  };

  return (
    <div className={cn('font-sans', className)}>
      <input
        placeholder="Filter..."
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setPage(1);
        }}
        className="mb-3 w-[200px] h-control-sm px-input-x text-sm bg-surface border-control border-border-strong rounded-control outline-none focus-visible:focus-ring-role"
      />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {columns.map((c) => (
              <Table.Head key={c.key} className="cursor-pointer select-none" onClick={() => toggleSort(c.key)}>
                {c.label} {sortKey === c.key ? (sortDir === 1 ? '↑' : '↓') : ''}
              </Table.Head>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paged.map((row, i) => (
            <Table.Row key={i}>
              {columns.map((c) => (
                <Table.Cell key={c.key}>{row[c.key]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <div className="flex justify-end items-center gap-2 mt-2 text-xs text-muted">
        <span>
          Page {page}/{totalPages}
        </span>
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="cursor-pointer border-none bg-transparent text-accent"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="cursor-pointer border-none bg-transparent text-accent"
        >
          Next
        </button>
      </div>
    </div>
  );
}
