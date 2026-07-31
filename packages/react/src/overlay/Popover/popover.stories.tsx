import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './popover';
import { Button } from '../../actions/Button';

const meta: Meta<typeof Popover.Root> = {
  title: 'Overlay/Popover',
  component: Popover.Root,
};

export default meta;
type Story = StoryObj<typeof Popover.Root>;

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">Open popover</Button>} />
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup>
            <Popover.Title>Dimensions</Popover.Title>
            <Popover.Description>Set the dimensions for the layer.</Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  ),
};
