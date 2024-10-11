// 1. import `NextUIProvider` component
import { IChildrenProps } from "@/types";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }: IChildrenProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
