import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: { name: 'Alief Fajar' },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {};
export const WithImage: Story = {
  args: { src: 'https://i.pravatar.cc/80' },
};
export const Large: Story = { args: { size: 64 } };
