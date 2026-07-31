import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './radio-group';

const meta: Meta<typeof RadioGroup.Root> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup.Root,
};

export default meta;
type Story = StoryObj<typeof RadioGroup.Root>;

const plans = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
];

export const Default: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="pro">
      {plans.map((plan) => (
        <label
          key={plan.value}
          className="inline-flex items-center gap-2 text-sm font-sans text-ink cursor-pointer"
        >
          <RadioGroup.Item value={plan.value} />
          {plan.label}
        </label>
      ))}
    </RadioGroup.Root>
  ),
};
