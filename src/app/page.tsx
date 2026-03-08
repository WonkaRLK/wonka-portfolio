import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingChocolates from "@/components/FloatingChocolates";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GoldenTicket from "@/components/GoldenTicket";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <FloatingChocolates />
      <Navbar />
      <Hero />
      <Services id="servicios" />
      <GoldenTicket />
      <Process id="proceso" />
      <TechStack />
      <Projects id="proyectos" />
      <Results id="resultados" />
      <FAQ id="preguntas" />
      <ContactForm id="contacto" />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
