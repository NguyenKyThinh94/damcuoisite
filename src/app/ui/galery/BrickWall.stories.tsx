import type { Meta, StoryObj } from '@storybook/react';
import BrickWall from './BrickWall';

const meta: Meta<typeof BrickWall> = {
  title: 'UI/Gallery/BrickWall',
  component: BrickWall,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    images: {
      control: 'object',
      description: 'Array of images to display in the brick wall',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    columns: {
      control: { type: 'select' },
      options: [2, 3, 4, 5],
      description: 'Number of columns in the brick wall layout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample images data
const sampleImages = [
  { src: 'https://picsum.photos/300/200?random=1', alt: 'Random Image 1', width: 300, height: 200 },
  { src: 'https://picsum.photos/300/150?random=2', alt: 'Random Image 2', width: 300, height: 150 },
  { src: 'https://picsum.photos/300/300?random=3', alt: 'Random Image 3', width: 300, height: 300 },
  { src: 'https://picsum.photos/300/250?random=4', alt: 'Random Image 4', width: 300, height: 250 },
  { src: 'https://picsum.photos/300/180?random=5', alt: 'Random Image 5', width: 300, height: 180 },
  { src: 'https://picsum.photos/300/220?random=6', alt: 'Random Image 6', width: 300, height: 220 },
];

const manyImages = [
  ...sampleImages,
  { src: 'https://picsum.photos/300/160?random=7', alt: 'Random Image 7', width: 300, height: 160 },
  { src: 'https://picsum.photos/300/280?random=8', alt: 'Random Image 8', width: 300, height: 280 },
  { src: 'https://picsum.photos/300/240?random=9', alt: 'Random Image 9', width: 300, height: 240 },
  { src: 'https://picsum.photos/300/190?random=10', alt: 'Random Image 10', width: 300, height: 190 },
  { src: 'https://picsum.photos/300/210?random=11', alt: 'Random Image 11', width: 300, height: 210 },
  { src: 'https://picsum.photos/300/170?random=12', alt: 'Random Image 12', width: 300, height: 170 },
];

// Default 3-column layout
export const Default: Story = {
  args: {
    images: sampleImages,
    columns: 3,
    className: 'p-4',
  },
};

// 2-column layout for mobile
export const TwoColumns: Story = {
  args: {
    images: sampleImages,
    columns: 2,
    className: 'p-4',
  },
};

// 4-column layout for large screens
export const FourColumns: Story = {
  args: {
    images: manyImages,
    columns: 4,
    className: 'p-4',
  },
};

// Many images with 5 columns
export const ManyImages: Story = {
  args: {
    images: manyImages,
    columns: 5,
    className: 'p-4',
  },
};

// Minimal example with few images
export const MinimalGallery: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/300/200?random=13', alt: 'Image 1', width: 300, height: 200 },
      { src: 'https://picsum.photos/300/150?random=14', alt: 'Image 2', width: 300, height: 150 },
      { src: 'https://picsum.photos/300/300?random=15', alt: 'Image 3', width: 300, height: 300 },
    ],
    columns: 3,
    className: 'p-6 bg-gray-50',
  },
};
