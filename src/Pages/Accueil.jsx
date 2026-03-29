import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Competences from "../Components/Competences";
import Projets from "../Components/Projets";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Accueil = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="skills">
        <Competences />
      </div>

      <div id="projects">
        <Projets />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Accueil;