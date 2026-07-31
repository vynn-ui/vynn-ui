import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from './alert-dialog';
import { Button } from '../../actions/Button';

const meta: Meta<typeof AlertDialog.Root> = {
  title: 'Overlay/AlertDialog',
  component: AlertDialog.Root,
};

export default meta;
type Story = StoryObj<typeof AlertDialog.Root>;

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger render={<Button variant="destructive">Delete project</Button>} />
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Content>
          <AlertDialog.Title>Delete this project?</AlertDialog.Title>
          <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
          <AlertDialog.Actions>
            <AlertDialog.Close render={<Button variant="ghost" size="sm">Cancel</Button>} />
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </AlertDialog.Actions>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
