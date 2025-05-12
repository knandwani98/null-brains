"use client";

import { HEADER_NAV_DATA } from "@/data/navlink";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

// type Props = {}

export const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="h-screen backdrop-blur-sm px-4 my-8">
      <ul className="flex flex-col items-center justify-center gap-6">
        {HEADER_NAV_DATA.map((nav) => (
          <li key={nav.title} className="text-right text-xl">
            <Link
              href={`${nav.href}`}
              className={cn(pathname === nav.href ? "text-primary" : "")}
            >
              {nav.title}
            </Link>
          </li>
        ))}

        <Link href={"/sign-in"} className="text-xl">
          Sign in
        </Link>

        <Link href={"/sign-up"} className="text-xl w-full">
          <Button className="text-xl w-full py-6">Sign up</Button>
        </Link>
      </ul>
    </nav>
  );
};
