import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
// import Portfolio from "./pages/Portfolio";
// import Blog from "./pages/Blog";
// import Resume from "./pages/Resume";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
import TechStack from "./components/TechStack";
import About from "./components/About";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import Project from "./components/Project";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white">
      {/* Navbar stays sticky */}
      <Navbar />

      {/* Sections */}
      <main>
        {/* HomePage (full screen) */}
        <section
          id="home"
          className="min-h-screen w-full flex items-center justify-center bg-gray-950"
        >
          <HomePage />
        </section>

        {/* TechStack (just a slim marquee section) */}
        <section id="techstack" className="w-full bg-gray-900">
          <TechStack />
        </section>

        
        <section id="about" className="w-full bg-gray-900">
          <About />
        </section>
         <section
          id="portfolio"
          className="min-h-screen w-full flex items-center justify-center bg-black"
        >
          <CTA />
        </section>

        <section
          id="resume"
          className="min-h-screen w-full flex items-center justify-center bg-gray-900"
        >
          <Project />
        </section>

        <section
          id="blog"
          className="min-h-screen w-full flex items-center justify-center bg-gray-950"
        >
          <Blog />
        </section>


        <section
          id="services"
          className="min-h-screen w-full flex items-center justify-center bg-gray-950"
        >
          <Review />
        </section>

        <section
          id="contact"
          className="min-h-screen w-full flex items-center justify-center bg-gray-900"
        >
          <Contact />
        </section>
        <Footer />  
      </main>
    </div>
  );
}

export default App;
