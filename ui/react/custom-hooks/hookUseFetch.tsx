'use client';

import React from 'react';
import useFetch from './useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}
const UseFetch = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data, error, loading } = useFetch<Post[]>(url);

  if (loading) return <p> Liading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.slice(0, 5).map((post: Post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default UseFetch;
