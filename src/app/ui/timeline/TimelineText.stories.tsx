import type { Meta, StoryObj } from '@storybook/react';
import TimelineText from './TimelineText';

const meta: Meta<typeof TimelineText> = {
  title: 'UI/Timeline/TimelineText',
  component: TimelineText,
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
        component: 'Component hiển thị thời gian và mô tả cho timeline, gồm 2 dòng.',
      },
    },
  },
  argTypes: {
    time: {
      control: 'text',
      description: 'Timestamp (number) hoặc string',
    },
    description: {
      control: 'text',
      description: 'Mô tả sự kiện (dòng 2)',
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
    sizes: {
      control: 'object',
      description: 'Kích thước text tùy chỉnh {time: string, description: string}',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story mặc định
export const Default: Story = {
  args: {
    time: new Date('2024-12-25T14:30:00').getTime(),
    description: 'Lễ cưới tại nhà thờ',
    dateFormat: 'time',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-12 max-w-lg">
        <Story />
      </div>
    ),
  ],
};

// Story hiển thị tháng + năm
export const MonthYear: Story = {
  args: {
    time: new Date('2024-12-25').getTime(),
    description: 'Tháng cưới hạnh phúc',
    dateFormat: 'monthYear',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-12 max-w-lg">
        <Story />
      </div>
    ),
  ],
};

// Story hiển thị chỉ năm
export const YearOnly: Story = {
  args: {
    time: new Date('2024-12-25').getTime(),
    description: 'Năm chúng tôi kết hôn',
    dateFormat: 'year',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-12 max-w-xl">
        <Story />
      </div>
    ),
  ],
};

// Story với mô tả dài và kích thước nhỏ hơn
export const LongDescription: Story = {
  args: {
    time: new Date('2024-12-25T18:00:00').getTime(),
    description: 'Tiệc cưới tại khách sạn Grand Palace với gia đình, bạn bè thân thiết và đồng nghiệp. Sẽ có nhiều hoạt động thú vị như múa hát, trò chơi và buffet phong phú.',
    dateFormat: 'time',
    sizes: {
      time: 'text-xl',
      description: 'text-lg'
    }
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-12 max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
