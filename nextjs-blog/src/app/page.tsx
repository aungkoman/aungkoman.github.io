import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts.ts';

interface PostData {
  id: string;
  date: string;
  title: string;
}

export default function Home() {
  const allPostsData: PostData[] = getSortedPostsData();
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            {new Date(date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
