import type { Meta, StoryObj } from '@storybook/react';
import Timeline from './LoveStory';

const meta: Meta<typeof Timeline> = {
  title: 'Component/LoveStory',
  component: Timeline,
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
        component: 'Component hiển thị danh sách các timeline items theo thứ tự thời gian.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Danh sách các timeline items',
    },
    className: {
      control: 'text',
      description: 'CSS classes bổ sung',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Data mẫu cho wedding timeline
const weddingTimelineData = [
  {
    time: new Date('2024-12-25T09:00:00').getTime(),
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding preparation',
    description: 'Chuẩn bị và trang điểm',
    dateFormat: 'time' as const,
  },
  {
    time: new Date('2024-12-25T14:30:00').getTime(),
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding ceremony',
    description: 'Lễ cưới tại nhà thờ',
    dateFormat: 'time' as const,
  },
  {
    time: new Date('2024-12-25T18:00:00').getTime(),
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding reception',
    description: 'Tiệc cưới tại khách sạn',
    dateFormat: 'time' as const,
  },
];

// Story mặc định
export const Default: Story = {
  args: {
    items: weddingTimelineData,
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 max-w-7xl">
        <Story />
      </div>
    ),
  ],
};

// Story với định dạng tháng/năm
export const MonthYearFormat: Story = {
  args: {
    items: [
      {
        time: new Date('2024-01-15').getTime(),
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        alt: 'Engagement',
        description: 'Lễ đính hôn',
        dateFormat: 'monthYear',
      },
      {
        time: new Date('2024-12-25').getTime(),
        image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        alt: 'Wedding',
        description: 'Lễ cưới',
        dateFormat: 'monthYear',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 max-w-7xl">
        <Story />
      </div>
    ),
  ],
};

// Story với một item
export const SingleItem: Story = {
  args: {
    items: [
      {
        time: new Date('2024-12-25T14:30:00').getTime(),
        image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        alt: 'Wedding ceremony',
        description: 'Lễ cưới tại nhà thờ',
        dateFormat: 'time',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 max-w-7xl">
        <Story />
      </div>
    ),
  ],
};
