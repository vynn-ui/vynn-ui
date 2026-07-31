import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';
import { Button } from '../../actions/Button';

const meta: Meta<typeof Tooltip.Root> = {
  title: 'Overlay/Tooltip',
  component: Tooltip.Root,
};

export default meta;
type Story = StoryObj<typeof Tooltip.Root>;

export const Default: Story = {
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger render={<Button variant="outline">Hover me</Button>} />
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup>Add to library</Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};
