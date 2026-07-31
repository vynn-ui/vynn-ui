import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './form';
import { Input } from '../Input';
import { Button } from '../../actions/Button';

const meta: Meta<typeof Form.Root> = {
  title: 'Forms/Form',
  component: Form.Root,
};

export default meta;
type Story = StoryObj<typeof Form.Root>;

export const Default: Story = {
  render: () => (
    <Form.Root className="max-w-sm">
      <Form.Field>
        <Form.Label required>Email</Form.Label>
        <Input type="email" placeholder="you@company.com" />
        <Form.Description>We'll never share your email.</Form.Description>
      </Form.Field>
      <Form.Field>
        <Form.Label required>Password</Form.Label>
        <Input type="password" invalid />
        <Form.Message>Password must be at least 8 characters.</Form.Message>
      </Form.Field>
      <Button variant="primary" type="submit">
        Sign in
      </Button>
    </Form.Root>
  ),
};
