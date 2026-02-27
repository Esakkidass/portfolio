import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaBriefcase,
  FaProjectDiagram,
  FaSmile
} from "react-icons/fa";

import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <h2>The Service Provide For You</h2>

        <div className="services-grid">

          <div className="service-card">
            <div className="icon-wrapper blue">
              <FaCode />
            </div>
            <h3>Web Development</h3>
            <p>
              I build scalable web applications using React and modern UI/UX principles.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper purple">
              <FaMobileAlt />
            </div>
            <h3>Mobile App Development</h3>
            <p>
              High-performance mobile apps using React Native with clean architecture.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper red">
              <FaServer />
            </div>
            <h3>Backend Development</h3>
            <p>
              Secure and scalable backend systems using Node and REST APIs.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper yellow">
              <FaBriefcase />
            </div>
            <h3>2+ Years Experience</h3>
            <p>Professional experience delivering production-ready solutions.</p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper blue">
              <FaProjectDiagram />
            </div>
            <h3>5+ Projects Completed</h3>
            <p>Successfully delivered multiple web and mobile applications.</p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper red">
              <FaSmile />
            </div>
            <h3>100% Client Satisfaction</h3>
            <p>Focused on delivering quality and reliable solutions.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;