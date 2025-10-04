import type { Meta, StoryObj } from '@storybook/react';
import Type7 from './Type7';
import { DataInterface } from '../data.interface';

const meta: Meta<typeof Type7> = {
  title: 'Wedding/Type7',
  component: Type7,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: DataInterface = {
  brideName: "THÚY LINH",
  groomName: "MINH ĐỨC",
  weddingDate: "13 THÁNG 7, 2024",
  location: "Hà Nội, Việt Nam",
  hashtag: "#ThuyLinhMinhDuc",
  heroImage: "https://images.zola.com/07660b47-0cdb-4c0a-9425-ebcc5525de00?w=1000",
  backgroundMusic: {
    url: "https://www.bensound.com/bensound-music/bensound-romantic.mp3",
    title: "Romantic Wedding Music"
  },
  storyVideo: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Câu chuyện tình yêu của chúng tôi",
    description: "Hành trình tình yêu từ lúc gặp nhau đến khi quyết định về chung một nhà"
  },
  aboutBride: {
    name: "Thúy Linh",
    image: "https://images.zola.com/bride-1.jpg",
    description: "Cô gái hiền dịu, thông minh với nụ cười tỏa nắng. Linh luôn mang đến niềm vui và sự ấm áp cho mọi người xung quanh.",
    hobbies: ["Đọc sách", "Du lịch", "Nấu ăn", "Yoga", "Nhiếp ảnh"],
    favoriteThings: ["Hoàng hôn", "Cà phê", "Hoa sen", "Âm nhạc classical"]
  },
  aboutGroom: {
    name: "Minh Đức",
    image: "https://images.zola.com/groom-1.jpg",
    description: "Chàng trai lãng mạn, có trách nhiệm với đam mê công nghệ. Đức luôn quan tâm và che chở cho những người mình yêu thương.",
    hobbies: ["Lập trình", "Đá bóng", "Đọc sách", "Chơi guitar"],
    favoriteThings: ["Công nghệ", "Núi non", "Cà phê đen", "Phim khoa học viễn tưởng"]
  },
  galleryImages: [
    "https://images.zola.com/gallery-1.jpg",
    "https://images.zola.com/gallery-2.jpg",
    "https://images.zola.com/gallery-3.jpg",
    "https://images.zola.com/gallery-4.jpg",
    "https://images.zola.com/gallery-5.jpg",
    "https://images.zola.com/gallery-6.jpg",
    "https://images.zola.com/gallery-7.jpg",
    "https://images.zola.com/gallery-8.jpg"
  ],
  event: {
    title: "Lễ cưới và Tiệc cưới",
    date: "13 tháng 7, 2024",
    time: "17:00 - 22:00",
    venue: "Trung tâm Tiệc cưới Paradise",
    address: "123 Đường Láng, Đống Đa, Hà Nội",
    description: "Hãy cùng chúng tôi tạo nên một buổi tối khó quên với những khoảnh khắc đẹp nhất. Lễ cưới sẽ bắt đầu lúc 17:00, sau đó là tiệc cưới với những món ăn ngon và âm nhạc sôi động.",
    mapUrl: "https://maps.google.com",
    calendarUrl: "https://calendar.google.com"
  },
  giftRegistry: {
    bride: {
      name: "Nguyễn Thúy Linh",
      bankName: "Vietcombank",
      accountNumber: "1234567890123456",
      accountName: "Nguyen Thuy Linh",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=1234567890123456"
    },
    groom: {
      name: "Trần Minh Đức",
      bankName: "Techcombank",
      accountNumber: "6543210987654321",
      accountName: "Tran Minh Duc",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=6543210987654321"
    }
  }
};

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const WithMinimalData: Story = {
  args: {
    data: {
      ...sampleData,
      aboutBride: {
        name: "Thúy Linh",
        image: "https://images.zola.com/bride-1.jpg",
        description: "Cô gái hiền dịu, thông minh với nụ cười tỏa nắng.",
        hobbies: ["Đọc sách", "Du lịch"],
        favoriteThings: ["Cà phê", "Hoa"]
      },
      aboutGroom: {
        name: "Minh Đức",
        image: "https://images.zola.com/groom-1.jpg",
        description: "Chàng trai lãng mạn, có trách nhiệm với đam mê công nghệ.",
        hobbies: ["Lập trình", "Đá bóng"],
        favoriteThings: ["Công nghệ", "Cà phê"]
      },
      galleryImages: [
        "https://images.zola.com/gallery-1.jpg",
        "https://images.zola.com/gallery-2.jpg",
        "https://images.zola.com/gallery-3.jpg",
        "https://images.zola.com/gallery-4.jpg"
      ]
    },
  },
};

export const DifferentNames: Story = {
  args: {
    data: {
      ...sampleData,
      brideName: "MAI LINH",
      groomName: "HOÀNG NAM",
      hashtag: "#MaiLinhHoangNam",
      aboutBride: {
        name: "Mai Linh",
        image: "https://images.zola.com/bride-1.jpg",
        description: "Cô gái hiền dịu, thông minh với nụ cười tỏa nắng.",
        hobbies: ["Đọc sách", "Du lịch", "Nấu ăn", "Yoga", "Nhiếp ảnh"],
        favoriteThings: ["Hoàng hôn", "Cà phê", "Hoa sen", "Âm nhạc classical"]
      },
      aboutGroom: {
        name: "Hoàng Nam",
        image: "https://images.zola.com/groom-1.jpg", 
        description: "Chàng trai lãng mạn, có trách nhiệm với đam mê công nghệ.",
        hobbies: ["Lập trình", "Đá bóng", "Đọc sách", "Chơi guitar"],
        favoriteThings: ["Công nghệ", "Núi non", "Cà phê đen", "Phim khoa học viễn tưởng"]
      }
    },
  },
};
