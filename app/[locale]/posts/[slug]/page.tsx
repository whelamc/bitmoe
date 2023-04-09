import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

export function getPostContent(slug: string) {
  const folder = '_posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return {
    ...matterResult,
  };
}

export default function Page(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <div className="m-auto min-h-screen max-w-[900px] md:max-w-[720px] md:min-h-min sm:w-full sm:px-4 sm:min-h-min">
        <div className="py-12 text-gray-900 dark:text-gray-500 sm:pt-4">
          <p className="my-8 text-center text-3xl">{post.data.title}</p>
          <Markdown>{post.content}</Markdown> 
        </div>
      </div>
    </>
  );
}
