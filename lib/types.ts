import { LucideIcon } from "lucide-react";

export interface INavData {
  href: string;
  title?: string;
  icon?: LucideIcon;
}
export interface IAdvantage {
  title: string;
  description: string;
  features: string[];
}

export interface IFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ITeam {
  name: string;
  designation: string;
  githubUrl: string;
  twitterUrl: string;
  bgHex?: string;
}

export interface IBlog {
  title: string;
  description: string;
  category: string;
  bgHex?: string;
}
