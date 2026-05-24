import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Infrastructure from './sections/Infrastructure.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Diagrams from './sections/Diagrams.jsx';
import GitHub from './sections/GitHub.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Infrastructure />
        <Skills />
        <Projects />
        <Diagrams />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
