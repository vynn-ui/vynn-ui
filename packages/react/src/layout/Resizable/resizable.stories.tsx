import type { Meta, StoryObj } from '@storybook/react';
import { Resizable } from './resizable';

const meta: Meta<typeof Resizable> = {
  title: 'Layout/Resizable',
  component: Resizable,
};

export default meta;
type Story = StoryObj<typeof Resizable>;

export const Default: Story = {
  render: () => <Resizable>Sidebar content</Resizable>,
};
