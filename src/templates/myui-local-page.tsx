import { Link } from "waku";
import { MyComponent } from "../components/my/MyComponent.js";
import { MyProvider } from "../components/my/MyProvider.js";

export const MyUILocalPage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <MyProvider theme={{name:'new'}}>
        <MyComponent />
        </MyProvider>
        <Link to="/" className="mt-4 inline-block underline">HOME</Link> | <Link to="/myuipackage" className="mt-4 inline-block underline">MyUI Package broken</Link>
    </div>
  );
};

const getData = async () => {
  const data = {
    title: 'MyUI Local',
    headline: 'MyUI Local',
  };

  return data;
};
