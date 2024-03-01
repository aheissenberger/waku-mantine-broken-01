import { MyProvider } from 'myui';
import { MyUIComponent } from '../components/MyUIComponent.js';
import { Link } from 'waku/router/client';
export const MyUIPackagePage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <MyProvider theme={{name:'new'}}>
        <MyUIComponent />
        </MyProvider>
        <Link to="/" className="mt-4 inline-block underline">HOME</Link> | <Link to="/myuilocal" className="mt-4 inline-block underline">MyUI Local</Link>
    </div>
  );
};

const getData = async () => {
  const data = {
    title: 'MyUI Package',
    headline: 'MyUI Package',
  };

  return data;
};
