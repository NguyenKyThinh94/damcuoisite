import type { Meta, StoryObj } from '@storybook/react';
import Type8 from './Type8';
import { DataInterface } from '../data.interface';

const meta: Meta<typeof Type8> = {
  title: 'Previews/Type8',
  component: Type8,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '812px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type8>;

const mockData: DataInterface = {
  brideName: "Aviva",
  groomName: "Benji",
  weddingDate: "July 13, 2024",
  location: "San Francisco, CA",
  hashtag: "#AvivaAndBenji",
  heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  aboutBride: {
    name: "Aviva Chen",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    description: "Một cô gái yêu thích nghệ thuật và thiên nhiên. Aviva luôn tìm kiếm vẻ đẹp trong những điều giản dị của cuộc sống và tin rằng tình yêu là nguồn cảm hứng vô tận.",
    hobbies: ["Nhiếp ảnh", "Yoga", "Nấu ăn", "Du lịch", "Đọc sách"],
    favoriteThings: ["Cà phê buổi sáng", "Hoàng hôn biển", "Hoa lavender", "Âm nhạc acoustic", "Phim tài liệu"]
  },
  aboutGroom: {
    name: "Benjamin Park",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    description: "Một lập trình viên đam mê công nghệ và thể thao. Benjamin yêu thích khám phá những công nghệ mới và luôn sẵn sàng cho những cuộc phiêu lưu cùng người mình yêu.",
    hobbies: ["Lập trình", "Leo núi", "Chơi guitar", "Xe đạp", "Game"],
    favoriteThings: ["Café espresso", "Gadget mới", "Phim sci-fi", "Âm nhạc rock", "Sách tech"]
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  event: {
    title: "Lễ Cưới",
    date: "13 tháng 7, 2024",
    time: "16:00 - 20:00",
    venue: "Golden Gate Park",
    address: "Golden Gate Park, San Francisco, CA 94117",
    description: "Chúng tôi rất vui mừng được mời bạn đến dự lễ cưới của chúng tôi. Đây sẽ là một buổi tiệc ngoài trời tuyệt vời với view nhìn ra biển và không gian xanh mát.",
    mapUrl: "https://maps.google.com/maps?q=Golden+Gate+Park,+San+Francisco,+CA",
    calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Aviva+and+Benji+Wedding&dates=20240713T160000/20240713T200000&location=Golden+Gate+Park,+San+Francisco,+CA"
  },
  giftRegistry: {
    bride: {
      name: "Aviva Chen",
      bankName: "Vietcombank",
      accountNumber: "1234567890123",
      accountName: "CHEN AVIVA",
      qrCode: "https://images.unsplash.com/photo-1582554819403-3fde10269fe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    groom: {
      name: "Benjamin Park",
      bankName: "Techcombank",
      accountNumber: "9876543210987",
      accountName: "PARK BENJAMIN",
      qrCode: "https://images.unsplash.com/photo-1582554819403-3fde10269fe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  }
};

export const Desktop: Story = {
  args: {
    data: mockData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const Mobile: Story = {
  args: {
    data: mockData,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const TikTokStyle: Story = {
  args: {
    data: {
      ...mockData,
      heroImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
