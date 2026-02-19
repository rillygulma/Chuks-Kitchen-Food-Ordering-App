import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ChefsSpecials from "@/components/ChefsSpecials";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ChefsSpecials />
      <PromoBanner />
    </>
  );
}
