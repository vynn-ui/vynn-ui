import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  args: { placeholder: 'Write a message...' },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
export const Invalid: Story = { args: { invalid: true, defaultValue: 'Too short.' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: 'Disabled' } };
