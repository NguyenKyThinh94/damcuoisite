import type { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banners/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['type1', 'type2', 'type3', 'type4', 'type5'],
      description: 'Banner type to render',
    },
    brideName: {
      control: 'text',
      description: 'Name of the bride',
    },
    groomName: {
      control: 'text',
      description: 'Name of the groom',
    },
    groomWeddingDate: {
      control: 'text',
      description: 'Wedding date for groom\'s family',
    },
    brideWeddingDate: {
      control: 'text',
      description: 'Wedding date for bride\'s family (optional)',
    },
    backgroundImage: {
      control: 'text',
      description: 'Background image URL',
    },
    title: {
      control: 'text',
      description: 'Save the date text',
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  brideName: 'Sarah Johns',
  groomName: 'John Smith',
  groomWeddingDate: '15.12.2024',
  brideWeddingDate: '20.12.2024',
  backgroundImage: 'https://iili.io/Kl04Tu9.jpg',
  title: 'Save the Date'
};

export const Type1: Story = {
  args: {
    ...defaultArgs,
    type: 'type1',
  },
};
