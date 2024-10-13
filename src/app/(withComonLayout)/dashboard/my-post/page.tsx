import PostCard from "@/components/module/dashboard/PostCard";
import { getCurrentUser } from "@/services/AuthService";
import { IPost } from "@/types";
import { redirect } from "next/navigation";

const MyPostPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/signin?redirect=dashboard/my-post");
  }

  const res = await fetch(
    `https://green-society-backend.vercel.app/api/v1/posts?author=${user?._id}`,
    {
      next: {
        tags: ["posts"],
      },
    }
  );

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
