import { useState, useEffect } from "react";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutCEOSection from "@/components/AboutCEOSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Achievements from "../components/Achievements";

interface HomeProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export default function Home({ darkMode, setDarkMode }: HomeProps) {
  const [showWelcome, setShowWelcome] = useState(false);

  // ✅ Show welcome animation only once
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("seenWelcome");
    if (!hasSeenWelcome) setShowWelcome(true);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  if (showWelcome) {
    return (
      <WelcomeAnimation
        onComplete={() => {
          setShowWelcome(false);
          localStorage.setItem("seenWelcome", "true");
        }}
      />
    );
  }

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      {/* ✨ Particle background for full page */}
      <div className="fixed inset-0 -z-10">
        <ParticleBackground />
      </div>

      {/* 🔝 Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        {/* 🖤 Hero Section */}
        <section
          className={`${
            darkMode ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
        >
          <HeroSection onNavigate={handleNavigate} darkMode={darkMode} />
        </section>

        {/* 💼 Services */}
        <section
          className={`${
            darkMode ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
        >
          <ServicesSection darkMode={darkMode} />
        </section>

        {/* 🚀 Projects */}
        <section
          className={`relative ${
            darkMode ? "bg-black text-white" : "bg-white text-gray-900"
          } transition-colors duration-500`}
        >
          <div className={darkMode ? "bg-black/90" : "bg-white/90"}>
            <ProjectsSection darkMode={darkMode} />
          </div>
        </section>

        {/* 🏆 Achievements */}
        <section
          className={`${
            darkMode ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
        >
          <Achievements darkMode={darkMode} />
        </section>

        {/* 👤 About CEO */}
        <section
          className={`${
            darkMode ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
        >
          <AboutCEOSection darkMode={darkMode} />
        </section>

        {/* 📞 Contact + Footer */}
        <section
          className={`relative ${
            darkMode ? "bg-black text-white" : "bg-white text-gray-900"
          } transition-colors duration-500`}
        >
          <ContactSection darkMode={darkMode} />
          <div
            className={`h-[1px] w-full ${
              darkMode ? "bg-gray-800" : "bg-gray-300"
            } my-4`}
          />
          <Footer darkMode={darkMode} />
        </section>
      </main>
    </div>
  );
}
