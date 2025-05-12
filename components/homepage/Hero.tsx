import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ContainerWrapper } from "../ContainerWrapper";

// type Props = {};

export const Hero = () => {
  return (
    <section className="py-40 pt-56">
      <ContainerWrapper className="h-full flex flex-col items-center justify-center text-center gap-3">
        <h1 className="text-3xl sm:text-6xl font-bold mb-4 sm:mb-6">
          <strong>
            Start Crafting Your{" "}
            <span className="text-primary block">Next Great Idea</span>
          </strong>
        </h1>

        <p className="text-sm sm:text-base mb-6">
          Simplifying the creation of landing pages, blog pages,
          <br /> application pages and so much more!
        </p>

        <div className="relative">
          <Button className="px-8 py-6 font-semibold text-base">
            Purchase Now
          </Button>

          <Badge variant={"secondary"} className="absolute -top-4 -right-7">
            Only $15/mo
          </Badge>
        </div>

        <Link href={"#"} className="text-sm">
          Learn More
        </Link>
      </ContainerWrapper>
    </section>
  );
};
