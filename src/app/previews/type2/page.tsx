import { getData } from '../getData';
import Type2 from './Type2';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  
  const title = `Timeline Blue - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Template Đám Cưới'} | damcuoi.site`;
  const description = `Phong cách timeline hiện đại với màu xanh dương và tím, kể câu chuyện tình yêu ${data.brideName && data.groomName ? `của ${data.brideName} & ${data.groomName}` : ''}. ${data.weddingDate ? `Ngày cưới: ${data.weddingDate}` : ''} ${data.location ? `- ${data.location}` : ''}`.trim();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: data.heroImage || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=630&fit=crop&auto=format',
          width: 1200,
          height: 630,
          alt: `Timeline Blue Wedding Template - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Preview'}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [data.heroImage || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=630&fit=crop&auto=format'],
    },
  };
}

// Server Component - fetches data at build time
export default async function Type2Preview() {
  const data = await getData();

  // Pass data to client component for rendering
  return <Type2 data={data} />;
}
