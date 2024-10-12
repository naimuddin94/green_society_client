import AddPost from "@/components/module/dashboard/AddPost";
import PostCard from "@/components/module/dashboard/PostCard";
import { getAllPosts } from "@/services/Post.service";
import { IPost } from "@/types";

const DashboardPage = async () => {
  const data = await getAllPosts();
  return (
    <div className="container px-5">
      <AddPost />
      <div>
        {data.data.result.map((post: IPost) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
