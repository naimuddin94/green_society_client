/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, SVGProps } from "react";

export interface IChildrenProps {
  children: ReactNode;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  endContent?: ReactNode;
}

export interface IResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

export interface ISigninData extends IUser {
  accessToken: string;
  refreshToken: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  address?: string;
  phone?: string;
  image?: string;
  followers?: any[];
  following?: any[];
  block?: string[];
  blockedBy?: any[];
  verified?: boolean;
  premium?: boolean;
}

export interface ILayoutProps {
  children: ReactNode;
}

interface IPostUser {
  _id: string;
  name: string;
  image?: string;
}

interface IPostComment {
  _id: string;
  author: IPostUser;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPost {
  _id: string;
  content: string;
  author: IPostUser;
  images: string[];
  category: string;
  premium: boolean;
  like: IPostUser[];
  dislike: IPostUser[];
  comments: IPostComment[];
  createdAt: string;
  updatedAt: string;
  upvotes: number;
}
