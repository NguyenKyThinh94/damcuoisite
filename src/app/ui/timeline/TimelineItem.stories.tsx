import type { Meta, StoryObj } from '@storybook/react';
import TimelineItem from './TimelineItem';

const meta: Meta<typeof TimelineItem> = {
  title: 'UI/Timeline/TimelineItem',
  component: TimelineItem,
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
        component: 'Component hiển thị timeline item với image, connecting line và text theo hàng ngang.',
      },
    },
  },
  argTypes: {
    time: {
      control: 'text',
      description: 'Timestamp (number) hoặc string',
    },
    image: {
      control: 'text',
      description: 'Đường dẫn ảnh',
    },
    alt: {
      control: 'text',
      description: 'Alt text cho ảnh',
    },
    description: {
      control: 'text',
      description: 'Mô tả sự kiện',
    },
    className: {
      control: 'text',
      description: 'CSS classes bổ sung',
    },
    dateFormat: {
      control: 'select',
      options: ['time', 'monthYear', 'year'],
      description: 'Định dạng hiển thị thời gian',
    },
    reverse: {
      control: 'boolean',
      description: 'Đảo ngược thứ tự (text -> ảnh thay vì ảnh -> text)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story mặc định
export const Default: Story = {
  args: {
    time: new Date('2024-12-25T14:30:00').getTime(),
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding ceremony',
    description: 'Lễ cưới tại nhà thờ',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-12 max-w-6xl">
        <Story />
      </div>
    ),
  ],
};

// Story với mô tả dài
export const LongDescription: Story = {
  args: {
    time: new Date('2024-12-25T18:00:00').getTime(),
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding reception',
    description: 'Tiệc cưới tại khách sạn với gia đình và bạn bè',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-12 max-w-6xl">
        <Story />
      </div>
    ),
  ],
};

// Story với ảnh khác
export const DifferentImage: Story = {
  args: {
    time: new Date('2024-12-25T09:00:00').getTime(),
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding photos',
    description: 'Chụp ảnh cưới tại công viên',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-12 max-w-6xl">
        <Story />
      </div>
    ),
  ],
};

// Story với thứ tự đảo ngược
export const Reversed: Story = {
  args: {
    time: new Date('2024-12-25T16:00:00').getTime(),
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding party',
    description: 'Tiệc mừng với bạn bè',
    reverse: true,
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-12 max-w-6xl">
        <Story />
      </div>
    ),
  ],
};
