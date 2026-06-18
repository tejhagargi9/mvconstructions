import HeroSection from "./components/HeroSection";
import CompaniesSection from "./components/CompaniesSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactCTASection from "./components/ContactCTASection";

export default function HomePage() {
  return (
    <main className="bg-[#FAFAF8] text-[#0F172A]">
      <HeroSection />
      <CompaniesSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactCTASection />
    </main>
  );
}