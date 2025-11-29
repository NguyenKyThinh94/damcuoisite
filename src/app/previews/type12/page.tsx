import { getData } from '../getData';
import Type12 from './Type12';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  
  const title = `Sweet & Simple - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Ví Dụ Đám Cưới'} | damcuoi.site`;
  const description = `Thiết kế ngọt ngào, đơn giản, đẹp mắt trên mobile. Hoàn hảo cho cặp đôi yêu thích sự thanh lịch. ${data.weddingDate ? `Ngày cưới: ${data.weddingDate}` : ''}`.trim();

  return {
    title,
    description,
  };
}

export default async function Type12Preview() {
  const data = await getData();
  return <Type12 data={data} />;
}
