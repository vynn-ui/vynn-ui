import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './combobox';

const meta: Meta<typeof Combobox.Root> = {
  title: 'Forms/Combobox',
  component: Combobox.Root,
};

export default meta;
type Story = StoryObj<typeof Combobox.Root>;

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'sveltekit', label: 'SvelteKit' },
];

export const Default: Story = {
  render: () => (
    <Combobox.Root items={frameworks}>
      <div className="w-64">
        <Combobox.Input placeholder="Search framework..." />
      </div>
      <Combobox.Portal>
        <Combobox.Positioner>
          <Combobox.Popup>
            <Combobox.Empty>No results</Combobox.Empty>
            <Combobox.List>
              {(item: (typeof frameworks)[number]) => (
                <Combobox.Item key={item.value} value={item.value}>
                  {item.label}
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  ),
};
