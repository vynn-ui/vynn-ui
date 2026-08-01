import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './accordion';

const meta: Meta<typeof Accordion.Root> = {
  title: 'Data Display/Accordion',
  component: Accordion.Root,
};

export default meta;
type Story = StoryObj<typeof Accordion.Root>;

export const Default: Story = {
  render: () => (
    <Accordion.Root defaultValue={['item-1']} className="w-96">
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger>What is vynn-ui?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>A two-theme React component library.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.Trigger>Which themes are supported?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>Classic and Neobrutalism.</Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  ),
};
