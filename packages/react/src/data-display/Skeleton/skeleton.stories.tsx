import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Data Display/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Line: Story = { render: () => <div className="w-64"><Skeleton /></div> };
export const Circle: Story = { render: () => <Skeleton width={40} height={40} radius="999px" /> };
export const Card: Story = {
  render: () => (
    <div className="w-64 flex flex-col gap-2">
      <Skeleton height={120} radius="16px" />
      <Skeleton width="80%" />
      <Skeleton width="60%" />
    </div>
  ),
};
