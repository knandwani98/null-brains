import React from "react";
import { ContainerWrapper } from "../ContainerWrapper";
import { ADVANTAGES } from "@/data/advantages";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RectangleVertical } from "lucide-react";
import { IAdvantage } from "@/lib/types";

// type Props = {};

export const Advantages = () => {
  return (
    <section className="max-w-4xl mx-auto lg:py-28">
      <ContainerWrapper className="max-sm:mx-4">
        {ADVANTAGES.map((advantage: IAdvantage, i) => (
          <article
            key={advantage.title}
            className={cn(
              "flex justify-center items-center gap-8 lg:gap-28 my-8 max-sm:flex-wrap",
              i % 2 === 0 && "flex-row-reverse"
            )}
          >
            <div className="flex-4/6 lg:flex-1/3">
              <h2 className="text-2xl">
                <strong>{advantage.title}</strong>
              </h2>
              <p className="my-4 mb-8">{advantage.description}</p>
              <ul>
                {advantage.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex justify-start items-center gap-4 my-2"
                  >
                    <div className="flex justify-center items-center rounded-full bg-[#fecf2f] p-1.5">
                      <RectangleVertical className="size-3 text-primary-foreground" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              className="w-full flex-2/6 lg:flex-1/3 shrink"
              src={`/advantages/${advantage.title
                .toLowerCase()
                .split(" ")
                .join("-")}.webp`}
              alt={advantage.title}
              width={1000}
              height={1000}
            />
          </article>
        ))}
      </ContainerWrapper>
    </section>
  );
};
