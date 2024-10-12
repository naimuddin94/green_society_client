import { redirect } from "next/navigation";
import PostCard from "@/components/module/dashboard/PostCard";
import { envConfig } from "@/config";
import { getCurrentUser } from "@/services/AuthService";
import { IPost } from "@/types";

const MyPostPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/signin?redirect=dashboard/my-post");
  }

  const res = await fetch(`${envConfig.api_host}/posts?author=${user?._id}`, {
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
      <div>
        {data.data.result.map((post: IPost) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MyPostPage;
