import PostPreview from "./post-preview";
import { Heading } from "../styledcomps/heading";
import { Posts } from "@/.velite";

interface PostItemProps {
  posts: Posts[];
}

export default function PostItem({ posts }: PostItemProps) {
  return (
    <section>
      <Heading size="xl" variant="sectiontitle">
        Blog Posts
      </Heading>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post: Posts, index: React.Key) => (
          <PostPreview
            key={index}
            slugAsParams={post.slugAsParams}
            draft={post.draft}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            body={post.body}
          /> 
        ))}
      </div>
    </section>
  );
}
