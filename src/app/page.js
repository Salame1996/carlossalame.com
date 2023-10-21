import Image from "next/image";
import AboutSection from "./components/HeroSection.jsx/AboutSection";
import EmailSection from "./components/HeroSection.jsx/EmailSection";
import Footer from "./components/HeroSection.jsx/Footer";
import HeroSection from "./components/HeroSection.jsx/HeroSection";
import Navbar from "./components/HeroSection.jsx/Navbar";
import ProjectsSection from "./components/HeroSection.jsx/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection/>
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
