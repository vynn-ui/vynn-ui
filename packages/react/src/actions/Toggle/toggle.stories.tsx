import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Actions/Toggle',
  component: Toggle,
  args: { icon: 'bold' },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};
export const Pressed: Story = { args: { defaultPressed: true } };
export const Disabled: Story = { args: { disabled: true } };
