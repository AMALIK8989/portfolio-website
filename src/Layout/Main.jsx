import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade, Pagination} from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faShoppingCart,
  faPlug,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import './Main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';


const testimonials = [
  {
    name: "Sarah M.",
    position: "Startup CEO",
    company: "Innovix Tech",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "Atta is a powerhouse—his work ethic and front-end mastery brought our vision to life. Highly recommend!",
  },
  {
    name: "James R.",
    position: "Lead Designer",
    company: "UX Nova",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    message: "He understands UI/UX beyond code. Working with him made the entire workflow smooth and fast.",
  },
  {
    name: "Laila Khan",
    position: "Product Manager",
    company: "Nexify Systems",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message: "Clean code. Solid logic. Amazing responsiveness. Atta was born for the frontend.",
  },
  {
    name: "Carlos Mendes",
    position: "CTO",
    company: "SkyLeap",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    message: "Delivered complex features ahead of time. Efficient, collaborative, and talented.",
  },
  {
    name: "Amina Yusuf",
    position: "Founder",
    company: "CodeVine Africa",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    message: "Atta added magic to our platform with stunning visuals and animations. 10/10.",
  },
  {
    name: "David L.",
    position: "Tech Lead",
    company: "BridgeWare",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    message: "He thinks beyond the brief and delivers excellence—consistently.",
  },
  {
    name: "Elena R.",
    position: "HR Director",
    company: "OrbitSoft",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    message: "Professional and kind. A rare combo in this industry. We loved working with Atta.",
  },
  {
    name: "Hamza Tariq",
    position: "DevOps Engineer",
    company: "Zentrix AI",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    message: "We had several challenges—Atta solved them with ease. His calmness and code are unmatched.",
  },
  {
    name: "Julia R.",
    position: "Marketing Manager",
    company: "SparkPilot",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    message: "Atta's portfolio design helped us land clients just by showing the UI. Crazy impact!",
  },
  {
    name: "Bilal Ahmed",
    position: "CEO",
    company: "PakDev House",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    message: "Highly reliable, extremely creative. He’s our go-to developer for all front-end needs.",
  },
  {
    name: "Noor Fatima",
    position: "UI/UX Designer",
    company: "CloudMango",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    message: "He turned our Figma chaos into clean code harmony. Loved collaborating with him!",
  },
  {
    name: "Zubair Mehmood",
    position: "Project Lead",
    company: "Hexbit Studios",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    message: "Always on time. Always pushing visual boundaries. A true frontend wizard.",
  },
  {
    name: "Mei Lin",
    position: "Software Architect",
    company: "Blueshift Systems",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    message: "Impressed by his attention to accessibility and clean React structure. 10/10 would hire again.",
  },
  {
    name: "Aaron Smith",
    position: "Head of Product",
    company: "QubitGrow",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    message: "Atta's work helped us close two major clients in Q1. What more could I ask for?",
  },
  {
    name: "Fatima Zahra",
    position: "UI Developer",
    company: "Neuronix",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    message: "The way he integrates animations with smooth performance is absolutely genius.",
  },
  {
    name: "Rohan Dev",
    position: "Technical Director",
    company: "Streamedge",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    message: "He’s sharp, respectful, and builds interfaces that feel alive. Phenomenal experience.",
  },
  {
    name: "Alina Popescu",
    position: "Marketing Head",
    company: "Visualory",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    message: "Our new product page brought in 40% more signups. His frontend flow was a game-changer.",
  },
  {
    name: "Yasir Siddiq",
    position: "QA Lead",
    company: "ZivoX",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    message: "Very few developers are this accurate across devices. Responsive game strong!",
  },
  {
    name: "Natalie W.",
    position: "Co-Founder",
    company: "NovaBloom",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    message: "Working with Atta gave our startup website a personality. Everyone noticed the difference.",
  },
  {
    name: "Umar Javed",
    position: "Operations Manager",
    company: "TasklyPro",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    message: "Everything worked perfectly and was delivered on time. Highly disciplined and honest.",
  },
];


const clientLogos = [
  "https://via.placeholder.com/150x80/4461F2/ffffff?text=Client+One",
  "https://via.placeholder.com/150x80/FF4D97/ffffff?text=Client+Two",
  "https://via.placeholder.com/150x80/FFD166/222222?text=Client+Three",
  "https://via.placeholder.com/150x80/00B8D9/ffffff?text=Client+Four",
  "https://via.placeholder.com/150x80/82c5e4/222222?text=Client+Five",
  "https://via.placeholder.com/150x80/f94f6d/ffffff?text=Client+Six",
  "https://via.placeholder.com/150x80/6c757d/ffffff?text=Client+Seven",
  "https://via.placeholder.com/150x80/5a6268/ffffff?text=Client+Eight"
];
const skills = [
  { name: '.NET', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'React', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Supabase', level: 75, icon: 'https://files.svgcdn.io/logos/supabase.png' }, // No official supabase icon, used postgres as close
  { name: 'HTML', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PHP', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'SQL', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Node.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Firebase', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Angular', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Laravel', level: 70, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRIdAgB0tzKVGgdERxcjtO8Pv4KSbBAqokw&s' },
  { name: 'RESTful API Development', level: 85, icon: 'https://media.licdn.com/dms/image/v2/D5612AQHUtfE_NZiYBQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681155201571?e=2147483647&v=beta&t=JUX6w6bHjKdvebGy4DC7GVyrIYMBHi7FR4MwkfTuThM' }, // Placeholder icon
  { name: 'TypeScript', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'GraphQL', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Docker', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Redux', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
];
const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
});
  return (
    <main>
      {/* ABOUT ME */}
      <section className="about container-fluid px-2 py-5" id="about-me">
        <div className="container" id="about-wrapper">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8" data-aos="fade-up">
              <h2 className="fw-bold text-primary mb-3">About Me</h2>
              <p className="text-secondary fs-5">
                I'm a passionate and detail-oriented frontend developer who thrives on creating beautiful, performant, and user-friendly digital experiences.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="timeline list-unstyled">
                <li className="mb-5" data-aos="fade-right">
                  <h5 className="fw-bold text-primary mb-1">Freelance Frontend Developer</h5>
                  <p className="text-muted mb-1">2019 – 2021</p>
                  <p className="text-secondary">
                    Delivered clean, responsive frontend solutions to international clients. Specialized in HTML, CSS, JavaScript, and modern frameworks like React and Bootstrap. Built landing pages, business sites, and custom UI components with pixel-perfect precision.
                  </p>
                </li>
                <li className="mb-5" data-aos="fade-left">
                  <h5 className="fw-bold text-primary mb-1">Intern — Vector Labs</h5>
                  <p className="text-muted mb-1">January 2022 – August 2022</p>
                  <p className="text-secondary">
                    Worked on real-world web projects, gaining valuable experience in frontend and backend integration. Contributed to UI improvements, learned agile workflows, and collaborated with senior developers on modern tech stacks.
                  </p>
                </li>
                <li className="mb-5" data-aos="fade-right">
                  <h5 className="fw-bold text-primary mb-1">Junior Web Developer — Creative Artistz</h5>
                  <p className="text-muted mb-1">August 2022 – Present</p>
                  <p className="text-secondary">
                    Joined Creative Artistz as a junior developer and played a key role in frontend builds for diverse client projects. Promoted in 2025 due to exceptional performance, ownership, and delivering innovative user experiences using React, Bootstrap, and animations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
    <section className="projects container-fluid px-2 py-5" id="projects" data-aos="fade-up">
  <div className="container" id='my-projects'>
    <h2 className="fw-bold text-primary mb-4 text-center">My Projects</h2>
    <div className="row g-4 justify-content-center" id='row-wrapper'>
      {[
        {
          title: "EW VILLA MEDICA",
          image: '/projects/Ew-Villa-Medica.png',
          description:
          "EW Villa Medica is a global leader in regenerative and aesthetic medicine, dedicated to enhancing health and wellness through advanced cellular therapies and innovative treatments. With centers across Asia and Europe.",
          tech: "WordPress",
          link: "/Projects/Ew-villa-Medica",
          url: "https://ewvillamedica.com/",
        },
        {
          title: "Black Sheep Construction",
          image: '/projects/Blacksheep-Construction.png', // Add image URL here
          description: "Black Sheep Construction LLC is a veteran-owned general contracting firm renowned for transforming spaces with precision and integrity.they offer services ranging from roofing and room additions to comprehensive interior and exterior renovations.",
          tech: "Wordpress",
          link: "/Projects/Black-Sheep-Construction",
          url: "https://blacksheepconstruction.com/",
        },
        {
          title: "Muush",
          image: '/projects/Muush.png', // Add image URL here
          description: "Muush offers a range of functional beverages infused with Lion’s Mane and Cordyceps mushrooms, designed to enhance mental clarity, focus, and energy levels.",
          tech: "Html5 , Css , Javascript , Ajax ,Shopify Custom Theme",
          link: "/Projects/Muush",
          url: "https://muush.co/",
        },
      ].map(({ title, image, description, tech, link, url }, index) => (
        <div key={index} className="col-sm-12 col-md-6 col-lg-4" id='project-card-wrapper'>
          <div className="project-card p-4 rounded position-relative card">
            {image && <img src={image} alt={`${title} screenshot`} className="img-fluid rounded mb-3 project-image" />}
            <div className="card-body" id="card-bodies">
              <h5 className="text-primary fw-bold mb-2">{title}</h5>
              <p className="text-secondary mb-1">{description}</p>
              <p className="text-muted fst-italic mb-3">Tech: {tech}</p>
              <Link to={link} className="btn btn-outline-primary project-btn me-2">
                See More Details
              </Link>
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary site-btn">
                  Visit Site
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CLIENTS TICKER */}
      <section className="clients-ticker py-4 bg-light" data-aos="fade-up">
        <div className="container">
          <h3 className="text-center text-primary fw-bold mb-4">Trusted By</h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={6000}
            freeMode={true}
            freeModeMomentum={false}
            className="clients-swiper"
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
          >
            {clientLogos.map((logo, idx) => (
              <SwiperSlide key={idx}>
                <img src={logo} alt={`Client ${idx + 1}`} className="client-logo img-fluid" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

     <section className="skills container py-5" id="skills" data-aos="fade-up">
      <h2 className="text-primary fw-bold mb-4 text-center">My Skills</h2>
      <div className="row g-4 justify-content-center">
        {skills.map(({ name, level, icon }, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div className="skill-card p-3 shadow-sm rounded d-flex align-items-center gap-3">
              <img src={icon} alt={`${name} icon`} className="skill-icon" />
              <div className="flex-grow-1">
                <h5 className="skill-name mb-2">{name}</h5>
                <div className="progress" style={{ height: '8px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${level}%` }}
                    aria-valuenow={level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="visually-hidden">{level}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
     <section className="contact container-fluid py-5" id="contact">
      <div className="container">
        <h2 className="text-primary fw-bold mb-4 text-center" data-aos="fade-up">Contact Me</h2>
        <div className="row g-5">

          {/* Form */}
          <div className="col-12 col-lg-6" data-aos="fade-right">
            <form className="contact-form p-4 shadow-sm rounded bg-white">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="example@email.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Write your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3 w-100">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-lg-6" data-aos="fade-left">
            <div className="contact-info bg-light p-4 rounded shadow-sm">
              <h5 className="fw-bold mb-3 text-primary">Get in Touch</h5>
              <p className="mb-2"><i className="bi bi-telephone-fill me-2 text-primary"></i> +92 334 2267926</p>
              <p className="mb-2"><i className="bi bi-telephone-fill me-2 text-primary"></i> +92 322 1038458</p>
              <p className="mb-2"><i className="bi bi-envelope-fill me-2 text-primary"></i> amalik8989@gmail.com</p>
              <p className="mb-2"><i className="bi bi-envelope-fill me-2 text-primary"></i> nexonixdigitalsolutions@gmail.com</p>
              <p className="mb-0"><i className="bi bi-envelope-fill me-2 text-primary"></i> atta_1997@live.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
   <section className="services container-fluid py-5" id="services">
  <div className="container">
    <div className="row text-center mb-5">
      <div className="col" data-aos="fade-up">
        <h2 className="fw-bold text-primary mb-3">What I Offer</h2>
        <p className="text-secondary fs-5">
          I deliver modern, efficient, and scalable solutions to help brands grow and thrive online.
        </p>
      </div>
    </div>

    <div className="row g-4 justify-content-center">

      {/* Website Development */}
      <div className="col-md-6 col-lg-4" data-aos="zoom-in">
        <div className="card service-card h-100 p-4 text-center">
          <FontAwesomeIcon icon={faCode} className="fa-3x text-primary mb-3" />
          <h5 className="fw-bold mb-2">Website Development</h5>
          <p className="text-secondary">
            Custom websites built with React, Laravel, and WordPress. Fast, SEO-ready, and fully responsive.
          </p>
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
        <div className="card service-card h-100 p-4 text-center">
          <FontAwesomeIcon icon={faFigma} className="fa-3x text-primary mb-3" />
          <h5 className="fw-bold mb-2">UI/UX Design</h5>
          <p className="text-secondary">
            Clean, user-centered designs using Figma and Framer that enhance usability and visual appeal.
          </p>
        </div>
      </div>

      {/* E-Commerce Development */}
      <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
        <div className="card service-card h-100 p-4 text-center">
          <FontAwesomeIcon icon={faShoppingCart} className="fa-3x text-primary mb-3" />
          <h5 className="fw-bold mb-2">E-Commerce Development</h5>
          <p className="text-secondary">
            Secure and scalable online stores using WooCommerce, Shopify, or custom stacks.
          </p>
        </div>
      </div>

      {/* API Integration */}
      <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
        <div className="card service-card h-100 p-4 text-center">
          <FontAwesomeIcon icon={faPlug} className="fa-3x text-primary mb-3" />
          <h5 className="fw-bold mb-2">API Integration</h5>
          <p className="text-secondary">
            RESTful and third-party APIs integrated seamlessly for full-stack functionality.
          </p>
        </div>
      </div>

      {/* Performance & SEO */}
      <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="400">
        <div className="card service-card h-100 p-4 text-center">
          <FontAwesomeIcon icon={faRocket} className="fa-3x text-primary mb-3" />
          <h5 className="fw-bold mb-2">Performance & SEO</h5>
          <p className="text-secondary">
            Optimize your site for blazing speed, accessibility, and discoverability on search engines.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="testimonials py-5" id="testimonials">
      <div className="container">
        <h2 className="fw-bold text-primary text-center mb-5">What Clients Say</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-slide d-flex flex-column flex-md-row align-items-center p-4 bg-white shadow-sm rounded">
                
                {/* Image on the left */}
                <div className="testimonial-img-wrapper me-md-4 mb-3 mb-md-0 text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-img rounded-circle"
                  />
                </div>

                {/* Text on the right */}
                <div className="testimonial-content">
                  <h5 className="mb-1 text-primary fw-bold">{item.name}</h5>
                  <p className="text-muted mb-2">{item.position} – {item.company}</p>
                  <p className="fst-italic text-secondary">"{item.message}"</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <section className="certifications-section container-fluid px-2 py-5 bg-light" id="certifications">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8" data-aos="fade-up">
            <h2 className="fw-bold text-primary mb-3">🎓 Certifications & Awards</h2>
            <p className="text-secondary fs-5">
              Demonstrating expertise, commitment, and professional growth over the years.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="timeline list-unstyled">

              <li className="mb-5" data-aos="fade-right">
                <span className="badge bg-primary text-white mb-2">2024</span>
                <h5 className="fw-bold text-primary mb-1">Google UX Design Certificate</h5>
                <p className="text-secondary">
                  Completed Google’s UX certification — focusing on design systems, usability testing, and empathy-driven UI.
                </p>
              </li>

              <li className="mb-5" data-aos="fade-left">
                <span className="badge bg-primary text-white mb-2">2023</span>
                <h5 className="fw-bold text-primary mb-1">Meta Frontend Developer Professional Certificate</h5>
                <p className="text-secondary">
                  Specialized in React, JavaScript, and responsive development as part of Meta’s prestigious frontend track.
                </p>
              </li>

              <li className="mb-5" data-aos="fade-right">
                <span className="badge bg-success text-white mb-2">2021 – 2022</span>
                <h5 className="fw-bold text-success mb-1">Top Rated Freelancer – Upwork</h5>
                <p className="text-secondary">
                  Recognized for consistent 5-star ratings, repeat clients, and delivering high-end frontend solutions.
                </p>
              </li>

              <li className="mb-5" data-aos="fade-left">
                <span className="badge bg-warning text-dark mb-2">2022</span>
                <h5 className="fw-bold text-warning mb-1">WordPress Developer Certificate</h5>
                <p className="text-secondary">
                  Certified by Aptech Pakistan for mastering dynamic WordPress sites and theme customization.
                </p>
              </li>

              {/* <li className="mb-5" data-aos="fade-right">
                <span className="badge bg-info text-dark mb-2">2025</span>
                <h5 className="fw-bold text-info mb-1">Promotion – Junior Web Developer</h5>
                <p className="text-secondary">
                  Promoted at Creative Artistz due to standout performance, ownership, and delivering intuitive UIs under pressure.
                </p>
              </li> */}

              <li className="mb-5" data-aos="fade-left">
                <span className="badge bg-dark text-white mb-2">2018 – 2022</span>
                <h5 className="fw-bold text-dark mb-1">B.S. in Software Engineering</h5>
                <p className="text-secondary">
                  Karachi University — foundational understanding of computer science, software architecture, and development life cycles.
                </p>
              </li>

              <li className="mb-5" data-aos="fade-right">
                <span className="badge bg-secondary text-white mb-2">2016 – 2018</span>
                <h5 className="fw-bold text-secondary mb-1">B.Com Degree</h5>
                <p className="text-secondary">
                  Developed business acumen and financial understanding — strengthening client and freelance relationships.
                </p>
              </li>

              <li className="mb-5" data-aos="fade-up">
                <span className="badge bg-secondary text-white mb-2">2022</span>
                <h5 className="fw-bold text-secondary mb-1">Reference Letter – Aptech Pakistan</h5>
                <p className="text-secondary">
                  Official recognition for consistent performance, attendance, and development skills during coursework.
                </p>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
       <section className="fun-facts-section container-fluid px-2 py-5" id="fun-facts">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8" data-aos="fade-up">
            <h2 className="fw-bold text-primary mb-3">🎉 Fun Facts & Personal Edge</h2>
            <p className="text-secondary fs-5">
              I'm not just code. I'm culture, curiosity, and ambition. Here’s a glimpse beyond the keyboard.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">

          <div className="col-md-6 col-lg-4" data-aos="fade-right">
            <div className="fun-card p-4 h-100 shadow-sm rounded text-center bg-white">
              <div className="emoji display-4 mb-3">🌍</div>
              <h5 className="fw-bold text-primary">Karachi-Born & Raised</h5>
              <p className="text-secondary">
                Proudly based in Karachi, Pakistan — a melting pot of culture, hustle, and resilience. My roots inspire my global mindset.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="fun-card p-4 h-100 shadow-sm rounded text-center bg-white">
              <div className="emoji display-4 mb-3">👨‍💻</div>
              <h5 className="fw-bold text-primary">Coding Since 2018</h5>
              <p className="text-secondary">
                From messy divs to clean, scalable architecture — my journey began with curiosity and evolved into passion and precision.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-left">
            <div className="fun-card p-4 h-100 shadow-sm rounded text-center bg-white">
              <div className="emoji display-4 mb-3">⚽</div>
              <h5 className="fw-bold text-primary">Football, FIFA & Cricket</h5>
              <p className="text-secondary">
                Whether I'm coding APIs or scoring goals in FIFA, I thrive in competition, strategy, and high energy teamwork.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-right">
            <div className="fun-card p-4 h-100 shadow-sm rounded text-center bg-white">
              <div className="emoji display-4 mb-3">🏗️</div>
              <h5 className="fw-bold text-primary">Dreaming Big</h5>
              <p className="text-secondary">
                One day, you’ll know the name of my tech empire — built with passion, people, and purpose. Until then, I build daily.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="fun-card p-4 h-100 shadow-sm rounded text-center bg-white">
              <div className="emoji display-4 mb-3">🎮</div>
              <h5 className="fw-bold text-primary">Gamer in Disguise</h5>
              <p className="text-secondary">
                Gaming taught me teamwork, timing, and fast reflexes. I bring that same fire to every dev sprint and project deadline.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="fade-left">
            <div className="fun-card p-4 h-100 shadow-sm rounded text-center bg-white">
              <div className="emoji display-4 mb-3">📚</div>
              <h5 className="fw-bold text-primary">Reader & Researcher</h5>
              <p className="text-secondary">
                I deep-dive into tech, politics, religion, and sports. I'm a student of everything — and it all feeds into my code.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </main>
  );
};

export default Main;