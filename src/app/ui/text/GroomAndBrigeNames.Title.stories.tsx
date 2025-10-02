import type { Meta, StoryObj } from '@storybook/react';
import GroomAndBrideNames from './GroomAndBrigeNames.Title';

const meta: Meta<typeof GroomAndBrideNames> = {
  title: 'UI/Text/GroomAndBrideNames',
  component: GroomAndBrideNames,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    groomName: {
      control: 'text',
      description: 'Name of the groom',
    },
    brideName: {
      control: 'text',
      description: 'Name of the bride',
    },
    separator: {
      control: 'text',
      description: 'Text between the names',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    groomName: 'John',
    brideName: 'Jane',
    separator: ' & ',
    className: 'text-4xl font-bold text-center text-gray-800',
  },
};
