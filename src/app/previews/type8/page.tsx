import { getData } from '../getData';
import Type8 from './Type8';

export default async function Type8Page() {
  const data = await getData();
  
  return <Type8 data={data} />;
}
