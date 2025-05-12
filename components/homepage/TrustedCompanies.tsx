import React from "react";
import { ContainerWrapper } from "../ContainerWrapper";
import Image from "next/image";

// type Props = {};

export const TrustedCompanies = () => {
  const COMPANIES_DATA = [
    "disney",
    "google",
    "hub-spot",
    "youtube",
    "slack",
    "shopify",
  ];

  return (
    <section className="text-center">
      <ContainerWrapper className="px-12">
        <h3 className="text-sm mb-4">
          <strong>TRUSTED BY TOP-LEADING COMPANIES.</strong>
        </h3>

        <nav>
          <ul className="flex justify-center items-center sm:gap-8 gap-x-4 max-w-5xl mx-auto max-sm:flex-wrap">
            {COMPANIES_DATA.map((company) => (
              <li key={company} className="flex-1/4">
                <Image
                  className="aspect-square object-contain"
                  src={`/companies/${company}.png`}
                  alt={company}
                  width={1000}
                  height={1000}
                />
              </li>
            ))}
          </ul>
        </nav>
      </ContainerWrapper>
    </section>
  );
};
