import {
  Book,
  CircleDollarSign,
  Cog,
  House,
  NotebookTabs,
  Package,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    ,
    {
      label: "Tips",
      href: "/post/tips",
    },
    {
      label: "Community",
      href: "/post/community",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  userSidebarItems: [
    { name: "All", icon: House, route: "/dashboard" },
    { name: "Gardening Tips", icon: Book, route: "/dashboard/tips" },
    { name: "Community", icon: UserRound, route: "/dashboard/community" },
    { name: "My Post", icon: NotebookTabs, route: "/dashboard/my-post" },
    { name: "Settings", icon: Cog, route: "/dashboard/settings" },
  ],
  adminSidebarItems: [
    { name: "All Post", icon: House, route: "/dashboard" },
    { name: "Manage Post", icon: Book, route: "/dashboard/manage-post" },
    {
      name: "Premium Post",
      icon: ShieldCheck,
      route: "/dashboard/premium-post",
    },
    { name: "Package", icon: Package, route: "/dashboard/create-package" },
    { name: "Payment", icon: CircleDollarSign, route: "/dashboard/payment" },
    { name: "Settings", icon: Cog, route: "/dashboard/settings" },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
