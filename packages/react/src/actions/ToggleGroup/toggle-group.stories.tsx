import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup } from './toggle-group';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Actions/ToggleGroup',
  component: ToggleGroup,
  args: {
    options: [
      { value: 'bold', icon: 'bold', label: 'Bold' },
      { value: 'italic', icon: 'italic', label: 'Italic' },
      { value: 'underline', icon: 'underline', label: 'Underline' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = { args: { defaultValue: 'bold' } };
export const Multiple: Story = { args: { toggleMultiple: true, defaultValue: ['bold', 'italic'] } };
