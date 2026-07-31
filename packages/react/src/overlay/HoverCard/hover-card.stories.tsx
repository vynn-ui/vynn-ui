import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard } from './hover-card';

const meta: Meta<typeof HoverCard.Root> = {
  title: 'Overlay/HoverCard',
  component: HoverCard.Root,
};

export default meta;
type Story = StoryObj<typeof HoverCard.Root>;

export const Default: Story = {
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger className="text-accent underline cursor-pointer">@vynn-ui</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Positioner>
          <HoverCard.Popup>vynn-ui is a two-theme React component library.</HoverCard.Popup>
        </HoverCard.Positioner>
      </HoverCard.Portal>
    </HoverCard.Root>
  ),
};
