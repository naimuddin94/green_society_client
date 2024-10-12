import { Suspense } from "react";
import AddPost from "./_components/AddPost";
import PostCard from "./_components/PostCard";

import { envConfig } from "@/config";
import { IPost } from "@/types";
import Loading from "@/components/ui/Loading";

const PostPage = async () => {
  const res = await fetch(`${envConfig.api_host}/posts`, {
    next: {
      tags: ["posts"],
    },
  });

  if (!res.ok) {
    return <div>Failed to load posts</div>;
  }

  const data = await res.json();

  return (
    <div className="container px-5">
      <Suspense fallback={<Loading />}>
        <AddPost />
      </Suspense>
      <div>
        {data.data.result.map((post: IPost) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
