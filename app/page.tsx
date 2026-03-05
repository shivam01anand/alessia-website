import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import ServicesPreview from "@/components/ServicesPreview";
import FeaturedWork from "@/components/FeaturedWork";
import Credibility from "@/components/Credibility";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <ServicesPreview />
      <FeaturedWork />
      <Credibility />
      <ContactCTA />
    </>
  );
}
