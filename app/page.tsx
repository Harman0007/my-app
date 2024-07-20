import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Customers from "@/components/Customers";
import Pricing from "@/components/Pricing";
import ContactUsSection from "@/components/ContactUsSection";

export default function Home() {
  return(
  <main className="flex flex-col bg-gradient-to-r from-stone-100 to-red-300">
    <Header />
    <Hero />
    <Customers />
    <Pricing />
    <ContactUsSection />
  </main>
  );
}
