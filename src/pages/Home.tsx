import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Skills from '../components/sections/Skills';
import Timeline from '../components/sections/Timeline';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/CTA';
import Blog from '../components/Blog';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { BackToTop } from '../components/ui/BackToTop';
import { pageTransitionVariants } from '../utils/animations';

const Home = () => {
  useEffect(() => {
    document.title = 'Portfolio | Akash Thakur';
  }, []);

  return (
    <motion.div 
      className="w-full min-h-screen bg-gray-950 text-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      <Navbar />
      <main>
        <section id="home" className="flex items-center justify-center bg-gray-950">
          <HomePage />
        </section>
        <section id="techstack" className="w-full bg-gray-900">
          <TechStack />
        </section>
        <section id="about" className="w-full bg-gray-900">
          <About />
        </section>
        <section id="skills" className="w-full bg-gray-900">
          <Skills />
        </section>
        <section id="timeline" className="w-full bg-gray-950">
          <Timeline />
        </section>
        <section id="cta" className="min-h-screen w-full flex items-center justify-center bg-black">
          <CTA />
        </section>
        <section id="projects" className="min-h-screen w-full flex items-center justify-center bg-gray-900">
          <Project />
        </section>
        <section id="testimonials" className="w-full bg-gray-900">
          <Testimonials />
        </section>
        <section id="blog" className="min-h-screen w-full flex items-center justify-center bg-gray-950">
          <Blog />
        </section>
        <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-gray-900">
          <Contact />
        </section>
        <Footer />
      </main>
      <BackToTop />
    </motion.div>
  );
};

export default Home;
