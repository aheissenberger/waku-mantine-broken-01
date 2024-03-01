import { Link } from 'waku';

import { Counter } from '../components/counter.js';

export const HomePage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
     
      <Link to="/myuilocal" className="mt-4 inline-block underline">
        MyUI Local (works)
      </Link>
<br/>
      <Link to="/myuipackage" className="mt-4 inline-block underline">
        MyUI Package (broken) - Simulates Mantine Provider Error
      </Link>
    </div>
  );
};

const getData = async () => {
  const data = {
    title: 'Waku Mantine Debugging',
    headline: 'Waku Mantine Debugging'
  };

  return data;
};
