import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Events from "./sections/Events";
import Careers from "./sections/Careers";
import Contact from "./sections/Contact";
import BookDemo from "./sections/BookDemo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Events />
        <Careers />
        <Contact />
        <BookDemo />
      </main>
      <Footer />
    </>
  );
}
