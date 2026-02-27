import "./Navbar.scss";
import { useState } from "react";
import EsakkiLogo from "../../assets/images/Esakkilogo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <img src={EsakkiLogo} alt="Esakki Logo" />
        </div>

        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              Home
            </a>
          </li>

          <li>
            <a 
              href="#about" 
              className={active === "about" ? "active" : ""}
              onClick={() => setActive("about")}
            >
              About
            </a>
          </li>

          <li>
            <a 
              href="#skills" 
              className={active === "skills" ? "active" : ""}
              onClick={() => setActive("skills")}
            >
              Skills
            </a>
          </li>

          <li>
            <a 
              href="#projects" 
              className={active === "projects" ? "active" : ""}
              onClick={() => setActive("projects")}
            >
              Projects
            </a>
          </li>

          <li>
            <a 
              href="#contact" 
              className={active === "contact" ? "active" : ""}
              onClick={() => setActive("contact")}
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;