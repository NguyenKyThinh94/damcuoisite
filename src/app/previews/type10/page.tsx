import { getData } from '../getData';
import Type10 from './Type10';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  
  const title = `Minimal Clean - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Ví Dụ Đám Cưới'} | damcuoi.site`;
  const description = `Thiết kế tối giản, sạch sẽ, mobile-first cho đám cưới hiện đại. ${data.weddingDate ? `Ngày cưới: ${data.weddingDate}` : ''}`.trim();

  return {
    title,
    description,
  };
}

export default async function Type10Preview() {
  const data = await getData();
  return <Type10 data={data} />;
}
