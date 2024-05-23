import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import YouTube from "@/components/YouTube";
import Twitter from "@/components/Twitter";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
          {post.twitterId && <Twitter id={post.twitterId} />}
          {post.youtubeId && <YouTube id={post.youtubeId} />}
        </article>
      ))}
    </div>
  );
}
