import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
