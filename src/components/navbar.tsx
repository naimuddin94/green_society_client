"use client";

import { SearchIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useUser } from "@/context/user.provider";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Button, Input } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import Image from "next/image";
import { default as Link, default as NextLink } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const pathname = usePathname();
  const router = useRouter();

  const { user } = useUser();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 text-current no-underline"
            href="/"
          >
            <Image src="./logo.png" alt="Logo image" width={80} height={80} />
            <p className="font-bold text-inherit text-lg">Green Society</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        {user?.email ? (
          <NavbarItem className="hidden md:flex">
            <NavbarDropdown />
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden md:flex">
            <Button onClick={() => router.push("/signin")}>Sign In</Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`${
                  pathname === item?.href && "text-primary"
                } no-underline text-current`}
                href={item?.href || "#"}
              >
                {item?.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
