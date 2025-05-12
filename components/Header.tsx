"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ContainerWrapper } from "./ContainerWrapper";
import { CirclePlus, Menu, Search } from "lucide-react";
import { HEADER_NAV_DATA } from "@/data/navlink";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// type HeaderProps = {};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 backdrop-blur-sm bg-primary-foreground/50 z-10">
      <ContainerWrapper className="flex justify-between items-center py-4 border-b px-4">
        <Link href={"/"}>
          <strong className="text-xl">
            nullBrains<span className="text-primary">.</span>
          </strong>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex justify-center items-center gap-8">
            {HEADER_NAV_DATA.map((menu) => (
              <li key={menu.title}>
                <Link
                  href={`${menu.href}`}
                  className={cn(pathname === menu.href ? "text-primary" : "")}
                >
                  {menu.title}
                </Link>
              </li>
            ))}

            <li>
              <Link href={"/search"}>
                <Search className="size-5" />
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="flex justify-center items-center gap-6">
          <Link href={"/sign-in"} className="max-sm:hidden">
            Sign in
          </Link>

          <Link href={"/sign-up"} className="">
            <Button size={"lg"} className="max-sm:hidden">
              Sign up
            </Button>
          </Link>

          {!isMenuOpen ? (
            <Menu
              onClick={() => setIsMenuOpen(true)}
              role="button"
              className="max-lg:block hidden"
            />
          ) : (
            <CirclePlus
              onClick={() => setIsMenuOpen(false)}
              role="button"
              className="rotate-45 max-lg:block hidden"
            />
          )}
        </nav>
      </ContainerWrapper>
    </header>
  );
};
