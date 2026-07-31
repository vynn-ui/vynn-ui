import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './drawer';
import { Button } from '../../actions/Button';

const meta: Meta<typeof Drawer.Root> = {
  title: 'Overlay/Drawer',
  component: Drawer.Root,
};

export default meta;
type Story = StoryObj<typeof Drawer.Root>;

export const Default: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger render={<Button variant="outline">Open drawer</Button>} />
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Content>
          <Drawer.Title>Drawer title</Drawer.Title>
          <Drawer.Description>Bottom sheet content goes here.</Drawer.Description>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};
