import { getData } from '../getData';
import Type1 from './Type1';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  
  const title = `Classic Peachy - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Template Đám Cưới'} | damcuoi.site`;
  const description = `Thiết kế cổ điển với tone màu cam đào ấm áp cho đám cưới ${data.brideName && data.groomName ? `của ${data.brideName} & ${data.groomName}` : 'truyền thống'}. ${data.weddingDate ? `Ngày cưới: ${data.weddingDate}` : ''} ${data.location ? `- ${data.location}` : ''}`.trim();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: data.heroImage || 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=630&fit=crop&auto=format',
          width: 1200,
          height: 630,
          alt: `Classic Peachy Wedding Template - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Preview'}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [data.heroImage || 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=630&fit=crop&auto=format'],
    },
  };
}

// Server Component - fetches data at build time
export default async function Type1Preview() {
  const data = await getData();

  // Pass data to client component for rendering
  return <Type1 data={data} />;
}
         