import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  args: { children: 'Button' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Destructive: Story = { args: { variant: 'destructive' } };
export const Link: Story = { args: { variant: 'link' } };
export const WithIcon: Story = { args: { variant: 'primary', icon: 'check' } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
