import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Services from "../sections/Services/Services";
import WhyChoose from "../sections/WhyChoose/WhyChoose";
import Testimonials from "../sections/Testimonials/Testimonials";
import Contact from "../sections/Contact/Contact";
import NewsLetter from "../sections/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <NewsLetter />
    </>
  );
};

export default Home;
