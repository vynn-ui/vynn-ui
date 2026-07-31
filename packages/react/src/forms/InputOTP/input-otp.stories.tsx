import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputOTP } from './input-otp';

const meta: Meta<typeof InputOTP> = {
  title: 'Forms/InputOTP',
  component: InputOTP,
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <InputOTP length={6} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = { args: { disabled: true, value: '123' } };
