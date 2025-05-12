import { INavData } from "@/lib/types";
import { FOOTER_NAV_DATA, SOCIAL_NAV_DATA } from "@/data/navlink";
import Link from "next/link";
import React from "react";
import { ContainerWrapper } from "./ContainerWrapper";

// type Props = {}

const Footer = () => {
  return (
    <footer className="py-12 bg-accent">
      <ContainerWrapper className="max-sm:mx-6">
        <nav>
          <ul className="flex justify-center items-center gap-4 sm:gap-10">
            {FOOTER_NAV_DATA.map((menu: INavData) => (
              <li key={menu.title}>
                <Link
                  href={menu.href}
                  className="opacity-50 hover:opacity-100 hover:text-primary font-normal"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="my-8">
          <ul className="flex justify-center items-center gap-4 sm:gap-6">
            {SOCIAL_NAV_DATA.map((menu: INavData) => (
              <li key={menu.title}>
                <Link href={menu.href} target="_blank">
                  {!!menu.icon ? (
                    <menu.icon className="opacity-50 hover:opacity-100 hover:text-primary size-5" />
                  ) : (
                    menu.title
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="opacity-50 text-center">
          &copy; 2021 SomeCompany, Inc. All rights reserved.
        </p>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
