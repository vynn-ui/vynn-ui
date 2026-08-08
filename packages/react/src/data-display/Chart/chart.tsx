import * as React from 'react';
import { cn } from '@vynn/utils';

export interface ChartDatum {
  label: string;
  value: number;
}

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'bar' | 'line' | 'pie';
  data: ChartDatum[];
}

const PIE_COLORS = [
  'var(--color-accent)',
  'var(--color-warning-solid)',
  'var(--color-success-solid)',
  'var(--color-info-solid)',
  'var(--color-danger-solid)',
];

export function Chart({ type = 'bar', data, className, ...props }: ChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);

  if (type === 'line') {
    const w = 280;
    const h = 120;
    const pad = 8;
    const pts = data.map((d, i) => [
      pad + (i / (data.length - 1 || 1)) * (w - pad * 2),
      h - pad - (d.value / max) * (h - pad * 2),
    ]);
    const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
    return (
      <svg width={w} height={h} className={cn('font-sans', className)} {...(props as React.SVGProps<SVGSVGElement>)}>
        <path d={path} fill="none" stroke="var(--color-accent)" strokeWidth={2} />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={3} fill="var(--color-accent)" />
        ))}
      </svg>
    );
  }

  if (type === 'pie') {
    const total = data.reduce((s, d) => s + d.value, 0) || 1;
    let acc = 0;
    const r = 55;
    const cx = 60;
    const cy = 60;
    const slices = data.map((d, i) => {
      const start = (acc / total) * 2 * Math.PI;
      acc += d.value;
      const end = (acc / total) * 2 * Math.PI;
      const x1 = cx + r * Math.sin(start);
      const y1 = cy - r * Math.cos(start);
      const x2 = cx + r * Math.sin(end);
      const y2 = cy - r * Math.cos(end);
      const large = end - start > Math.PI ? 1 : 0;
      return (
        <path
          key={i}
          d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`}
          fill={PIE_COLORS[i % PIE_COLORS.length]}
          stroke="var(--color-bg-surface)"
          strokeWidth={2}
        />
      );
    });
    return (
      <svg width={120} height={120} className={cn('font-sans', className)} {...(props as React.SVGProps<SVGSVGElement>)}>
        {slices}
      </svg>
    );
  }

  return (
    <div className={cn('flex items-end gap-2 h-[120px] font-sans', className)} {...props}>
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            style={{ height: `${(d.value / max) * 100}px` }}
            className="w-6 bg-accent rounded-t-sm border-t-[length:var(--border-width-hairline)] border-l-[length:var(--border-width-hairline)] border-r-[length:var(--border-width-hairline)] border-border"
          />
          <span className="text-xs text-muted">{d.label}</span>
        </div>
      ))}
    </div>
  );
}
