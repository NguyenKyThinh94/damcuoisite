import type { Meta, StoryObj } from '@storybook/react';
import TimelineItemMobile from './TimelineItemMobile';

const meta: Meta<typeof TimelineItemMobile> = {
  title: 'UI/Timeline/TimelineItemMobile',
  component: TimelineItemMobile,
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
      },
      defaultViewport: 'mobile',
    },
    docs: {
      description: {
        component: 'Component timeline item được tối ưu cho thiết bị di động với khả năng mở rộng khi click.',
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
    description: 'Lễ cưới tại nhà thờ với gia đình và bạn bè thân thiết',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 max-w-sm">
        <Story />
      </div>
    ),
  ],
};

// Story với format tháng/năm
export const MonthYear: Story = {
  args: {
    time: new Date('2024-12-25').getTime(),
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding reception',
    description: 'Tiệc cưới tại khách sạn với buffet phong phú và nhiều hoạt động vui nhộn',
    dateFormat: 'monthYear',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 max-w-sm">
        <Story />
      </div>
    ),
  ],
};

// Story với format năm
export const YearOnly: Story = {
  args: {
    time: new Date('2024-12-25').getTime(),
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    alt: 'Wedding photos',
    description: 'Năm chúng tôi kết hôn - một năm đầy ý nghĩa và hạnh phúc',
    dateFormat: 'year',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 max-w-sm">
        <Story />
      </div>
    ),
  ],
};
