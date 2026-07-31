import * as React from 'react';
import { cn } from '@vynn/utils';

function PaginationRoot({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center gap-2 font-sans', className)} {...props} />;
}

export interface PaginationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

function PaginationItem({ className, active, ...props }: PaginationItemProps) {
  return (
    <button
      type="button"
      className={cn(
        'min-w-control-sm h-control-sm px-2 inline-flex items-center justify-center',
        'text-sm rounded-control border-control border-border-strong cursor-pointer',
        active ? 'bg-accent text-on-accent' : 'bg-surface text-ink',
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <PaginationItem aria-label="Previous page" className={className} {...props}>
      <i className="ti ti-chevron-left icon-sm" aria-hidden="true" />
    </PaginationItem>
  );
}

function PaginationNext({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <PaginationItem aria-label="Next page" className={className} {...props}>
      <i className="ti ti-chevron-right icon-sm" aria-hidden="true" />
    </PaginationItem>
  );
}

function PaginationEllipsis({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span aria-hidden="true" className={cn('text-muted px-1', className)} {...props}>
      &hellip;
    </span>
  );
}

export const Pagination = {
  Root: PaginationRoot,
  Item: PaginationItem,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis,
};
