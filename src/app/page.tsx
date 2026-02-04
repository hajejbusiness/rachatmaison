import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Situations from "@/components/Situations";
import Founder from "@/components/Founder";
import HowItWorks from "@/components/HowItWorks";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Situations />
        <Founder />
        <HowItWorks />
        <Advantages />
        <Testimonials />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
