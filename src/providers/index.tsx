"use client";

import UserProvider from "@/context/user.provider";
import { IChildrenProps } from "@/types";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export default function Providers({ children }: IChildrenProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster />
        <NextUIProvider>{children}</NextUIProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
