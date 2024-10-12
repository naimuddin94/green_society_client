import PostManagementTable from "@/components/table/PostManagementTable";
import Loading from "@/components/ui/Loading";
import { getAllPosts } from "@/services/Post.service";
import { IPost } from "@/types";
import { Suspense } from "react";

const ManagePost = async () => {
  const data = await getAllPosts();

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
