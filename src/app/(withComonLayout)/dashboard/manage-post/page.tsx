import PostManagementTable from "@/components/table/PostManagementTable";
import Loading from "@/components/ui/Loading";
import { envConfig } from "@/config";
import { IPost } from "@/types";
import { Suspense } from "react";

const ManagePost = async () => {
  const res = await fetch(`${envConfig.api_host}/posts`, {
    next: {
      tags: ["posts"],
    },
  });

  if (!res.ok) {
    return <div>Failed to load posts</div>;
  }

  const data = await res.json();

  const posts: IPost[] = data.data.result;

  return (
    <div className="p-5">
      <h1 className="my-5 text-lg font-semibold">Post Management</h1>
      <Suspense fallback={<Loading />}>
        <PostManagementTable posts={posts} />
      </Suspense>
    </div>
  );
};

export default ManagePost;
