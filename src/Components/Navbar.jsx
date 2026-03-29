import React from "react";

const Navbar = ({ setSectionActive }) => {
  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md text-white flex justify-between items-center px-10 py-4 z-50">
      <h1 className="font-bold text-lg">mon-portfolio</h1>
      <ul className="flex gap-6">
        <li onClick={() => setSectionActive("home")} className="cursor-pointer">Accueil</li>
          </ul>
            <ul className="flex gap-6">
        <li onClick={() => setSectionActive("skills")} className="cursor-pointer">Compétences</li>
              </ul>
                   <ul className="flex gap-6">
        <li onClick={() => setSectionActive("projets")} className="cursor-pointer">Projets</li>
               </ul>
                <ul className="flex gap-6">
        <li onClick={() => setSectionActive("contact")} className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;