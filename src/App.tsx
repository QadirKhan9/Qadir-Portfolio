import { useEffect } from "react";
import { Cursor } from "./components/Cursor";
import { CornerMarks } from "./components/CornerMarks";
import { Nav } from "./section/Nav";
import { Hero } from "./section/Hero";
import { Projects } from "./section/Projects";
import { Skills } from "./section/Skills";
import { About } from "./section/About";
import { Marquee } from "./components/Motion";
import { Footer } from "./section/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { initLenis } from "./lib/lenis";
import { WavyDivider } from "./components/Doodles";

function Divider({ color }: { color: string }) {
  return (
    <div className="px-6 md:px-12">
      <WavyDivider className="mx-auto h-6 w-full max-w-6xl" color={color} />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Cursor />
      <CornerMarks />
      <Nav />
      <main>
        <Hero />
        <div className="py-6"><Marquee /></div>
        <Projects />
        <Divider color="var(--color-coral)" />
        <Skills />
        <Divider color="var(--color-cyan)" />
        <About />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
