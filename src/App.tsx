import StartSection from "./components/starSection";
import Navbar from "./components/navbar";
import ScrollProgress from "./components/ui/scroll-progress";
import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import { ProjectsSection } from "./components/projectsSection";
import TerminalSection from "./components/ui/terminalSection";
import JigSaw from "./components/jigSaw";

export default function App() {
  return (
    <main>
      <ScrollProgress className="top-[62px]" />
      <Navbar />
      <StartSection />
      <AboutSection />
      <TerminalSection />
      <ProjectsSection />
      <ContactSection />
      <JigSaw />
    </main>
  );
}
