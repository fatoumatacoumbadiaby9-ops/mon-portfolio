import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Competences from "./components/Competences.jsx";
import Projets from "./Components/Projets.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  // état pour gérer la section à afficher
  const [sectionActive, setSectionActive] = useState("home");

  return (
    <div>
      <Navbar setSectionActive={setSectionActive} />

      {/* Affichage conditionnel */}
      {sectionActive === "home" && <Hero setSectionActive={setSectionActive} />}
      {sectionActive === "skills" && <Competences />}
      {sectionActive === "projets" && <Projets />}
      {sectionActive === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;