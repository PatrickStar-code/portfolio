import StartSection from "./components/starSection";
import Navbar from "./components/navbar";
import ScrollProgress from "./components/ui/scroll-progress";
import AboutSection from "./components/aboutSection";
import ProjectsSection from "./components/projectsSection";

export default function App() {
  return (
    <>
      <ScrollProgress className="top-[65px]" />
      <Navbar />
      <StartSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
