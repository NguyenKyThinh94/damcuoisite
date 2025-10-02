import { getData } from '../getData';
import Type6 from './Type6';

export default async function Type6Page() {
  const data = await getData();
  
  return <Type6 data={data} />;
}
