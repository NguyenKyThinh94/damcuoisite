import type { Meta, StoryObj } from '@storybook/react';
import Type2 from './Type2';

const meta: Meta<typeof Type2> = {
  title: 'Previews/BinhThuong/Type2',
  component: Type2,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Wedding website template with blue/purple color scheme. Features the same layout as Type1 but with a different color palette. Data is fetched from the same API endpoint /api/previews.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Wedding data object containing all wedding information',
    },
    decoratorType: {
      control: { type: 'select' },
      options: ['type1', 'type2'],
      description: 'Type of page decoration to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    decoratorType: 'type2',
    data: {
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
        name: "AVIVA LENOFF",
        image: "https://images.zola.com/ab57f490-5561-4f8b-8fbb-9beb39cadb46?w=500",
        description: "Aviva is a passionate designer and artist who loves creating beautiful things. She has a warm heart and infectious laugh that lights up any room. When she's not working on her latest creative project, you can find her exploring new coffee shops or planning her next adventure.",
        hobbies: ["Photography", "Painting", "Cooking", "Hiking", "Reading"],
        favoriteThings: ["Coffee", "Sunsets", "Vintage Books", "Fresh Flowers", "Dancing"]
      },
      aboutGroom: {
        name: "BENJI GABRIEL",
        image: "https://images.zola.com/1787293e-0f3e-469c-be55-c52dd13b5ed4?w=500",
        description: "Benji is a software engineer with a love for music and technology. He's known for his Quick wit, generous spirit, and ability to make anyone feel at home. Whether he's coding the next big thing or strumming his guitar, he approaches everything with passion and dedication.",
        hobbies: ["Guitar Playing", "Coding", "Rock Climbing", "Gaming", "Traveling"],
        favoriteThings: ["Live Music", "Good Wine", "Adventure Sports", "Tech Gadgets", "Karaoke"]
      },
      galleryImages: [
        "https://images.zola.com/0f14b8a8-ea17-40a6-a0cd-5dde20921062?w=500",
        "https://images.zola.com/ab57f490-5561-4f8b-8fbb-9beb39cadb46?w=500",
        "https://images.zola.com/1787293e-0f3e-469c-be55-c52dd13b5ed4?w=500",
        "https://images.zola.com/c9745809-0c7d-4143-a064-a3a9610a74d9?w=500",
        "https://images.zola.com/e8e663f9-e94b-4cf7-8432-b23cb5d124a4?w=500",
        "https://images.zola.com/4d47a172-8f95-46ce-addb-16b448c8cca6?w=500",
        "https://images.zola.com/d17b5d05-ddff-4afc-aa6f-e7f5bedad42e?w=500",
        "https://images.zola.com/6f582e02-937a-4dee-a140-ed65af0d9c53?w=500",
        "https://images.zola.com/caa69165-a090-4299-816e-e7fdc7722b71?w=500"
      ],
      event: {
        title: "CEREMONY & RECEPTION",
        date: "SATURDAY, JULY 13, 2024",
        time: "5:30 PM - 11:00 PM",
        venue: "Palace of Fine Arts Theatre",
        address: "3301 Lyon St, San Francisco, CA 94123",
        description: "Join us for our wedding ceremony followed by dinner, drinks and dancing! The grass can be a little soft, so you might want to rethink stilettos. There's an outdoor space that can get a little chilly at night—we recommend bringing a shawl or light jacket.",
        mapUrl: "https://www.google.com/maps/place/Palace+of+Fine+Arts+Theatre,+3301+Lyon+St,+San+Francisco,+CA+94123",
        calendarUrl: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Aviva & Benji Wedding')}&dates=20240713T173000/20240713T230000&details=${encodeURIComponent('Join us for our wedding ceremony and reception at Palace of Fine Arts Theatre')}&location=${encodeURIComponent('Palace of Fine Arts Theatre, 3301 Lyon St, San Francisco, CA 94123')}`
      },
      giftRegistry: {
        bride: {
          name: "AVIVA LENOFF",
          bankName: "ACB Bank",
          accountNumber: "20844897",
          accountName: "LENOFF AVIVA",
          qrCode: "https://img.vietqr.io/image/970416-20844897-compact2.png?amount=0&addInfo=Wedding%20Gift%20for%20Aviva"
        },
        groom: {
          name: "BENJI GABRIEL",
          bankName: "ACB Bank", 
          accountNumber: "20844897",
          accountName: "GABRIEL BENJI",
          qrCode: "https://img.vietqr.io/image/970416-20844897-compact2.png?amount=0&addInfo=Wedding%20Gift%20for%20Benji"
        }
      }
    }
  },
};

export const WithDecorations: Story = {
  args: {
    ...Default.args,
    decoratorType: 'type2',
  },
};
