import React from "react";

const Competences = () => {
  const skills = [
    { id: 1, titre: "HTML", niveau: 90 },
    { id: 2, titre: "CSS", niveau: 85 },
    { id: 3, titre: "React JS", niveau: 75 },
    { id: 4, titre: "JavaScript", niveau: 70 },
    { id: 5, titre: "Laravel", niveau: 60 },
  ];

  return (
    <section id="competences" className="competences">
      <h1 className="title">Mes Compétences</h1>

      <div className="mes_competences">
        {skills.map((skill) => (
          <div key={skill.id} className="un_competence">
            <div className="skill_header">
              <span>{skill.titre}</span>
              <span>{skill.niveau}%</span>
            </div>

            <div className="bar">
              <div
                className="progress"
                style={{ width: skill.niveau + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competences;