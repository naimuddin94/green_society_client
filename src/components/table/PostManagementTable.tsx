"use client";

import { usePostPremium } from "@/hooks/post.hook";
import { IPost } from "@/types";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import moment from "moment";
import DeleteModal from "../ui/DeleteModal";
import Loading from "../ui/Loading";

interface PostManagementTableProps {
  posts: IPost[];
}

const PostManagementTable = ({ posts }: PostManagementTableProps) => {
  const { mutate: makePremiumFn, isPending } = usePostPremium();

  const handleMakePremium = (id: string) => {
    makePremiumFn(id);
  };

  return (
    <>
      {isPending && <Loading />}
      <Table aria-label="Admin Post Management Table" className="w-full">
        <TableHeader>
          <TableColumn>Author</TableColumn>
          <TableColumn>Time</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Premium</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post._id}>
              <TableCell>{post.author.name}</TableCell>
              <TableCell>{moment(post.updatedAt).fromNow()}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>
                <Checkbox
                  isSelected={post.premium}
                  onChange={() => handleMakePremium(post._id)}
                />
              </TableCell>
              <TableCell className="space-x-2">
                <DeleteModal postId={post._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PostManagementTable;
