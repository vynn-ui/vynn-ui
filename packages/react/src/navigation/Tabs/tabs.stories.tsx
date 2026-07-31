import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs.Root> = {
  title: 'Navigation/Tabs',
  component: Tabs.Root,
};

export default meta;
type Story = StoryObj<typeof Tabs.Root>;

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview" className="w-full max-w-md">
      <Tabs.List>
        <Tabs.Tab value="overview">Overview</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="billing">Billing</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="overview">Overview content.</Tabs.Panel>
      <Tabs.Panel value="settings">Settings content.</Tabs.Panel>
      <Tabs.Panel value="billing">Billing content.</Tabs.Panel>
    </Tabs.Root>
  ),
};
