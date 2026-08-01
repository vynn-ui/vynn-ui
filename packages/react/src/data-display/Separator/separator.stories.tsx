import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Data Display/Separator',
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm text-ink">Above</p>
      <Separator className="my-3" />
      <p className="text-sm text-ink">Below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center h-8 gap-3">
      <span className="text-sm text-ink">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-ink">Right</span>
    </div>
  ),
};
