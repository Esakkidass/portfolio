import "./Navbar.scss";
import { useEffect, useState } from "react";
import EsakkiLogo from "../../assets/images/Esakkilogo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6, // section must be 60% visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={EsakkiLogo} alt="Esakki Logo" />
        </div>

        <ul className="nav-links">
          <li><a href="#home" className={active === "home" ? "active" : ""}>Home</a></li>
          <li><a href="#about" className={active === "about" ? "active" : ""}>About</a></li>
          <li><a href="#skills" className={active === "skills" ? "active" : ""}>Skills</a></li>
          <li><a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a></li>
          <li><a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;