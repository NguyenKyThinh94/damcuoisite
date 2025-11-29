import { getData } from '../getData';
import Type9 from './Type9';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  
  const title = `Modern Simple - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Ví Dụ Đám Cưới'} | damcuoi.site`;
  const description = `Thiết kế đơn giản, hiện đại, tối ưu cho mobile cho đám cưới ${data.brideName && data.groomName ? `của ${data.brideName} & ${data.groomName}` : ''}. ${data.weddingDate ? `Ngày cưới: ${data.weddingDate}` : ''} ${data.location ? `- ${data.location}` : ''}`.trim();

  return {
    title,
    description,
  };
}

export default async function Type9Preview() {
  const data = await getData();
  return <Type9 data={data} />;
}
