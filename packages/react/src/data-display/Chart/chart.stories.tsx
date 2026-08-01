import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './chart';

const meta: Meta<typeof Chart> = {
  title: 'Data Display/Chart',
  component: Chart,
};

export default meta;
type Story = StoryObj<typeof Chart>;

const data = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 55 },
  { label: 'Mar', value: 40 },
  { label: 'Apr', value: 70 },
  { label: 'May', value: 50 },
];

export const Bar: Story = { args: { type: 'bar', data } };
export const Line: Story = { args: { type: 'line', data } };
export const Pie: Story = { args: { type: 'pie', data } };
