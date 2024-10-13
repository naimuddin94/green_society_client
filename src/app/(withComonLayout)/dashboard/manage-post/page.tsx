import PostManagementTable from "@/components/table/PostManagementTable";
import { getAllPosts } from "@/services/Post.service";
import { IPost } from "@/types";

const ManagePost = async () => {
  const data = await getAllPosts();

  const posts: IPost[] = data.data.result;

  return (
    <div className="p-5">
      <h1 className="my-5 text-lg font-semibold">Post Management</h1>
      <PostManagementTable posts={posts} />
    </div>
  );
};

export default ManagePost;
