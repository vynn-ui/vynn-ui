import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
  args: { min: 0, max: 100, defaultValue: 50 },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = { render: (args) => <div className="w-64"><Slider {...args} /></div> };
export const Disabled: Story = { args: { disabled: true }, render: (args) => <div className="w-64"><Slider {...args} /></div> };
