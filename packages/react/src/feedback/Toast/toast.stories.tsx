import type { Meta, StoryObj } from '@storybook/react';
import { Toast, useToastManager } from './toast';
import { Button } from '../../actions/Button';

const meta: Meta<typeof Toast.Provider> = {
  title: 'Feedback/Toast',
  component: Toast.Provider,
};

export default meta;
type Story = StoryObj<typeof Toast.Provider>;

function ToastDemo() {
  const toastManager = useToastManager();
  return (
    <Button
      variant="primary"
      onClick={() =>
        toastManager.add({
          title: 'Changes saved',
          description: 'Your profile has been updated.',
        })
      }
    >
      Show toast
    </Button>
  );
}

export const Default: Story = {
  render: () => (
    <Toast.Provider>
      <ToastDemo />
      <Toast.Viewport>
        <Toast.Root tone="success">
          <Toast.Icon />
          <Toast.Content>
            <Toast.Title>Changes saved</Toast.Title>
            <Toast.Description>Your profile has been updated.</Toast.Description>
          </Toast.Content>
          <Toast.Close />
        </Toast.Root>
      </Toast.Viewport>
    </Toast.Provider>
  ),
};
