import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

import "./style.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Certifications />
      <Contact />
    </>
  );
}
