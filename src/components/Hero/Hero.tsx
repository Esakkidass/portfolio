import "./Hero.scss";
import profileImg from "../../assets/images/myimg.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <p className="hello">Hello, I'm</p>

          <h1>Esakki Dass</h1>

          <h2>React Native Specialist | React JS Developer</h2>

          <p className="description">
            I specialize in building high-performance mobile applications 
            using React Native and modern web applications with React JS. 
            I also work with Node for backend integration and API development. 
            Passionate about clean architecture, scalable solutions, and 
            production-ready applications.
          </p>

          <div className="buttons">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>

            <a href="#projects" className="btn-outline">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={profileImg} alt="Esakki Dass" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;