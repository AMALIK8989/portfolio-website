import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Header.css';
import myHeroImage from '../assets/Atta-e-rabi.png';

const Header = () => {
  return (
    <header>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg shadow-sm fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4 text-primary">
            Atta e Rabi
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="btn btn-primary">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     {/* HERO SECTION */}
<section className="container-fluid px-2 hero">
  <div className="container py-5 mt-5">
    <div className="row align-items-center justify-content-between g-5">
      
      {/* LEFT SIDE: Text Content */}
      <div className="col-12 col-lg-6 text-center text-lg-start">
        <h1 className="display-5 fw-bold text-primary mb-3">
          Hi, I'm Atta e Rabi
        </h1>

        <TypeAnimation
          sequence={[
            'Full Stack Web Developer',
            1500,
            'React & Laravel Specialist',
            1500,
            'Portfolio Designer & UI Magician',
            1500,
            // 'Erotica Writer & Story Engineer',
            // 1500,
          ]}
          speed={50}
          style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#333',
            display: 'block',
          }}
          wrapper="span"
          repeat={Infinity}
        />

        <p className="hero-description mt-4 text-secondary mx-auto mx-lg-0">
          I craft powerful, expressive websites with vibrant design and bulletproof code.
          Whether it's a business, a story, or your personal brand — I make it unforgettable.
        </p>

        <Link to="/projects" className="btn btn-outline-primary mt-4">
          Explore My Work
        </Link>
      </div>
      <div className="col-12 col-lg-6 text-center">
        <img
           src="/Atta-e-rabi.png"
          alt="Atta e Rabi Portfolio Hero"
          className="img-fluid rounded shadow-sm profile-img"
        />
      </div>
    </div>
  </div>
</section>

    </header>
  );
};

export default Header;
