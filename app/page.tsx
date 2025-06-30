import Header from "./components/Header";
import AboutSection from "./HomeComponents/AboutSection";
import EstimateSection from "./HomeComponents/ClientsSection";
import Hero from "./HomeComponents/Hero";
import MethodologyPreSection from "./HomeComponents/MethodologyPreSection";


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <AboutSection />
    <EstimateSection />
    <MethodologyPreSection />
    </>
  );
}
