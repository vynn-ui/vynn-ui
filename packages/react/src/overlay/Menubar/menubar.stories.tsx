import type { Meta, StoryObj } from '@storybook/react';
import { Menubar } from './menubar';

const meta: Meta<typeof Menubar.Root> = {
  title: 'Overlay/Menubar',
  component: Menubar.Root,
};

export default meta;
type Story = StoryObj<typeof Menubar.Root>;

export const Default: Story = {
  render: () => (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Positioner>
            <Menubar.Popup>
              <Menubar.Item>New file</Menubar.Item>
              <Menubar.Item>Open...</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item variant="danger">Close</Menubar.Item>
            </Menubar.Popup>
          </Menubar.Positioner>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Positioner>
            <Menubar.Popup>
              <Menubar.Item>Undo</Menubar.Item>
              <Menubar.Item>Redo</Menubar.Item>
            </Menubar.Popup>
          </Menubar.Positioner>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  ),
};
