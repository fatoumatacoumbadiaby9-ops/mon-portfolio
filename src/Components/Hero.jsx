import React from "react";
import profile from "../assets/profile.jpg";

const Hero = ({ setSectionActive }) => {
  return (
    <section className="hero">
      <div className="box_hero">
        {/* GAUCHE */}
        <div className="hero_gauche">
          <h2>Bonjour, je suis</h2>
          <h1>Fatoumata Diaby</h1>
          <p>Développeuse web full-stack passionnée et motivée.</p>

          <div className="hero_btn">
            <button
              className="hero_btn1"
              onClick={() => setSectionActive("contact")}
            >
              Me contacter
            </button>
            <button
              className="hero_btn2"
              onClick={() => setSectionActive("projets")}
            >
              Voir mes projets
            </button>
          </div>
        </div>

        {/* DROITE */}
        <div className="hero_droite">
          <img src={profile} alt="Profil" />
        </div>
      </div>
    </section>
  );
};

export default Hero;