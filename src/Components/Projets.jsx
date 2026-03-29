import React from "react";

// 20 projets avec images en ligne (Picsum Photos)
const projets = [
  { title: "Site E-commerce", img: "https://picsum.photos/400/300?random=1" },
  { title: "Application de Chat", img: "https://picsum.photos/400/300?random=2" },
  { title: "Portfolio Moderne", img: "https://picsum.photos/400/300?random=3" },
  { title: "Blog Personnel", img: "https://picsum.photos/400/300?random=4" },
  { title: "Dashboard Admin", img: "https://picsum.photos/400/300?random=5" },
  { title: "App Météo", img: "https://picsum.photos/400/300?random=6" },
  { title: "Clone Instagram", img: "https://picsum.photos/400/300?random=7" },
  { title: "Application To-Do", img: "https://picsum.photos/400/300?random=8" },
  { title: "Site Restaurant", img: "https://picsum.photos/400/300?random=9" },
  { title: "Landing Page Startup", img: "https://picsum.photos/400/300?random=10" },
  { title: "App Gestion Utilisateurs", img: "https://picsum.photos/400/300?random=11" },
  { title: "Plateforme de Formation", img: "https://picsum.photos/400/300?random=12" },
  { title: "Site Immobilier", img: "https://picsum.photos/400/300?random=13" },
  { title: "Application de Réservation", img: "https://picsum.photos/400/300?random=14" },
  { title: "Mini Réseau Social", img: "https://picsum.photos/400/300?random=15" },
  { title: "App Notes", img: "https://picsum.photos/400/300?random=16" },
  { title: "Site École", img: "https://picsum.photos/400/300?random=17" },
  { title: "App Livraison", img: "https://picsum.photos/400/300?random=18" },
  { title: "Gestion de Stock", img: "https://picsum.photos/400/300?random=19" },
  { title: "Site Événementiel", img: "https://picsum.photos/400/300?random=20" },
];


const Projets = () => (
  <section id="projets" className="p-10 bg-gray-100">
    <h2 className="text-3xl mb-8 text-center font-bold">Mes Projets</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projets.map((p) => (
        <div
          key={p.title}
          className="relative overflow-hidden rounded-lg shadow-lg group"
        >
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay texte */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-lg font-semibold">{p.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projets;