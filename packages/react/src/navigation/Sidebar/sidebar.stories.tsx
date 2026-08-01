import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './sidebar';

const meta: Meta<typeof Sidebar.Root> = {
  title: 'Navigation/Sidebar',
  component: Sidebar.Root,
};

export default meta;
type Story = StoryObj<typeof Sidebar.Root>;

export const Default: Story = {
  render: () => (
    <Sidebar.Root>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupLabel>General</Sidebar.GroupLabel>
          <Sidebar.GroupItems>
            <Sidebar.Item href="#" active>
              <i className="ti ti-home icon-sm" aria-hidden="true" />
              Overview
            </Sidebar.Item>
            <Sidebar.Item href="#">
              <i className="ti ti-settings icon-sm" aria-hidden="true" />
              Settings
            </Sidebar.Item>
          </Sidebar.GroupItems>
        </Sidebar.Group>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Team</Sidebar.GroupLabel>
          <Sidebar.GroupItems>
            <Sidebar.Item href="#">
              <i className="ti ti-users icon-sm" aria-hidden="true" />
              Members
            </Sidebar.Item>
          </Sidebar.GroupItems>
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar.Root>
  ),
};
