import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./HomeComponents/AboutSection";
import CaseStudies from "./HomeComponents/CaseStudies";
import EstimateSection from "./HomeComponents/ClientsSection";
import Hero from "./HomeComponents/Hero";
import LeadChange from "./HomeComponents/LeadChange";
import MethodologyPreSection from "./HomeComponents/MethodologyPreSection";
import Services from "./HomeComponents/Services";


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <AboutSection />
    <EstimateSection />
    <MethodologyPreSection />
    <Services />
    <CaseStudies />
    <LeadChange />
    <Footer />
    </>
  );
}
