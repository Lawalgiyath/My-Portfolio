import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { AiSuggestionModal } from '@/components/ai-suggestion-modal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="space-y-24 md:space-y-32 my-24 md:my-32">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceTimeline />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <AiSuggestionModal />
    </div>
  );
}
