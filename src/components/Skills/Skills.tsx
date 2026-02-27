import { DiDotnet } from "react-icons/di";
import "./Skills.scss";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDotnet, SiMysql, SiReact, SiTypescript } from "react-icons/si";

const skillsData = [
  { name: "HTML", level: "Advanced", color: "#ef4444", icon: <FaHtml5 /> },
  { name: "CSS", level: "Advanced", color: "#3b82f6", icon: <FaCss3Alt /> },
  { name: "TypeScript", level: "Advanced", color: "#3178c6", icon: <SiTypescript /> },
  { name: "React.js", level: "Advanced", color: "#38bdf8", icon: <FaReact /> },
  { name: "React Native", level: "Advanced", color: "#06b6d4", icon: <SiReact /> },
  { name: "Node", level: "Intermediate", color: "#22c55e", icon: <FaNodeJs /> },
   { name: "MySQL", level: "Intermediate", color: "#00758f", icon: <SiMysql /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              
              <div
                className="bg-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <span
                className={`skill-level ${skill.level.toLowerCase()}`}
              >
                {skill.level}
              </span>

              <p>
                Experienced in building scalable and production-ready applications.
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;