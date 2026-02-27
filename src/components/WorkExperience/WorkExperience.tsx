import "./WorkExperience.scss";
import { FaCalendarAlt } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

       <h2 className="section-title">Work Experience</h2>
        <p className="subtitle">
          My professional journey as a Full Stack Developer.
        </p>

        <div className="experience-card">

          <div className="exp-header">
            <div>
              <h3>Full Stack Developer</h3>
              <h4>Vivid Trans Tech Solutions Pvt Ltd</h4>
            </div>

            <div className="date">
              <FaCalendarAlt />
              <span>2024 – Present</span>
            </div>
          </div>

          <div className="exp-body">
            <h5>Key Responsibilities</h5>
            <ul>
              <li>Developing and maintaining cross-platform mobile applications using React Native.</li>
              <li>Building responsive web applications using React JS.</li>
              <li>Developing and consuming REST APIs using Node.</li>
              <li>Implementing authentication and role-based access control.</li>
              <li>Integrating mobile and web applications with backend services.</li>
              <li>Optimizing performance and deploying production-ready applications.</li>
            </ul>

            <h5>Core Technologies</h5>
        <div className="tech-stack">
  <span className="rn">React Native</span>
  <span className="react">React JS</span>
  <span className="node">Node</span>
  <span className="ts">TypeScript</span>
  <span className="mysql">MySQL</span>
  <span className="api">REST API</span>
</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WorkExperience;