import "./Contact.scss";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">

        {/* LEFT - FORM */}
        <div className="contact-form-card">
          <h2>Send Me a Message</h2>

          <form>
            <div className="row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows={6}></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - INFO */}
        <div className="contact-info-card">
          <h2>Contact Information</h2>

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>esakkidass979@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <p>+91 8668167098</p>
            </div>
          </div>

          <h3>Connect with me</h3>

          <div className="social-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;