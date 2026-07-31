import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  args: { placeholder: 'you@company.com' },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithIcon: Story = { args: { icon: 'mail' } };
export const Invalid: Story = { args: { invalid: true, defaultValue: 'not-an-email' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: 'disabled' } };
