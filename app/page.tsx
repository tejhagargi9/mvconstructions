import HeroSection from "./components/HeroSection";
import CompaniesSection from "./components/CompaniesSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactCTASection from "./components/ContactCTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structural Engineering Consultancy",
  description: "Expert structural engineering consultation for safe, economical, and code-compliant construction across Pune and North Karnataka.",
  openGraph: {
    title: "MV Constructions - Structural Engineering Consultancy",
    description: "Providing reliable structural engineering expertise to ensure safety, durability, and long-term performance on every site.",
    images: [{ url: "/images/about_main_photo.jpeg" }],
  },
};

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