import Image from "next/image";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
