import type { Meta, StoryObj } from '@storybook/react';
import { Sheet } from './sheet';
import { Button } from '../../actions/Button';

const meta: Meta<typeof Sheet.Root> = {
  title: 'Overlay/Sheet',
  component: Sheet.Root,
};

export default meta;
type Story = StoryObj<typeof Sheet.Root>;

export const Right: Story = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger render={<Button variant="outline">Open sheet</Button>} />
      <Sheet.Portal>
        <Sheet.Backdrop />
        <Sheet.Content side="right">
          <Sheet.Close
            className="absolute top-4 right-4 text-muted hover:text-ink"
            render={<button aria-label="Close" type="button" />}
          >
            <i className="ti ti-x icon-md" aria-hidden="true" />
          </Sheet.Close>
          <Sheet.Title>Sheet title</Sheet.Title>
          <Sheet.Description>Panel content goes here.</Sheet.Description>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet.Root>
  ),
};
