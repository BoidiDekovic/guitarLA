import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'

export function meta(){

}

export function links(){

}
export async function loader() {

  const [guitarras,posts] = await Promise.all([
      getGuitarras(),
      getPosts()
  ])

  return{
    guitarras,
    posts
}
} 

function Index() {

  const {guitarras, posts} = useLoaderData();
  console.log(guitarras)
  

  return (
    <div>Index</div>
  )
}

export default Index
