export interface DataInterface {
  brideName?: string;
  groomName?: string;
  weddingDate?: string;
  location?: string;
  hashtag?: string;
  heroImage?: string;
  howWeMet?: {
    date: string;
    story: string;
  };
  proposal?: {
    date: string;
    story: string;
  };
  aboutBride?: {
    name: string;
    image: string;
    description: string;
    hobbies: string[];
    favoriteThings: string[];
  };
  aboutGroom?: {
    name: string;
    image: string;
    description: string;
    hobbies: string[];
    favoriteThings: string[];
  };
  galleryImages?: string[];
  event?: {
    title: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    description: string;
    mapUrl: string;
    calendarUrl: string;
  };
  giftRegistry?: {
    bride: {
      name: string;
      bankName: string;
      accountNumber: string;
      accountName: string;
      qrCode: string;
    };
    groom: {
      name: string;
      bankName: string;
      accountNumber: string;
      accountName: string;
      qrCode: string;
    };
  };
}
