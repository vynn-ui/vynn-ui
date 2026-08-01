import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './data-table';

const meta: Meta<typeof DataTable> = {
  title: 'Data Display/DataTable',
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'plan', label: 'Plan' },
  { key: 'status', label: 'Status' },
];

const rows = [
  { name: 'Acme Inc.', plan: 'Pro', status: 'Active' },
  { name: 'Globex Corp.', plan: 'Free', status: 'Trial' },
  { name: 'Initech', plan: 'Enterprise', status: 'Active' },
  { name: 'Umbrella Co.', plan: 'Pro', status: 'Active' },
  { name: 'Soylent Corp.', plan: 'Free', status: 'Trial' },
  { name: 'Stark Industries', plan: 'Enterprise', status: 'Active' },
];

export const Default: Story = {
  args: { columns, rows, pageSize: 4 },
};
