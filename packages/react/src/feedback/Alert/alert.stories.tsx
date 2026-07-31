import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';

const meta: Meta<typeof Alert.Root> = {
  title: 'Feedback/Alert',
  component: Alert.Root,
};

export default meta;
type Story = StoryObj<typeof Alert.Root>;

export const Info: Story = {
  render: () => (
    <Alert.Root tone="info" className="max-w-md">
      <Alert.Icon />
      <Alert.Title>Heads up</Alert.Title>
      <Alert.Description>This is an informational message.</Alert.Description>
    </Alert.Root>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert.Root tone="warning" className="max-w-md">
      <Alert.Icon />
      <Alert.Title>Payment overdue</Alert.Title>
      <Alert.Description>Update your billing details.</Alert.Description>
    </Alert.Root>
  ),
};

export const Danger: Story = {
  render: () => (
    <Alert.Root tone="danger" className="max-w-md">
      <Alert.Icon />
      <Alert.Title>Something went wrong</Alert.Title>
      <Alert.Description>Your changes could not be saved.</Alert.Description>
    </Alert.Root>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert.Root tone="success" className="max-w-md">
      <Alert.Icon />
      <Alert.Title>Saved</Alert.Title>
      <Alert.Description>Your changes have been saved.</Alert.Description>
    </Alert.Root>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Alert.Root tone="neutral" className="max-w-md">
      <Alert.Icon />
      <Alert.Title>No description here</Alert.Title>
    </Alert.Root>
  ),
};
