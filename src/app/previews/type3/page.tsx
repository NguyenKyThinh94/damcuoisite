import Type3 from './Type3';
import { getData } from '../getData';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  
  const title = `Botanical Green - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Template Đám Cưới'} | damcuoi.site`;
  const description = `Thiết kế botanical với tone màu xanh lá cây, tươi mới và tự nhiên ${data.brideName && data.groomName ? `cho đám cưới của ${data.brideName} & ${data.groomName}` : ''}. ${data.weddingDate ? `Ngày cưới: ${data.weddingDate}` : ''} ${data.location ? `- ${data.location}` : ''}`.trim();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: data.heroImage || 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=1200&h=630&fit=crop&auto=format',
          width: 1200,
          height: 630,
          alt: `Botanical Green Wedding Template - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Preview'}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [data.heroImage || 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=1200&h=630&fit=crop&auto=format'],
    },
  };
}

export default async function Type3Page() {
  const data = await getData();

  return <Type3 data={data} decoratorType="type2" />;
}
