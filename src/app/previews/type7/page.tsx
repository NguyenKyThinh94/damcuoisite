import { getData } from '../getData';
import Type7 from './Type7';

export default async function Type7Page() {
  const data = await getData();
  
  return <Type7 data={data} />;
}
