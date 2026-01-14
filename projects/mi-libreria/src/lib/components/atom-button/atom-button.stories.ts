import type { Meta, StoryObj } from '@storybook/angular';
import { AtomButton } from './atom-button';

const meta: Meta<AtomButton> = {
  title: 'Atoms/Button',
  component: AtomButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;
type Story = StoryObj<AtomButton>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'solid',
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (args) => ({
    props: args,
    template: `
      <lib-atom-button [label]="label" [variant]="variant">
        <span leftIcon>🚀</span>
      </lib-atom-button>
    `,
  }),
  args: {
    label: 'Launch Project',
    variant: 'solid',
  },
};
