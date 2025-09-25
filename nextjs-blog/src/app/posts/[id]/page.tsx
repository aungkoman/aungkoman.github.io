import { getAllPostIds, getPostData } from '../../../../lib/posts.ts';

export async function generateStaticParams() {
  const allPostIds = getAllPostIds();
  return allPostIds.map((id) => ({
    id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}