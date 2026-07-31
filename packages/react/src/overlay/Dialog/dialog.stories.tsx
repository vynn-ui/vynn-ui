import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './dialog';
import { Button } from '../../actions/Button';

const meta: Meta<typeof Dialog.Root> = {
  title: 'Overlay/Dialog',
  component: Dialog.Root,
};

export default meta;
type Story = StoryObj<typeof Dialog.Root>;

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="primary">Edit profile</Button>} />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Content>
          <Dialog.Close
            className="absolute top-4 right-4 text-muted hover:text-ink"
            render={<button aria-label="Close" type="button" />}
          >
            <i className="ti ti-x icon-md" aria-hidden="true" />
          </Dialog.Close>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile here.</Dialog.Description>
          <div className="flex justify-end gap-2">
            <Dialog.Close render={<Button variant="ghost" size="sm">Cancel</Button>} />
            <Button variant="primary" size="sm">
              Save
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
