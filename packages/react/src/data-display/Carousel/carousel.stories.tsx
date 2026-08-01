import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Data Display/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Carousel
        items={[1, 2, 3].map((n) => (
          <div key={n} className="h-40 flex items-center justify-center text-lg text-ink bg-subtle">
            Slide {n}
          </div>
        ))}
      />
    </div>
  ),
};
