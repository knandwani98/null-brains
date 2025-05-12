import React from "react";
import { ContainerWrapper } from "../ContainerWrapper";
import { TEAM } from "@/data/team";
import { ITeam } from "@/lib/types";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// type Props = {};

export const OurTeam = () => {
  return (
    <section className="my-28 max-w-6xl mx-auto">
      <ContainerWrapper className="max-sm:mx-6">
        <h3 className="uppercase text-sky-400 font-normal">Our Team</h3>
        <h2 className="text-5xl my-4 max-sm:text-2xl">
          <strong>
            An incredible team of <br /> amazing individuals
          </strong>
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 my-12">
          {TEAM.map((person: ITeam) => (
            <li
              key={person.name}
              className="text-center flex flex-col items-center justify-center"
            >
              <div
                style={{
                  backgroundColor: `rgba(${person.bgHex},0.25)`,
                }}
                className={cn(`rounded-full rounded-tr-none p-4 mb-3`)}
              >
                <Image
                  src={`/team/${person.name
                    .toLowerCase()
                    .split(" ")
                    .join("-")}.jpg`}
                  alt={person.name}
                  height={1000}
                  width={1000}
                  className="rounded-full"
                />
              </div>

              <h2 className="font-semibold">{person.name}</h2>
              <p className="font-semibold mb-2 text-sky-500">
                {person.designation}
              </p>

              <div className="flex justify-center items-center gap-3">
                <Link href="/">
                  <Twitter className="text-secondary-foreground/40 hover:text-secondary-foreground" />
                </Link>

                <Link href="/">
                  <Github className="text-secondary-foreground/40 hover:text-secondary-foreground" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </ContainerWrapper>
    </section>
  );
};
