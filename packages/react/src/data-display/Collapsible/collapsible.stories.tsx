import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from './collapsible';

const meta: Meta<typeof Collapsible.Root> = {
  title: 'Data Display/Collapsible',
  component: Collapsible.Root,
};

export default meta;
type Story = StoryObj<typeof Collapsible.Root>;

export const Default: Story = {
  render: () => (
    <Collapsible.Root className="w-80">
      <Collapsible.Trigger>Advanced settings</Collapsible.Trigger>
      <Collapsible.Panel>Additional configuration options appear here.</Collapsible.Panel>
    </Collapsible.Root>
  ),
};
