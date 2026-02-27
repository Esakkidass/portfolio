import "./Projects.scss";

import thayumanavarLogo from "../../assets/images/thayumanavar.webp";
import twadLogo from "../../assets/images/twad.gif";
import roadLogo from "../../assets/images/roadsafety.png";
import vendir from "../../assets/images/vendir.png";
import inout from "../../assets/images/inout.png";



const Projects = () => {
  const projectList = [
   {
  title: "HRMS Mobile App",
  tech: "React Native",
  desc: "Mobile application for employee management with attendance tracking and payroll features. Integrated REST APIs for authentication and secure data handling.",
  logo: inout,
  type: "Product"
},
{
  title: "Vendor Management App",
  tech: "React Native",
  desc: "Vendor onboarding and approval workflow system with real-time API integration and role-based access control.",
  logo: vendir,
  type: "Product"
},
    {
      title: "Thayumanavar App",
      tech: "React Native + Node JS",
      desc: "Production-ready mobile application with API integration, authentication system, and role-based navigation.",
      logo: thayumanavarLogo,
      type: "Professional Project",
    },
    {
      title: "TNILP App",
      tech: "React Native + Node JS",
      desc: "Production-ready mobile application with API integration, authentication system, and role-based navigation.",
      logo: thayumanavarLogo,
      type: "Professional Project",
    },
    {
      title: "Road Safety Reporting",
      tech: "React Native",
      desc: "Geo-location based reporting system with image capture, API integration, and real-time data submission.",
      logo: roadLogo,
      type: "Professional Project",
    },
    {
      title: "TWAD Web Portal",
      tech: "React JS + Node",
      desc: "Survey management portal with filtering, pagination, PDF export, and backend integration.",
      logo: twadLogo,
      type: "Professional Project",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">

            {project.logo && (
              <div className="logo-wrapper">
                <img src={project.logo} alt={project.title} />
              </div>
            )}

            <span className="project-type">{project.type}</span>

            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="desc">{project.desc}</p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;