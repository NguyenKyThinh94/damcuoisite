import { getData } from '../getData';
import Type11 from './Type11';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  
  const title = `Modern Compact - ${data.brideName && data.groomName ? `${data.brideName} & ${data.groomName}` : 'Ví Dụ Đám Cưới'} | damcuoi.site`;
  const description = `Thiết kế compact, nhanh tải, tối ưu hoàn toàn cho thiết bị di động. ${data.weddingDate ? `Ngày cưới: ${data.weddingDate}` : ''}`.trim();

  return {
    title,
    description,
  };
}

export default async function Type11Preview() {
  const data = await getData();
  return <Type11 data={data} />;
}
