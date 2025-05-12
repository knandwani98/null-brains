import { INavData } from "../lib/types";
import { Dribbble, Github, Instagram, Twitter, Facebook } from "lucide-react";

export const HEADER_NAV_DATA: INavData[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const FOOTER_NAV_DATA: INavData[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },

  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Terms",
    href: "/terms",
  },
];

export const SOCIAL_NAV_DATA: INavData[] = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },

  {
    title: "Twitter",
    href: "https://x.com/",
    icon: Twitter,
  },
  {
    title: "Github",
    href: "https://github.com/",
    icon: Github,
  },
  {
    title: "Dribble",
    href: "https://dribbble.com/",
    icon: Dribbble,
  },
];
