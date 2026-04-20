import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Store } from "@/components/sections/Store";
import { About } from "@/components/sections/About";
import { Intelligence } from "@/components/sections/Intelligence";
import { Products } from "@/components/sections/Products";
import { Innovation } from "@/components/sections/Innovation";
import { Experience } from "@/components/sections/Experience";
import { Voices } from "@/components/sections/Voices";
import { GetStarted } from "@/components/sections/GetStarted";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Store />
        <About />
        <Intelligence />
        <Products />
        <Innovation />
        <Experience />
        <Voices />
        <GetStarted />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
