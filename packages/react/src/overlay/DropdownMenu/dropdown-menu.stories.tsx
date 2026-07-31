import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './dropdown-menu';
import { Button } from '../../actions/Button';

const meta: Meta<typeof DropdownMenu.Root> = {
  title: 'Overlay/DropdownMenu',
  component: DropdownMenu.Root,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu.Root>;

export const Default: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger render={<Button variant="outline">Actions</Button>} />
      <DropdownMenu.Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Popup>
            <DropdownMenu.Item>
              <i className="ti ti-edit icon-sm" aria-hidden="true" />
              Edit
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <i className="ti ti-copy icon-sm" aria-hidden="true" />
              Duplicate
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item variant="danger">
              <i className="ti ti-trash icon-sm" aria-hidden="true" />
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Popup>
        </DropdownMenu.Positioner>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};
