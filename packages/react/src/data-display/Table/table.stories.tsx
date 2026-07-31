import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';

const meta: Meta<typeof Table.Root> = {
  title: 'Data Display/Table',
  component: Table.Root,
};

export default meta;
type Story = StoryObj<typeof Table.Root>;

const rows = [
  { name: 'Acme Inc.', plan: 'Pro', status: 'Active' },
  { name: 'Globex Corp.', plan: 'Free', status: 'Trial' },
  { name: 'Initech', plan: 'Enterprise', status: 'Active' },
];

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Plan</Table.Head>
          <Table.Head>Status</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row.name}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.plan}</Table.Cell>
            <Table.Cell>{row.status}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Caption>A list of accounts.</Table.Caption>
    </Table.Root>
  ),
};
