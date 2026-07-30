import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { Button } from '../../actions/Button';

const meta: Meta<typeof Card.Root> = {
  title: 'Data Display/Card',
  component: Card.Root,
};

export default meta;
type Story = StoryObj<typeof Card.Root>;

export const Default: Story = {
  render: () => (
    <Card.Root className="max-w-sm">
      <Card.Header>
        <Card.Title>Plan Sync</Card.Title>
        <Card.Description>Semua perubahan tersimpan otomatis ke cloud.</Card.Description>
      </Card.Header>
      <Card.Content>Detail tambahan di sini.</Card.Content>
      <Card.Footer>
        <Button variant="primary" size="sm">
          Kelola
        </Button>
      </Card.Footer>
    </Card.Root>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Card.Root className="max-w-sm">
      <Card.Header>
        <Card.Title>Storage</Card.Title>
      </Card.Header>
      <Card.Content>12GB of 50GB used</Card.Content>
    </Card.Root>
  ),
};
