import type { Meta, StoryObj } from '@storybook/react';
import TimelineImage from './TimelineImage';

const meta: Meta<typeof TimelineImage> = {
  title: 'UI/Timeline/TimelineImage',
  component: TimelineImage,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
      },
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        component: 'Component hiển thị ảnh với thời gian cho timeline, có thể tùy chỉnh styling.',
      },
    },
  },
  argTypes: {
    image: {
      control: 'text',
      description: 'Đường dẫn ảnh',
    },
    alt: {
      control: 'text',
      description: 'Alt text cho ảnh',
    },
    className: {
      control: 'text',
      description: 'CSS classes bổ sung',
    },
    tilt: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Hướng nghiêng của ảnh',
    },
    width: {
      control: { type: 'range', min: 200, max: 500, step: 50 },
      description: 'Độ rộng của ảnh',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story mặc định
export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Coffee shop meeting',
    tilt: 'right',
    width: 300,
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8">
        <Story />
      </div>
    ),
  ],
};

// Story nghiêng trái
export const TiltLeft: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Coffee shop meeting',
    tilt: 'left',
    width: 300,
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8">
        <Story />
      </div>
    ),
  ],
};

// Story kích thước nhỏ
export const SmallSize: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Coffee shop meeting',
    tilt: 'right',
    width: 200,
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8">
        <Story />
      </div>
    ),
  ],
};

// Story kích thước lớn
export const LargeSize: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Coffee shop meeting',
    tilt: 'left',
    width: 400,
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 p-8">
        <Story />
      </div>
    ),
  ],
};
