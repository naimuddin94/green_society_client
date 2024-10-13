import { fontSans } from "@/config/fonts";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import Providers from "@/providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Green Society",
  description: "Gardening Tips & Advice Platform",
  icons: {
    icon: "favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />
      <body className={clsx("font-sans bg-background", fontSans.variable)}>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
