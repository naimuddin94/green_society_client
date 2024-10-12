import PostCard from "@/components/module/dashboard/PostCard";
import axiosInstance from "@/lib/axiosInstance";


interface IProps {
  params: { postId: string };
}

const PostDetailsPage = async ({ params }: IProps) => {
  const res = await axiosInstance.get(`/posts/${params.postId}`);

  return (
    <div className="p-5">
      <PostCard post={res.data.data} />
    </div>
  );
};

export default PostDetailsPage;
