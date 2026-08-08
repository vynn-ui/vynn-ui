import * as React from 'react';
import { Toast as BaseToast } from '@base-ui-components/react/toast';
import { cn } from '@vynn/utils';

// Base UI's Toast is imperative: toasts are created via useToastManager().add(...)
// and Toast.Root requires the resulting `toast` object as a prop (it reads internal
// positioning/transition state from it) — it can't be statically composed like Dialog.
export type ToastTone = 'default' | 'success' | 'danger';

const ToastContext = React.createContext<ToastTone>('default');

const TONE_ICON: Record<ToastTone, string> = {
  default: 'info-circle',
  success: 'circle-check',
  danger: 'circle-x',
};

const TONE_TEXT: Record<ToastTone, string> = {
  default: 'text-ink',
  success: 'text-success-fg',
  danger: 'text-danger-fg',
};

const ToastProvider = BaseToast.Provider;

function ToastViewport({ className, ...props }: React.ComponentProps<typeof BaseToast.Viewport>) {
  return (
    <BaseToast.Viewport
      className={cn('fixed bottom-4 right-4 z-[var(--z-toast)] flex flex-col gap-2', className)}
      {...props}
    />
  );
}

export interface ToastRootProps extends React.ComponentProps<typeof BaseToast.Root> {
  tone?: ToastTone;
}

function ToastRoot({ className, tone, toast, children, ...props }: ToastRootProps) {
  const resolvedTone = tone ?? (toast.type as ToastTone | undefined) ?? 'default';
  return (
    <ToastContext.Provider value={resolvedTone}>
      <BaseToast.Root
        toast={toast}
        className={cn(
          'flex items-start gap-3 w-[320px] px-4 py-3 font-sans',
          'bg-surface border-overlay border-border rounded-surface shadow-overlay-role',
          className
        )}
        {...props}
      >
        {children}
      </BaseToast.Root>
    </ToastContext.Provider>
  );
}

function ToastIcon({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const tone = React.useContext(ToastContext);
  return (
    <i
      className={cn('ti', `ti-${TONE_ICON[tone]}`, 'icon-md shrink-0', TONE_TEXT[tone], className)}
      aria-hidden="true"
      {...props}
    />
  );
}

function ToastContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex-1', className)} {...props} />;
}

function ToastTitle({ className, ...props }: React.ComponentProps<typeof BaseToast.Title>) {
  return <BaseToast.Title className={cn('text-sm font-semibold text-ink', className)} {...props} />;
}

function ToastDescription({ className, ...props }: React.ComponentProps<typeof BaseToast.Description>) {
  return (
    <BaseToast.Description className={cn('text-xs text-secondary mt-0.5', className)} {...props} />
  );
}

function ToastClose({ className, ...props }: React.ComponentProps<typeof BaseToast.Close>) {
  return (
    <BaseToast.Close
      className={cn('bg-transparent border-none cursor-pointer text-muted', className)}
      {...props}
    >
      <i className="ti ti-x icon-sm" aria-hidden="true" />
    </BaseToast.Close>
  );
}

// useToastManager is a member of the Toast namespace object, not a separate
// top-level export.
export const useToastManager = BaseToast.useToastManager;

// Convenience: renders the active toast list with our default chrome. Consumers
// who need custom per-toast layout can map useToastManager().toasts themselves
// and use Toast.Root/Icon/Content/Title/Description/Close directly instead.
function ToastList() {
  const { toasts } = useToastManager();
  return (
    <>
      {toasts.map((toast) => (
        <ToastRoot key={toast.id} toast={toast}>
          <ToastIcon />
          <ToastContent>
            <ToastTitle />
            <ToastDescription />
          </ToastContent>
          <ToastClose />
        </ToastRoot>
      ))}
    </>
  );
}

export const Toast = {
  Provider: ToastProvider,
  Viewport: ToastViewport,
  Root: ToastRoot,
  Icon: ToastIcon,
  Content: ToastContent,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose,
  List: ToastList,
};
