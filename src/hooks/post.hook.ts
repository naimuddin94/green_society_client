/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  addComment,
  addPost,
  addPostReaction,
  deleteComment,
  deletePost,
  makePremium,
} from "../services/Post.service";

// AddPost Hook
export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["AddPost"],
    mutationFn: async (postData) => await addPost(postData),
    onSuccess: (data) => {
      toast.success(data?.message);

      // Correctly invalidate the query with the posts key
      queryClient.refetchQueries({ queryKey: ["posts"], type: "active" });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// DeletePost Hook
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationKey: ["AddComment"],
    mutationFn: async (postId) => await deletePost(postId),
    onSuccess: (data, variables) => {
      toast.success(data?.message);

      // Correctly invalidate the specific post query
      queryClient.refetchQueries({
        queryKey: ["posts", variables],
        type: "active",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// AddComment Hook
export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, { postId: string; content: string }>({
    mutationKey: ["AddComment"],
    mutationFn: async ({ postId, content }) =>
      await addComment(postId, content),
    onSuccess: (data, variables) => {
      toast.success(data?.message);

      // Correctly invalidate the specific post query
      queryClient.refetchQueries({
        queryKey: ["posts", variables.postId],
        type: "active",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// DeleteComment Hook
export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, { commentId: string; postId: string }>({
    mutationKey: ["AddComment"],
    mutationFn: async ({ commentId, postId }) =>
      await deleteComment(commentId, postId),
    onSuccess: (data, variables) => {
      toast.success(data?.message);

      // Correctly invalidate the specific post query
      queryClient.refetchQueries({
        queryKey: ["posts", variables.postId],
        type: "active",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// AddPostReaction Hook
export const usePostReaction = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["AddReaction"],
    mutationFn: async (reactionData) => await addPostReaction(reactionData),
    onSuccess: (data, variables) => {
      toast.success(data?.message);

      // Correctly invalidate the specific post's reactions
      queryClient.refetchQueries({
        queryKey: ["posts", variables.postId],
        type: "active",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// Make premium
export const usePostPremium = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationKey: ["makePremium"],
    mutationFn: async (postId) => await makePremium(postId),
    onSuccess: (data, variables) => {
      // Correctly invalidate the specific post's reactions
      queryClient.refetchQueries({
        queryKey: ["posts", variables],
        type: "active",
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
