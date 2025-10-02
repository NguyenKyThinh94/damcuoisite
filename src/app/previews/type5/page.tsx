import { getData } from '../getData';
import Type5 from './Type5';

export default async function Type5Page() {
  const data = await getData();
  
  return <Type5 data={data} />;
}
