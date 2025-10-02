import type { Meta, StoryObj } from '@storybook/react';
import Type4 from './Type4';

// Mock data for Storybook
const mockData = {
  brideName: "AVIVA",
  groomName: "BENJI",
  weddingDate: "JULY 13, 2024",
  location: "San Francisco, CA",
  hashtag: "#AvivaAndBenji",
  heroImage: "https://images.zola.com/07660b47-0cdb-4c0a-9425-ebcc5525de00?w=1000",
  howWeMet: {
    date: "4.23.19",
    story: "We met at a classmate's party and didn't think much of it. Then a bunch of us went to karaoke after a long day of back-to-back classes and we both picked, \"I'd Do Anything for Love.\" And it just clicked. He went low, I went high. There were fist pumps. We harmonized by accident. That's pretty much when we thought, \"Okay. This could be something.\""
  },
  proposal: {
    date: "4.23.22", 
    story: "On the anniversary of when we first met, we went back to our old stomping grounds to do karaoke with friends. When \"I'd Do Anything for Love\" came on, we ran up to the front. When the music suddenly died down, I looked over and he was down on one knee. I screamed, shouted \"YES,\" and we were engaged."
  },
  aboutBride: {
    name: "Aviva Scott",
    image: "https://images.zola.com/bride-photo.jpg",
    description: "Aviva is a creative soul with a passion for art and design. She loves exploring new places, trying different cuisines, and spending time with loved ones.",
    hobbies: ["Photography", "Cooking", "Hiking", "Reading"],
    favoriteThings: ["Coffee", "Sunsets", "Music", "Travel"]
  },
  aboutGroom: {
    name: "Benji Chen",
    image: "https://images.zola.com/groom-photo.jpg", 
    description: "Benji is a tech enthusiast who enjoys building things and solving problems. He's always up for an adventure and loves making people laugh.",
    hobbies: ["Programming", "Gaming", "Basketball", "Movies"],
    favoriteThings: ["Pizza", "Sci-fi", "Dogs", "Board games"]
  },
  galleryImages: [
    "https://images.zola.com/gallery1.jpg",
    "https://images.zola.com/gallery2.jpg", 
    "https://images.zola.com/gallery3.jpg",
    "https://images.zola.com/gallery4.jpg",
    "https://images.zola.com/gallery5.jpg",
    "https://images.zola.com/gallery6.jpg",
    "https://images.zola.com/gallery7.jpg",
    "https://images.zola.com/gallery8.jpg",
    "https://images.zola.com/gallery9.jpg"
  ],
  event: {
    title: "Wedding Ceremony & Reception",
    date: "July 13, 2024",
    time: "4:00 PM",
    venue: "Golden Gate Park",
    address: "123 Park Ave, San Francisco, CA 94102",
    description: "Join us for our wedding ceremony followed by dinner and dancing under the stars.",
    mapUrl: "https://maps.google.com/...",
    calendarUrl: "https://calendar.google.com/..."
  },
  giftRegistry: {
    bride: {
      name: "Aviva Scott",
      bankName: "Chase Bank",
      accountNumber: "1234567890",
      accountName: "Aviva Scott",
      qrCode: "https://images.zola.com/qr-bride.png"
    },
    groom: {
      name: "Benji Chen", 
      bankName: "Bank of America",
      accountNumber: "0987654321",
      accountName: "Benji Chen",
      qrCode: "https://images.zola.com/qr-groom.png"
    }
  }
};

const meta: Meta<typeof Type4> = {
  title: 'Wedding Templates/Type4',
  component: Type4,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Type4 wedding template with modern minimalist design featuring rose/pink color scheme. This template offers elegant typography, clean layouts, and sophisticated visual elements perfect for contemporary wedding invitations and websites.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockData,
  },
};

export const WithMockData: Story = {
  args: {
    data: mockData,
  },
};
