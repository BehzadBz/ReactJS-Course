import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillData = [
  {
    skill: "HTML & CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "ReactJS",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "NodeJS",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Linux",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
    for each web dev skill that you have,
    customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src="henry-co-3JFVNo4ukKQ-unsplash.jpg"
        alt="Profile Name"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Behzad Bagherzadeh</h1>
      <p>
        Hi. I am Behzad and I'm new to developing world. I'm going to become one
        of the best develpoers in the world.
      </p>
    </div>
  );
}

function SkillList() {
  const skills = skillData;

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div>
      <div className="skill" style={{ backgroundColor: skillObj.color }}>
        {skillObj.skill}&nbsp;
        {skillObj.level === "advanced" ? "💪🏻" : ""}
        {skillObj.level === "intermediate" ? "👍🏻" : ""}
        {skillObj.level === "beginner" ? "🤏🏻" : ""}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
