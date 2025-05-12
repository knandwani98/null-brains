import React from "react";
import { ContainerWrapper } from "../ContainerWrapper";
import { BLOGS } from "@/data/blogs";
import Image from "next/image";
import { IBlog } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

// type Props = {}

export const Blogs = () => {
  return (
    <section className="bg-accent">
      <ContainerWrapper className="!max-w-5xl max-lg:mx-6 py-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          <strong>The Project Blog</strong>
        </h2>
        <p className="text-lg sm:text-xl py-4">
          Designs and layouts to help you with your app.
        </p>

        {/* TOP 3 BLOGS */}
        <ul className="sm:flex justify-center items-end gap-8 my-8">
          {BLOGS.slice(0, 3).map((blog: IBlog, id: number) => (
            <li
              key={blog.title}
              style={{
                backgroundColor: blog.bgHex,
              }}
              className={cn(
                "rounded-sm sm:rounded-lg flex-1 max-sm:my-8",
                id % 2 !== 0 && "overflow-hidden"
              )}
            >
              <Image
                className="w-full aspect-square object-cover"
                src={`/blogs/${blog.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}.jpg`}
                width={1000}
                height={1000}
                alt={blog.title}
              />
              <div className={cn("p-4 relative", id % 2 !== 0 ? "p-8" : "")}>
                <Badge
                  className="bg-primary-foreground absolute -top-2.5 uppercase text-[8px]"
                  style={{
                    color: blog.bgHex,
                  }}
                >
                  {blog.category}
                </Badge>
                <h2 className="text-4xl font-bold text-primary-foreground ">
                  {blog.title}
                </h2>
                <p className="py-4 text-primary-foreground text-base">
                  {blog.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* BOTTOM 3 BLOGS */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-8">
          {BLOGS.slice(3, 6).map((blog: IBlog) => (
            <li
              key={blog.title}
              className={cn(
                "rounded-sm sm:rounded-lg bg-primary-foreground shadow overflow-hidden"
              )}
            >
              <Image
                className="w-full aspect-video object-cover"
                src={`/blogs/${blog.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}.jpg`}
                width={1000}
                height={1000}
                alt={blog.title}
              />

              <div className={cn("px-4 py-4 relative")}>
                <Badge
                  className="absolute -top-2.5 uppercase text-[8px]"
                  style={{
                    backgroundColor: blog.bgHex,
                  }}
                >
                  {blog.category}
                </Badge>
                <h2 className="text-base font-bold">{blog.title}</h2>
                <p className="text-xs py-1 text-secondary-foreground/50">
                  {blog.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </ContainerWrapper>
    </section>
  );
};
