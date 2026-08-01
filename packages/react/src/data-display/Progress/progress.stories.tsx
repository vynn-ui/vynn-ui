import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Data Display/Progress',
  component: Progress,
  args: { value: 60 },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { render: (args) => <div className="w-64"><Progress {...args} /></div> };
