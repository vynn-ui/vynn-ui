import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';
import { cn } from '@vynn/utils';

// Base UI has no command-palette (cmdk-style) primitive — self-contained
// fallback wrapping Dialog for the modal chrome, with a small Context to
// share the search query between Input and Item for filtering.
const CommandContext = React.createContext<{ query: string; setQuery: (q: string) => void }>({
  query: '',
  setQuery: () => {},
});

function CommandRoot({ children, ...props }: React.ComponentProps<typeof BaseDialog.Root>) {
  const [query, setQuery] = React.useState('');
  return (
    <CommandContext.Provider value={{ query, setQuery }}>
      <BaseDialog.Root {...props}>{children}</BaseDialog.Root>
    </CommandContext.Provider>
  );
}

function CommandPortal(props: React.ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function CommandBackdrop({ className, ...props }: React.ComponentProps<typeof BaseDialog.Backdrop>) {
  return <BaseDialog.Backdrop className={cn('fixed inset-0 bg-backdrop', className)} {...props} />;
}

function CommandContent({ className, ...props }: React.ComponentProps<typeof BaseDialog.Popup>) {
  return (
    <BaseDialog.Popup
      className={cn(
        'fixed left-1/2 top-[12vh] -translate-x-1/2 w-[480px] max-w-[90vw] overflow-hidden',
        'bg-surface border-overlay border-border rounded-surface shadow-overlay-role font-sans',
        className
      )}
      {...props}
    />
  );
}

function CommandInput({ placeholder = 'Type a command or search...' }: { placeholder?: string }) {
  const { query, setQuery } = React.useContext(CommandContext);
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b-[length:var(--border-width-hairline)] border-border">
      <i className="ti ti-search icon-sm text-muted" aria-hidden="true" />
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border-none outline-none bg-transparent text-sm text-ink placeholder:text-muted"
      />
      <kbd className="font-mono text-xs text-muted">Esc</kbd>
    </div>
  );
}

function CommandList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('max-h-[280px] overflow-y-auto p-1', className)} {...props} />;
}

export interface CommandItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  onSelect?: () => void;
}

function CommandItem({ value, onSelect, onClick, className, children, ...props }: CommandItemProps) {
  const { query } = React.useContext(CommandContext);
  if (query && !value.toLowerCase().includes(query.toLowerCase())) return null;
  return (
    <div
      onClick={(e) => {
        onClick?.(e);
        onSelect?.();
      }}
      className={cn(
        'flex items-center gap-2 px-3 py-2 text-sm text-ink rounded-sm cursor-pointer hover:bg-subtle',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CommandEmpty({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-3 text-sm text-muted', className)} {...props} />;
}

export const Command = {
  Root: CommandRoot,
  Portal: CommandPortal,
  Backdrop: CommandBackdrop,
  Content: CommandContent,
  Input: CommandInput,
  List: CommandList,
  Item: CommandItem,
  Empty: CommandEmpty,
};
