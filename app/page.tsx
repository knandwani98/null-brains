import Footer from "@/components/Footer";
import { Advantages } from "@/components/homepage/Advantages";
import { Blogs } from "@/components/homepage/Blogs";
import { Features } from "@/components/homepage/Features";
import { Hero } from "@/components/homepage/Hero";
import { OurTeam } from "@/components/homepage/OurTeam";
import { TrustedCompanies } from "@/components/homepage/TrustedCompanies";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedCompanies />
      <Advantages />
      <Features />
      <OurTeam />
      <Blogs />
      <Footer />
    </main>
  );
}
