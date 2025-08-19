import { AboutSection } from "@/components/about-section";
import { BackgroundEffects } from "@/components/background-effects";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomeSection } from "@/components/home-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
