import type { Meta, StoryObj } from '@storybook/react';
import BannerText from './BannerText';

const meta: Meta<typeof BannerText> = {
  title: 'UI/BannerText',
  component: BannerText,
  parameters: {
    layout: 'fullscreen',
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
        component: 'Component hiển thị thông tin cưới trong banner với tên cô dâu, chú rể và ngày cưới.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['simple', 'withAddress', 'single'],
      description: 'Loại hiển thị banner text',
    },
    brideName: {
      control: 'text',
      description: 'Tên cô dâu',
    },
    groomName: {
      control: 'text',
      description: 'Tên chú rể',
    },
    groomWeddingDate: {
      control: 'text',
      description: 'Ngày cưới nhà trai',
    },
    brideWeddingDate: {
      control: 'text',
      description: 'Ngày cưới nhà gái',
    },
    className: {
      control: 'text',
      description: 'CSS classes bổ sung',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story mặc định
export const Default: Story = {
  args: {
    type: 'withAddress',
    brideName: 'Minh Anh',
    groomName: 'Văn Thịnh',
    groomWeddingDate: 'Thứ Bảy, 15 tháng 06 năm 2024 (tức ngày 10 tháng 5 năm Giáp Thìn) tại 123 Đường ABC, Quận 1, TP.HCM',
    brideWeddingDate: 'Chủ Nhật, 16 tháng 06 năm 2024 (tức ngày 11 tháng 5 năm Giáp Thìn) tại 456 Đường XYZ, Quận 2, TP.HCM',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

// Story với background ảnh
export const WithBackground: Story = {
  args: {
    type: 'withAddress',
    brideName: 'Thu Hương',
    groomName: 'Minh Đức',
    groomWeddingDate: 'Thứ Hai, 20 tháng 05 năm 2024 tại Nhà hàng Âm Phủ, 789 Đường DEF, Hà Nội',
    brideWeddingDate: 'Thứ Ba, 21 tháng 05 năm 2024 tại Trung tâm Hội nghị XYZ, 101 Đường GHI, Hà Nội',
  },
  decorators: [
    (Story) => (
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

// Story với type simple
export const Simple: Story = {
  args: {
    type: 'simple',
    brideName: 'Mai Linh',
    groomName: 'Quốc Anh',
    groomWeddingDate: '15/06/2024 - 10:00 AM',
    brideWeddingDate: '16/06/2024 - 6:00 PM',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

// Story với type single
export const Single: Story = {
  args: {
    type: 'single',
    brideName: 'Hồng Nhung',
    groomName: 'Minh Tuấn',
    groomWeddingDate: '', // Không cần thiết cho type single
    brideWeddingDate: '', // Không cần thiết cho type single
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

// Story với tên ngắn
export const ShortNames: Story = {
  args: {
    brideName: 'Lan',
    groomName: 'Nam',
    groomWeddingDate: 'Thứ Sáu, 12/07/2024 - 8:00 AM',
    brideWeddingDate: 'Thứ Bảy, 13/07/2024 - 6:00 PM',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

// Story với tên dài
export const LongNames: Story = {
  args: {
    brideName: 'Nguyễn Thị Hồng Nhung',
    groomName: 'Trần Văn Quốc Huy',
    groomWeddingDate: 'Thứ Bảy, ngày 25 tháng 12 năm 2024 (tức ngày 25 tháng 11 năm Giáp Thìn) lúc 10:00 sáng tại Nhà hàng Paradise, số 123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
    brideWeddingDate: 'Chủ Nhật, ngày 26 tháng 12 năm 2024 (tức ngày 26 tháng 11 năm Giáp Thìn) lúc 18:00 chiều tại Trung tâm Tiệc cưới Golden Palace, số 456 Đường Lê Lợi, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-bl from-amber-900 via-orange-900 to-red-900 flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

// Story mobile view
export const Mobile: Story = {
  args: {
    brideName: 'Phương',
    groomName: 'Dũng',
    groomWeddingDate: '15/08/2024 - 9:00 AM\nNhà hàng Riverside',
    brideWeddingDate: '16/08/2024 - 7:00 PM\nTrung tâm Hội nghị ABC',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-t from-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

// Story với custom styling
export const CustomStyling: Story = {
  args: {
    brideName: 'Tú Anh',
    groomName: 'Hoàng Long',
    groomWeddingDate: 'Thứ Hai, 01/01/2025',
    brideWeddingDate: 'Thứ Ba, 02/01/2025',
    className: 'drop-shadow-2xl',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};
