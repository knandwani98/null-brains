import React from "react";
import { ContainerWrapper } from "../ContainerWrapper";
import { FEATURES } from "@/data/features";

// type Props = {}

export const Features = () => {
  return (
    <section className="text-center max-lg:mt-20">
      <ContainerWrapper className="max-sm:mx-6">
        <h2 className="text-4xl mb-3">
          <strong>Our Features</strong>
        </h2>
        <p>Check out our list of awesome features below.</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col justify-center items-center gap-3 bg-[#f3f5f7] p-12 shadow rounded-sm"
            >
              <div className="size-14 p-4 bg-[#3981f6] rounded-full flex justify-center items-center">
                <feature.icon className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </ContainerWrapper>
    </section>
  );
};
