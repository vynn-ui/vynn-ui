import type { Meta, StoryObj } from '@storybook/react';
import { Command } from './command';

const meta: Meta<typeof Command.Root> = {
  title: 'Overlay/Command',
  component: Command.Root,
};

export default meta;
type Story = StoryObj<typeof Command.Root>;

export const Default: Story = {
  render: () => (
    <Command.Root defaultOpen>
      <Command.Portal>
        <Command.Backdrop />
        <Command.Content>
          <Command.Input />
          <Command.List>
            <Command.Item value="New file">
              <i className="ti ti-file icon-sm" aria-hidden="true" />
              New file
            </Command.Item>
            <Command.Item value="Search">
              <i className="ti ti-search icon-sm" aria-hidden="true" />
              Search
            </Command.Item>
            <Command.Item value="Settings">
              <i className="ti ti-settings icon-sm" aria-hidden="true" />
              Settings
            </Command.Item>
            <Command.Empty>No results found.</Command.Empty>
          </Command.List>
        </Command.Content>
      </Command.Portal>
    </Command.Root>
  ),
};
