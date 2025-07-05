import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedinIn, faUpwork, faFiverr } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-glass main-footer">
      <div className="container py-5">
        <div className="row gy-4">

          {/* Brand + Tagline */}
          <div className="col-lg-4 text-center text-lg-start">
            <h4 className="footer-title mb-2">Atta e Rabi</h4>
            <p className="footer-text">
              Turning ideas into pixel-perfect, blazing-fast user interfaces with modern tech.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 text-center">
            <h5 className="text-white mb-3">Navigate</h5>
            <ul className="list-unstyled">
              <li><a href="#about-me" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

    {/* Social + Freelancing Profiles */}
<div className="col-lg-4 text-center text-lg-end">
  <h5 className="text-white mb-3">Let’s Connect</h5>
  <ol className="footer-icons d-flex flex-wrap justify-content-center justify-content-lg-end gap-3 list-unstyled m-0 p-0">
    
    {/* Social */}
    <li>
      <a href="#" className="icon-glow" title="GitHub">
        <i className="fab fa-github"></i>
      </a>
    </li>
    <li>
      <a href="#" className="icon-glow" title="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </li>
    <li>
      <a href="mailto:amalik8989@gmail.com" className="icon-glow" title="Email">
        <i className="fas fa-envelope"></i>
      </a>
    </li>

    {/* Freelance Platforms */}
    <li>
      <a href="#" className="icon-glow" title="Upwork">
        <i className="fab fa-upwork"></i>
      </a>
    </li>
    <li>
      <a href="#" className="icon-glow" title="Fiverr">
        <i className="fab fa-fiverr"></i>
      </a>
    </li>
    <li>
      <a href="#" className="icon-glow" title="PeoplePerHour">
        <img src="/icons/peopleperhour.svg" alt="PPH" width="18" />
      </a>
    </li>
    <li>
      <a href="#" className="icon-glow" title="Toptal">
        <img src="/icons/toptal.svg" alt="Toptal" width="18" />
      </a>
    </li>
    <li>
      <a href="#" className="icon-glow" title="Guru">
        <img src="/icons/guru.svg" alt="Guru" width="18" />
      </a>
    </li>
    <li>
      <a href="#" className="icon-glow" title="DesignCrowd">
        <img src="/icons/designcrowd.svg" alt="DesignCrowd" width="18" />
      </a>
    </li>
    <li>
      <a href="#" className="icon-glow" title="99designs">
        <img src="/icons/99designs.svg" alt="99designs" width="18" />
      </a>
    </li>
    <li>
      <a href="#" className="icon-glow" title="Designhill">
        <img src="/icons/designhill.svg" alt="Designhill" width="18" />
      </a>
    </li>
  </ol>
</div>

        </div>

        <hr className="footer-divider my-4" />

        <p className="text-center text-light small m-0">
          &copy; {new Date().getFullYear()} Atta e Rabi. Crafted with 💙 in Karachi, Pakistan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
