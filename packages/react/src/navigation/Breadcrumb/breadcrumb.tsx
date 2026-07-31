import * as React from 'react';
import { cn } from '@vynn/utils';

function BreadcrumbRoot({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav aria-label="breadcrumb" className={cn('font-sans', className)} {...props} />;
}

function BreadcrumbList({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) {
  return <ol className={cn('flex items-center gap-2 text-sm list-none', className)} {...props} />;
}

function BreadcrumbItem({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li className={cn('flex items-center gap-2', className)} {...props} />;
}

function BreadcrumbLink({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn('text-muted no-underline hover:text-ink', className)} {...props} />;
}

function BreadcrumbPage({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span aria-current="page" className={cn('text-ink font-semibold', className)} {...props} />;
}

function BreadcrumbSeparator({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li aria-hidden="true" className={cn('flex items-center text-muted', className)} {...props}>
      <i className="ti ti-chevron-right text-[14px]" aria-hidden="true" />
    </li>
  );
}

export const Breadcrumb = {
  Root: BreadcrumbRoot,
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
};
