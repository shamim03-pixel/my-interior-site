import { useState } from "react"
import { Link } from "react-router"

const assets = "/assets/arvo"

const services = [
  {
    icon: "c6bc0.svg",
    slug: "residential-design",
    title: "Residential Design",
    copy: "Full-home interiors, from layout and finishes to the final styling.",
  },
  {
    icon: "cadce.svg",
    slug: "commercial-spaces",
    title: "Commercial Spaces",
    copy: "Offices, cafés and boutiques that express your brand and invite people in.",
  },
  {
    icon: "79060.svg",
    slug: "space-planning",
    title: "Space Planning",
    copy: "Smart layouts that maximise flow, function and natural light.",
  },
  {
    icon: "2df83.svg",
    slug: "furniture-decor",
    title: "Furniture & Décor",
    copy: "Handpicked and custom pieces, lighting, art and soft furnishings.",
  },
]

const projects = [
  {
    image: "20e18.png",
    title: "The Linen House",
    detail: "Living room · Dhaka",
  },
  {
    image: "72043.png",
    title: "Sand & Oak Retreat",
    detail: "Bedroom · Gulshan",
  },
  {
    image: "8bb1f.png",
    title: "Studio Noir Kitchen",
    detail: "Kitchen & Dining · Banani",
  },
]

const process = [
  [
    "01",
    "Discovery",
    "We listen to your lifestyle, taste and budget to define the brief.",
  ],
  [
    "02",
    "Concept",
    "Mood boards, layouts and 3D renders bring the idea to life.",
  ],
  [
    "03",
    "Design",
    "Materials, furniture and lighting are selected and detailed.",
  ],
  [
    "04",
    "Delivery",
    "We manage the build and style every corner until it’s perfect.",
  ],
]

function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Arvo Interiors home">
      <img src={`${assets}/0098a.svg`} alt="" />
      <span>Arvo Interiors</span>
    </Link>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <section className="hero" id="home">
        <img
          className="hero-image"
          src={`${assets}/d05cd.png`}
          alt="Warm contemporary living room interior"
        />
        <div className="hero-overlay" />
        <header className="navbar">
          <Logo />
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Services", "services"],
              ["Projects", "projects"],
              ["Process", "process"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <Link className="button button-outline nav-cta" to="/consultation">
            Book consultation
          </Link>
        </header>

        <div className="hero-content">
          <div className="tag">
            <img src={`${assets}/138ee.svg`} alt="" />
            Award-winning interior design studio
          </div>
          <h1>Design spaces you’ll love coming home to</h1>
          <p>
            From concept to the final cushion, we craft warm, timeless interiors
            that reflect the way you live.
          </p>
          <div className="button-row">
            <Link className="button button-light" to="/consultation">
              Book a consultation
            </Link>
            <Link className="button button-outline" to="/projects">
              View our projects
            </Link>
          </div>
        </div>

        <div className="stats">
          {[
            ["15+", "Years of experience"],
            ["320+", "Projects completed"],
            ["48", "Design awards"],
            ["98%", "Happy clients"],
          ].map(([number, label]) => (
            <div className="stat" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <img
          className="about-image"
          src={`${assets}/34363.png`}
          alt="Interior designer reviewing material samples"
        />
        <div className="about-copy">
          <p className="eyebrow">ABOUT US</p>
          <h2>We turn everyday houses into personal sanctuaries</h2>
          <p className="body-copy">
            Arvo is a full-service interior design studio. We blend
            architecture, texture and light to create homes that feel calm,
            personal and effortlessly elegant — designed around your story, not
            a trend.
          </p>
          <ul className="highlights">
            {[
              "Personalised design concepts & 3D visualisation",
              "Curated furniture, lighting and materials",
              "End-to-end project management, on time and on budget",
            ].map((item) => (
              <li key={item}>
                <img src={`${assets}/51e83.svg`} alt="" />
                {item}
              </li>
            ))}
          </ul>
          <Link className="button button-dark" to="/about">
            More about us
          </Link>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading centered">
          <p className="eyebrow">OUR SERVICES</p>
          <h2>Everything your space needs, beautifully done</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div>
                <span className="icon-wrap">
                  <img src={`${assets}/${service.icon}`} alt="" />
                </span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
              <Link to={`/services/${service.slug}`}>
                Learn more <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="projects-heading">
          <div className="section-heading">
            <p className="eyebrow">FEATURED WORK</p>
            <h2>Spaces we’re proud of</h2>
          </div>
          <Link className="button button-line" to="/projects">
            View all projects
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img
                  src={`${assets}/${project.image}`}
                  alt={`${project.title} interior`}
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>A simple, thoughtful process</h2>
        </div>
        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonial">
        <div className="stars" aria-label="Five star review">
          {Array.from({ length: 5 }, (_, index) => (
            <img src={`${assets}/ce016.svg`} alt="" key={index} />
          ))}
        </div>
        <blockquote>
          “Arvo understood us from the very first meeting. Our home now feels
          warm, calm and unmistakably ours — we love walking in every single
          day.”
        </blockquote>
        <div className="author">
          <strong>Nadia Rahman</strong>
          <span>Homeowner, Gulshan</span>
        </div>
      </section>

      <section className="cta-wrap" id="contact">
        <div className="cta">
          <img src={`${assets}/d05cd.png`} alt="" />
          <div className="cta-overlay" />
          <div className="cta-content">
            <h2>Ready to transform your space?</h2>
            <p>
              Book a free 30-minute consultation and let’s start designing your
              dream home.
            </p>
            <Link className="button button-light" to="/consultation">
              Book a free consultation
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>
              Timeless, warm and personal interiors crafted for the way you
              live.
            </p>
          </div>
          <div className="footer-column">
            <strong>Explore</strong>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <a href="#contact">Journal</a>
          </div>
          <div className="footer-column">
            <strong>Services</strong>
            <Link to="/services/residential-design">Residential</Link>
            <Link to="/services/commercial-spaces">Commercial</Link>
            <Link to="/services/space-planning">Space planning</Link>
            <Link to="/services/furniture-decor">Furniture & décor</Link>
          </div>
          <div className="footer-column">
            <strong>Contact</strong>
            <a href="mailto:hello@arvo.studio">hello@arvo.studio</a>
            <a href="tel:+8801700000000">+880 1700 000 000</a>
            <span>Gulshan 2, Dhaka</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Arvo Interiors. All rights reserved.</span>
          <span>
            Terms &amp; Conditions&nbsp;&nbsp; · &nbsp;&nbsp;Privacy Policy
          </span>
        </div>
      </footer>
    </main>
  )
}
