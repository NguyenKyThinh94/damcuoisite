import { getData } from '../getData';
import Type4 from './Type4';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  
  const title = `Minimalist Rose - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Template Đám Cưới'} | damcuoi.site`;
  const description = `Phong cách tối giản hiện đại với màu hồng rose, thanh lịch và tinh tế ${data.brideName && data.groomName ? `cho đám cưới của ${data.brideName} & ${data.groomName}` : ''}. ${data.weddingDate ? `Ngày cưới: ${data.weddingDate}` : ''} ${data.location ? `- ${data.location}` : ''}`.trim();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: data.heroImage || 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=630&fit=crop&auto=format',
          width: 1200,
          height: 630,
          alt: `Minimalist Rose Wedding Template - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Preview'}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [data.heroImage || 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=630&fit=crop&auto=format'],
    },
  };
}

export default async function Type4Page() {
  const data = await getData();
  
  return <Type4 data={data} />;
}
