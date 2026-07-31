import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@vynn/utils';

export type AlertTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info';

const AlertContext = React.createContext<AlertTone>('info');

const TONE_ICON: Record<AlertTone, string> = {
  neutral: 'info-circle',
  success: 'circle-check',
  warning: 'alert-triangle',
  danger: 'circle-x',
  info: 'info-circle',
};

const TONE_TEXT: Record<AlertTone, string> = {
  neutral: 'text-ink',
  success: 'text-success-fg',
  warning: 'text-warning-fg',
  danger: 'text-danger-fg',
  info: 'text-info-fg',
};

const alertRootVariants = cva('relative w-full flex gap-3 px-4 py-3 pl-11 rounded-surface border-control font-sans', {
  variants: {
    tone: {
      neutral: 'bg-subtle border-border',
      success: 'bg-success-subtle border-success-border',
      warning: 'bg-warning-subtle border-warning-border',
      danger: 'bg-danger-subtle border-danger-border',
      info: 'bg-info-subtle border-info-border',
    },
  },
  defaultVariants: {
    tone: 'info',
  },
});

export interface AlertRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertRootVariants> {}

function AlertRoot({ className, tone, children, ...props }: AlertRootProps) {
  const resolvedTone = tone ?? 'info';
  return (
    <AlertContext.Provider value={resolvedTone}>
      <div role="alert" className={cn(alertRootVariants({ tone: resolvedTone }), className)} {...props}>
        {children}
      </div>
    </AlertContext.Provider>
  );
}

export interface AlertIconProps extends React.HTMLAttributes<HTMLElement> {
  /** Tabler icon name override. Defaults to the current tone's icon. */
  icon?: string;
}

function AlertIcon({ className, icon, ...props }: AlertIconProps) {
  const tone = React.useContext(AlertContext);
  return (
    <i
      className={cn(
        'ti',
        `ti-${icon ?? TONE_ICON[tone]}`,
        'icon-md absolute left-4 top-3 shrink-0',
        TONE_TEXT[tone],
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const tone = React.useContext(AlertContext);
  return (
    <div className={cn('text-sm font-semibold', TONE_TEXT[tone], className)} {...props} />
  );
}

function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('text-sm text-secondary', className)} {...props} />;
}

export const Alert = {
  Root: AlertRoot,
  Icon: AlertIcon,
  Title: AlertTitle,
  Description: AlertDescription,
};
