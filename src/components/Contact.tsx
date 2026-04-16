import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-cta">
          <h2 className="contact-headline">
            Let's build something <br />
            <span>dependable</span> together.
          </h2>
          <p className="contact-cta-sub">
            Open to Software Engineer, AI platform, GenAI infrastructure, and backend engineering roles.
          </p>
          <div className="contact-cta-actions">
            <a
              href="mailto:tejareddi0011@gmail.com?subject=Let's%20Connect%20-%20Portfolio&body=Hi%20Raviteja%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0A"
              className="contact-button"
              data-cursor="disable"
            >
              <span className="contact-button-text">Let's Connect</span>
              <MdArrowOutward />
            </a>
            <a
              href="tel:+17748108481"
              className="contact-button-secondary"
              data-cursor="disable"
            >
              <FaPhone /> Call Me
            </a>
          </div>
        </div>

        <div className="contact-quick">
          <div className="contact-quick-item">
            <FaEnvelope />
            <a href="mailto:tejareddi0011@gmail.com" data-cursor="disable">
              tejareddi0011@gmail.com
            </a>
          </div>
          <div className="contact-quick-item">
            <FaPhone />
            <a href="tel:+17748108481" data-cursor="disable">
              +1 (774) 810-8481
            </a>
          </div>
        </div>

        <div className="contact-divider" />

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:tejareddi0011@gmail.com"
                data-cursor="disable"
              >
                tejareddi0011@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+17748108481" data-cursor="disable">
                +1 (774) 810-8481
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/raviteja-velanati/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — raviteja-velanati
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Master's in Computer Science, Clark University — 2023–2024
            </p>
            <p>
              B.Tech Computer Science, Malla Reddy Engineering — 2018–2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ravitejav-dev"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/raviteja-velanati/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Raviteja Velanati</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
