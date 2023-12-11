import { Card } from '@/shared/components';
import React from 'react'
type Post = {
  id: number,
  title:string
}
const getPosts = async (): Promise<Post[]> => {
  const data = await fetch("https://fakestoreapi.com/products");
  const posts = await data.json();
  return posts;
};
export default async function Products() {
    const posts = await getPosts();

  return (
    <div>Products   
        {posts?.map((post) => (
          <Card key={post.id} title={post.title} src="" description='' />
        ))}
    </div>
  )
}

