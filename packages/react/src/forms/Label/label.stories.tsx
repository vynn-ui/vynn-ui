import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from '../Input';

const meta: Meta<typeof Label> = {
  title: 'Forms/Label',
  component: Label,
  args: { children: 'Email address' },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const WithInput: Story = {
  render: () => (
    <div>
      <Label htmlFor="email" required>
        Email address
      </Label>
      <Input id="email" type="email" placeholder="you@company.com" />
    </div>
  ),
};
