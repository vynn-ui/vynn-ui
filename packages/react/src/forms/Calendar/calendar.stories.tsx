import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Forms/Calendar',
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    return <Calendar selected={selected} onSelect={setSelected} />;
  },
};
