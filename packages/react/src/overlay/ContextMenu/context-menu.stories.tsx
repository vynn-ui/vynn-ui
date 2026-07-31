import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from './context-menu';

const meta: Meta<typeof ContextMenu.Root> = {
  title: 'Overlay/ContextMenu',
  component: ContextMenu.Root,
};

export default meta;
type Story = StoryObj<typeof ContextMenu.Root>;

export const Default: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="flex items-center justify-center w-64 h-32 rounded-surface border-control border-border text-sm text-muted">
        Right-click here
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup>
            <ContextMenu.Item>
              <i className="ti ti-edit icon-sm" aria-hidden="true" />
              Edit
            </ContextMenu.Item>
            <ContextMenu.Item>
              <i className="ti ti-copy icon-sm" aria-hidden="true" />
              Duplicate
            </ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item variant="danger">
              <i className="ti ti-trash icon-sm" aria-hidden="true" />
              Delete
            </ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};
