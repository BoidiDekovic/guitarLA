import { useLoaderData } from '@remix-run/react';


export default function Index() {

  const { guitarras, posts } = useLoaderData();
  console.log(guitarras);
  console.log(posts);

  return (
    <div>Index</div>
  );
}
