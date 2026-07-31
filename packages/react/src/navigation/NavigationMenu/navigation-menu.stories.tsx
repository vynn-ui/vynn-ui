import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from './navigation-menu';

const meta: Meta<typeof NavigationMenu.Root> = {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenu.Root,
};

export default meta;
type Story = StoryObj<typeof NavigationMenu.Root>;

export const Default: Story = {
  render: () => (
    <NavigationMenu.Root>
      <NavigationMenu.Link href="#" active>
        Overview
      </NavigationMenu.Link>
      <NavigationMenu.Link href="#">Docs</NavigationMenu.Link>
      <NavigationMenu.Link href="#">Pricing</NavigationMenu.Link>
      <NavigationMenu.Link href="#">Blog</NavigationMenu.Link>
    </NavigationMenu.Root>
  ),
};
