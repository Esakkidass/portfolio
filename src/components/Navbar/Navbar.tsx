import "./Navbar.scss";
import { useEffect, useState } from "react";
import EsakkiLogo from "../../assets/images/Esakkilogo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSections: { id: string; top: number }[] = [];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.push({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
          });
        }
      });

      if (visibleSections.length > 0) {
        // Get section closest to top
        const closest = visibleSections.reduce((prev, current) =>
          Math.abs(current.top) < Math.abs(prev.top) ? current : prev
        );

        setActive(closest.id);
      }
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((section) => observer.observe(section));

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