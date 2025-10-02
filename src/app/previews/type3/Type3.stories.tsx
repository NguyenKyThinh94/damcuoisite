import type { Meta, StoryObj } from '@storybook/react';
import Type3 from './Type3';

const meta = {
  title: 'Wedding Templates/Type3',
  component: Type3,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    decoratorType: {
      control: { type: 'select' },
      options: ['type1', 'type2'],
    },
  },
} satisfies Meta<typeof Type3>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = {
  brideName: "Ngọc Ánh",
  groomName: "Minh Khang",
  weddingDate: "15 tháng 12, 2024",
  location: "Hà Nội, Việt Nam",
  hashtag: "#NgocAnhMinhKhang2024",
  heroImage: "https://images.zola.com/07660b47-0cdb-4c0a-9425-ebcc5525de00?w=1000",
  howWeMet: {
    date: "Mùa xuân 2020",
    story: "Chúng tôi gặp nhau lần đầu tại một quán cà phê nhỏ ở phố cổ Hà Nội. Đó là một buổi chiều mùa xuân đẹp trời, ánh nắng vàng rơi qua những tán lá xanh. Từ cái nhìn đầu tiên, chúng tôi đã biết rằng đây chính là người mình đã chờ đợi suốt bao năm qua."
  },
  proposal: {
    date: "Tháng 2, 2024",
    story: "Sau 4 năm bên nhau, anh đã cầu hôn em tại chính nơi chúng ta gặp nhau lần đầu - quán cà phê nhỏ ấy. Với một chiếc nhẫn kim cương và những lời hứa chân thành, anh đã hỏi em: 'Em có muốn cùng anh viết tiếp câu chuyện tình yêu này không?'. Và em đã nói 'Có' với đôi mắt đầy nước mắt hạnh phúc."
  },
  aboutBride: {
    name: "Nguyễn Ngọc Ánh",
    image: "https://images.zola.com/couple-portrait-1.jpg",
    description: "Ánh là một cô gái yêu thích nghệ thuật và thiên nhiên. Với nụ cười rạng rỡ và trái tim ấm áp, cô luôn mang lại niềm vui cho mọi người xung quanh. Ánh đam mê nhiếp ảnh và thích khám phá những địa điểm mới.",
    hobbies: ["Nhiếp ảnh", "Du lịch", "Đọc sách", "Vẽ tranh"],
    favoriteThings: ["Cà phê sáng", "Hoàng hôn", "Hoa tulip", "Âm nhạc acoustic"]
  },
  aboutGroom: {
    name: "Trần Minh Khang",
    image: "https://images.zola.com/couple-portrait-2.jpg", 
    description: "Khang là một chàng trai năng động và có trách nhiệm. Anh luôn quan tâm chăm sóc gia đình và bạn bè. Với tính cách hài hước và lòng tốt, Khang luôn tạo ra tiếng cười và niềm vui cho mọi người.",
    hobbies: ["Bóng đá", "Nấu ăn", "Chơi guitar", "Xem phim"],
    favoriteThings: ["Món phở", "Nhạc rock", "Bóng đá", "Làm bánh"]
  },
  galleryImages: [
    "https://images.zola.com/gallery-1.jpg",
    "https://images.zola.com/gallery-2.jpg",
    "https://images.zola.com/gallery-3.jpg",
    "https://images.zola.com/gallery-4.jpg",
    "https://images.zola.com/gallery-5.jpg",
    "https://images.zola.com/gallery-6.jpg",
    "https://images.zola.com/gallery-7.jpg",
    "https://images.zola.com/gallery-8.jpg",
    "https://images.zola.com/gallery-9.jpg"
  ],
  event: {
    title: "Lễ Cưới Ngọc Ánh & Minh Khang",
    date: "Chủ nhật, 15 tháng 12, 2024",
    time: "10:00 AM",
    venue: "Nhà hàng Golden Palace",
    address: "123 Đường Lê Lợi, Quận Hoàn Kiếm, Hà Nội",
    description: "Chúng tôi rất vui mừng được mời bạn tham dự lễ cưới của chúng tôi. Đây sẽ là ngày đặc biệt nhất trong cuộc đời chúng tôi và chúng tôi muốn chia sẻ niềm hạnh phúc này cùng với những người thân yêu nhất.",
    mapUrl: "https://maps.google.com",
    calendarUrl: "https://calendar.google.com"
  },
  giftRegistry: {
    bride: {
      name: "Nguyễn Ngọc Ánh",
      bankName: "Vietcombank",
      accountNumber: "1234567890",
      accountName: "NGUYEN NGOC ANH",
      qrCode: "https://api.vietqr.io/image/970436-1234567890-compact.jpg"
    },
    groom: {
      name: "Trần Minh Khang", 
      bankName: "Techcombank",
      accountNumber: "0987654321",
      accountName: "TRAN MINH KHANG",
      qrCode: "https://api.vietqr.io/image/970407-0987654321-compact.jpg"
    }
  }
};

export const Default: Story = {
  args: {
    data: sampleData,
    decoratorType: 'type2',
  },
};

export const WithDecorations: Story = {
  args: {
    data: sampleData,
    decoratorType: 'type2',
  },
};
