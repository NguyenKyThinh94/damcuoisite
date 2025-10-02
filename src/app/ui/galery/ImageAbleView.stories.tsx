import type { Meta, StoryObj } from '@storybook/react';
import ImageAbleView from './ImageAbleView';

const meta: Meta<typeof ImageAbleView> = {
  title: 'UI/Gallery/ImageAbleView',
  component: ImageAbleView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    width: {
      control: 'number',
      description: 'Width of the regular image',
    },
    height: {
      control: 'number',
      description: 'Height of the regular image',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onPrevious: {
      action: 'onPrevious',
      description: 'Function called when previous button is clicked',
    },
    onNext: {
      action: 'onNext',
      description: 'Function called when next button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic image without navigation
export const BasicImage: Story = {
  args: {
    src: '/next.svg',
    alt: 'Sample image',
    width: 200,
    height: 200,
    className: '',
  },
};

// Image with navigation buttons
export const WithNavigation: Story = {
  args: {
    src: '/vercel.svg',
    alt: 'Image with navigation',
    width: 250,
    height: 250,
    className: '',
    onPrevious: () => console.log('Previous clicked'),
    onNext: () => console.log('Next clicked'),
  },
};

// Large image with custom styling
export const LargeImageWithStyle: Story = {
  args: {
    src: '/globe.svg',
    alt: 'Large styled image',
    width: 300,
    height: 300,
    className: 'border-4 border-gray-300 shadow-lg',
    onPrevious: () => console.log('Previous clicked'),
    onNext: () => console.log('Next clicked'),
  },
};
