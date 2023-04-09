import fs from "fs";
import Link from "@/components/Link"; 
import matter from "gray-matter";
import { PostMetaData } from "@/lib/postMetadata";

export function getPostMetadata(): PostMetaData[] {
  const folder = "_posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`_posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}

export default function Page() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <div key={post.title}>
      <Link href={`/posts/${post.slug}`}>
        <div className="mb-4">
          <p className="mb-2 text-base text-gray-900">
            {index + 1}: {post.title}
          </p>
          <p className="mb-2 text-sm text-gray-500">{post.description || ""}</p>
        </div>
      </Link>
    </div>
  ));
  return (
    <>
      <div className="m-auto min-h-screen max-w-[900px] md:max-w-[720px] md:min-h-min sm:w-full sm:px-4 sm:min-h-min">
        <div className="py-12 sm:pt-4">{postPreviews}</div>
      </div>
    </>
  );
}
