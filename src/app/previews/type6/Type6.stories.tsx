import type { Meta, StoryObj } from '@storybook/react';
import Type6 from './Type6';
import { DataInterface } from '../data.interface';

const meta: Meta<typeof Type6> = {
  title: 'Wedding/Type6',
  component: Type6,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: DataInterface = {
  brideName: "AVIVA",
  groomName: "BENJI", 
  weddingDate: "JULY 13, 2024",
  location: "San Francisco, CA",
  hashtag: "#AvivaAndBenji",
  heroImage: "https://images.zola.com/07660b47-0cdb-4c0a-9425-ebcc5525de00?w=1000",
  backgroundMusic: {
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Wedding Bells"
  },
  storyVideo: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Our Love Story",
    description: "Discover the beautiful journey of how we met, fell in love, and decided to spend our lives together. From our first date to our engagement, every moment has been magical."
  },
  aboutBride: {
    name: "Aviva",
    image: "https://images.zola.com/bride-1.jpg",
    description: "Meet Aviva, a passionate photographer with a love for capturing life's beautiful moments. She brings joy and creativity to everything she does, and her warm heart has touched everyone around her.",
    hobbies: ["Photography", "Travel", "Cooking", "Yoga"],
    favoriteThings: ["Sunsets", "Coffee", "Books", "Dancing"]
  },
  aboutGroom: {
    name: "Benji", 
    image: "https://images.zola.com/groom-1.jpg",
    description: "Meet Benji, a talented musician who can make any room come alive with his guitar. His adventurous spirit and kind heart make him the perfect partner for life's greatest adventure.",
    hobbies: ["Music", "Hiking", "Cooking", "Gaming"],
    favoriteThings: ["Guitar", "Mountains", "Coffee", "Movies"]
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
    title: "Wedding Ceremony & Reception",
    date: "July 13, 2024",
    time: "4:00 PM - 11:00 PM",
    venue: "The Grand Ballroom",
    address: "123 Wedding Lane, San Francisco, CA 94102",
    description: "Join us for an unforgettable evening as we celebrate our love surrounded by family and friends. The ceremony will begin at 4:00 PM followed by cocktails, dinner, and dancing under the stars.",
    mapUrl: "https://maps.google.com",
    calendarUrl: "https://calendar.google.com"
  },
  giftRegistry: {
    bride: {
      name: "Aviva Johnson",
      bankName: "Chase Bank",
      accountNumber: "1234567890",
      accountName: "Aviva Johnson",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=1234567890"
    },
    groom: {
      name: "Benjamin Smith",
      bankName: "Bank of America", 
      accountNumber: "0987654321",
      accountName: "Benjamin Smith",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0987654321"
    }
  }
};

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const WithoutMusic: Story = {
  args: {
    data: {
      ...sampleData,
      backgroundMusic: {
        url: "",
        title: ""
      }
    },
  },
};

export const WithoutVideo: Story = {
  args: {
    data: {
      ...sampleData,
      storyVideo: {
        url: "",
        title: "Our Love Story",
        description: "Video coming soon..."
      }
    },
  },
};

export const MinimalGallery: Story = {
  args: {
    data: {
      ...sampleData,
      galleryImages: [
        "https://images.zola.com/gallery-1.jpg",
        "https://images.zola.com/gallery-2.jpg"
      ]
    },
  },
};
