import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select.Root> = {
  title: 'Forms/Select',
  component: Select.Root,
};

export default meta;
type Story = StoryObj<typeof Select.Root>;

const countries = [
  { value: 'id', label: 'Indonesia' },
  { value: 'sg', label: 'Singapore' },
  { value: 'my', label: 'Malaysia' },
];

export const Default: Story = {
  render: () => (
    <Select.Root defaultValue="id">
      <Select.Trigger className="w-64">
        <Select.Value placeholder="Select a country..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            {countries.map((c) => (
              <Select.Item key={c.value} value={c.value}>
                <Select.ItemText>{c.label}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  ),
};
