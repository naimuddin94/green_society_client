"use server";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

import axiosInstance from "../lib/axiosInstance";

export const addPost = async (postData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/posts", postData);

    if (data?.success) {
      revalidateTag("posts");
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deletePost = async (postId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/posts/${postId}`);

    if (data?.success) {
      revalidateTag(`post-${postId}`);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addComment = async (postId: string, content: string) => {
  try {
    const { data } = await axiosInstance.post(`/comments/${postId}`, {
      content,
    });

    if (data?.success) {
      revalidateTag(`post-${postId}`);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteComment = async (commentId: string, postId: string) => {
  try {
    const { data } = await axiosInstance.delete(
      `/comments/comment/${commentId}`,
    );

    if (data?.success) {
      revalidateTag(`post-${postId}`);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addPostReaction = async (postData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/posts/reaction", postData);

    if (data?.success) {
      revalidateTag(`post-${postData.postId}`);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const makePremium = async (postId: string) => {
  try {
    const { data } = await axiosInstance.patch(`/posts/premium/${postId}`);

    if (data?.success) {
      revalidateTag(`post-${postId}`);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
