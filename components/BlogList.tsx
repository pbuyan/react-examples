'use client';

import { useEffect, useState } from 'react';

// Define the shape of a blog post from the WordPress API
interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('https://coginov.com/wp-json/wp/v2/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4 p-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-24 rounded bg-gray-200"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded border border-red-200 bg-red-100 p-4 text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="space-y-6 p-4">
      {posts?.map((post) => (
        <article
          key={post.id}
          className="rounded border p-4 shadow-sm transition hover:shadow-md"
        >
          <h2
            className="text-xl font-semibold"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div
            className="prose prose-sm mt-2 max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <a
            href={post.link}
            target="_blank"
            className="mt-3 inline-block text-blue-600 hover:underline"
          >
            Read more →
          </a>
        </article>
      ))}
    </section>
  );
}
