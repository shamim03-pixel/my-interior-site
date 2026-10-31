import { FormEvent, useEffect, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router"

const assets = "/assets/arvo"

const serviceDetails = {
  "residential-design": {
    title: "Residential Design",
    eyebrow: "HOMES, DESIGNED AROUND YOU",
    intro:
      "From a single room to a complete home, we shape calm, characterful interiors that reflect how you truly live.",
    image: "20e18.png",
    icon: "c6bc0.svg",
    summary:
      "Our residential service brings architecture, furniture, light and texture into one considered vision. Every decision is made around your routines, your taste and the feeling you want to come home to.",
    includes: [
      "Space planning and furniture layouts",
      "Concept direction and material palettes",
      "Bespoke joinery and lighting design",
      "Furniture, art and accessory sourcing",
      "Site coordination and final styling",
      "Detailed 3D visualisations",
    ],
  },
  "commercial-spaces": {
    title: "Commercial Spaces",
    eyebrow: "SPACES THAT EXPRESS YOUR BRAND",
    intro:
      "Distinctive workplaces, cafés and boutiques designed to welcome people in and keep your brand memorable.",
    image: "8bb1f.png",
    icon: "cadce.svg",
    summary:
      "We translate your brand into a spatial experience—balancing customer flow, operational needs and a strong visual identity. The result is beautiful, practical and built for daily use.",
    includes: [
      "Brand-led interior concepts",
      "Customer journey and flow planning",
      "Custom counters, displays and joinery",
      "Lighting and finish specifications",
      "Vendor and contractor coordination",
      "Opening-day styling support",
    ],
  },
  "space-planning": {
    title: "Space Planning",
    eyebrow: "MAKE EVERY METRE WORK HARDER",
    intro:
      "Intelligent layouts that improve flow, function and natural light without compromising warmth or character.",
    image: "72043.png",
    icon: "79060.svg",
    summary:
      "A well-planned room feels effortless. We study movement, proportions, storage and sightlines to unlock the full potential of your existing footprint before selecting a single finish.",
    includes: [
      "Measured site review",
      "Multiple layout options",
      "Furniture scale and circulation studies",
      "Storage and joinery planning",
      "Lighting and electrical positioning",
      "Final annotated floor plan",
    ],
  },
  "furniture-decor": {
    title: "Furniture & Décor",
    eyebrow: "THE LAYERS THAT MAKE IT YOURS",
    intro:
      "A thoughtful curation of furniture, lighting, textiles and art that gives your rooms depth and personality.",
    image: "34363.png",
    icon: "2df83.svg",
    summary:
      "We combine investment pieces, custom designs and meaningful details to create a collected home. Each selection is beautiful on its own and stronger as part of the whole.",
    includes: [
      "Furniture and lighting curation",
      "Custom furniture design",
      "Textile, rug and window treatment selection",
      "Artwork and accessory sourcing",
      "Procurement and delivery management",
      "On-site installation and styling",
    ],
  },
} as const

const allProjects = [
  {
    image: "20e18.png",
    title: "The Linen House",
    type: "Residential",
    location: "Dhaka",
  },
  {
    image: "72043.png",
    title: "Sand & Oak Retreat",
    type: "Residential",
    location: "Gulshan",
  },
  {
    image: "8bb1f.png",
    title: "Studio Noir Kitchen",
    type: "Kitchen",
    location: "Banani",
  },
  {
    image: "34363.png",
    title: "The Maker's Residence",
    type: "Residential",
    location: "Dhanmondi",
  },
  {
    image: "d05cd.png",
    title: "Walnut House",
    type: "Residential",
    location: "Uttara",
  },
  {
    image: "8bb1f.png",
    title: "Noir Social",
    type: "Commercial",
    location: "Gulshan",
  },
]

function InnerLogo() {
  return (
    <Link className="logo" to="/" aria-label="Arvo Interiors home">
      <img src={`${assets}/0098a.svg`} alt="" />
      <span>Arvo Interiors</span>
    </Link>
  )
}

function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="inner-navbar">
      <InnerLogo />
      <button
        className="menu-button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav
        className={open ? "inner-nav-links open" : "inner-nav-links"}
        aria-label="Main navigation"
      >
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/#services" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link to="/projects" onClick={() => setOpen(false)}>
          Projects
        </Link>
        <Link to="/#process" onClick={() => setOpen(false)}>
          Process
        </Link>
      </nav>
      <Link className="button button-outline nav-cta" to="/consultation">
        Book consultation
      </Link>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <InnerLogo />
          <p>
            Timeless, warm and personal interiors crafted for the way you live.
          </p>
        </div>
        <div className="footer-column">
          <strong>Explore</strong>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/consultation">Contact</Link>
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
  )
}

export function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname])

  return (
    <main className="inner-page">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </main>
  )
}

function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy: string
}) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  )
}

function PageCta() {
  return (
    <section className="inner-cta">
      <p className="eyebrow">LET’S CREATE SOMETHING PERSONAL</p>
      <h2>Have a space in mind?</h2>
      <p>
        Share your ideas with us and discover what’s possible in a free
        30-minute conversation.
      </p>
      <Link className="button button-light" to="/consultation">
        Book a consultation
      </Link>
    </section>
  )
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT ARVO"
        title="Thoughtful interiors, rooted in the way you live"
        copy="We believe the most beautiful spaces begin with listening—then bringing together proportion, texture and light with care."
      />
      <section className="inner-split">
        <img
          src={`${assets}/34363.png`}
          alt="Designer selecting materials in the studio"
        />
        <div>
          <p className="eyebrow">OUR STORY</p>
          <h2>Design that feels quietly, unmistakably yours</h2>
          <p>
            Arvo began with a simple belief: a home should tell the story of the
            people inside it. For over 15 years, we have worked closely with
            homeowners and brands to create interiors that are warm, timeless
            and deeply personal.
          </p>
          <p>
            Our studio brings architecture, interior design and styling together
            under one roof, so every detail—from the plan to the final
            object—feels connected.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="section-heading centered">
          <p className="eyebrow">WHAT GUIDES US</p>
          <h2>Beautiful spaces, made with intention</h2>
        </div>
        <div className="values-grid">
          {[
            [
              "01",
              "Listen first",
              "Your routines, memories and ambitions shape every decision we make.",
            ],
            [
              "02",
              "Choose with care",
              "We favour honest materials, lasting craftsmanship and details with meaning.",
            ],
            [
              "03",
              "Design for life",
              "Our spaces are made to be lived in—comfortable, intuitive and enduring.",
            ],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="inner-stats">
        {[
          ["15+", "Years of experience"],
          ["320+", "Completed projects"],
          ["48", "Design awards"],
          ["98%", "Happy clients"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>
      <PageCta />
    </>
  )
}

export function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const filters = ["All", "Residential", "Kitchen", "Commercial"]
  const visibleProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.type === filter)

  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title="Spaces with warmth, character and a story"
        copy="A selection of homes and spaces shaped around the people who use them, from quiet retreats to expressive gathering places."
      />
      <section className="project-archive">
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="archive-grid">
          {visibleProjects.map((project, index) => (
            <article className="archive-card" key={project.title}>
              <div>
                <img
                  className={`archive-image image-position-${index % 3}`}
                  src={`${assets}/${project.image}`}
                  alt={`${project.title} interior`}
                />
                <span>View project</span>
              </div>
              <h2>{project.title}</h2>
              <p>
                {project.type} · {project.location}
              </p>
            </article>
          ))}
        </div>
      </section>
      <PageCta />
    </>
  )
}

export function ServicePage() {
  const { serviceId } = useParams()
  const service = serviceDetails[(serviceId as keyof typeof serviceDetails)]

  if (!service) return <NotFoundPage />

  return (
    <>
      <section className="service-hero">
        <div className="service-hero-copy">
          <span className="icon-wrap">
            <img src={`${assets}/${service.icon}`} alt="" />
          </span>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <Link className="button button-light" to="/consultation">
            Discuss your project
          </Link>
        </div>
        <img
          src={`${assets}/${service.image}`}
          alt={`${service.title} example`}
        />
      </section>
      <section className="service-intro">
        <p className="eyebrow">THE SERVICE</p>
        <h2>A complete approach, from first idea to final detail</h2>
        <p>{service.summary}</p>
      </section>
      <section className="service-includes">
        <div>
          <p className="eyebrow">WHAT’S INCLUDED</p>
          <h2>Everything you need for a considered result</h2>
        </div>
        <ul>
          {service.includes.map((item) => (
            <li key={item}>
              <img src={`${assets}/51e83.svg`} alt="" />
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="service-steps">
        {[
          [
            "01",
            "Discover",
            "We learn how you live, what you love and what the space needs to do.",
          ],
          [
            "02",
            "Define",
            "Layouts, mood and materials come together into one clear creative direction.",
          ],
          [
            "03",
            "Develop",
            "Every selection and technical detail is refined, priced and prepared.",
          ],
          [
            "04",
            "Deliver",
            "We coordinate, install and style the space until it feels complete.",
          ],
        ].map(([number, title, copy]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <PageCta />
    </>
  )
}

export function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="consultation-page">
      <div className="consultation-intro">
        <p className="eyebrow">FREE 30-MINUTE CONSULTATION</p>
        <h1>Let’s talk about your space</h1>
        <p>
          Tell us where you are in your journey. We’ll get back to you within
          two working days to arrange a relaxed, no-obligation conversation.
        </p>
        <div className="consultation-points">
          {[
            "A focused 30-minute video or studio call",
            "Honest guidance on scope, timing and budget",
            "Clear next steps tailored to your project",
          ].map((item) => (
            <span key={item}>
              <img src={`${assets}/51e83.svg`} alt="" />
              {item}
            </span>
          ))}
        </div>
        <div className="contact-card">
          <span>Prefer to reach us directly?</span>
          <a href="mailto:hello@arvo.studio">hello@arvo.studio</a>
          <a href="tel:+8801700000000">+880 1700 000 000</a>
        </div>
      </div>
      <div className="consultation-form-wrap">
        {submitted ? (
          <div className="form-success" role="status">
            <span>✓</span>
            <h2>Thank you</h2>
            <p>
              Your project details are with us. We’ll be in touch within two
              working days.
            </p>
            <Link className="button button-dark" to="/">
              Back to home
            </Link>
          </div>
        ) : (
          <form className="consultation-form" onSubmit={submit}>
            <div className="form-heading">
              <p className="eyebrow">YOUR PROJECT</p>
              <h2>Share a few details</h2>
            </div>
            <div className="form-row">
              <label>
                Full name
                <input required placeholder="Your name" />
              </label>
              <label>
                Email address
                <input required type="email" placeholder="you@example.com" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone number
                <input required type="tel" placeholder="+880" />
              </label>
              <label>
                Project location
                <input required placeholder="Area or city" />
              </label>
            </div>
            <label>
              Service
              <select required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {Object.values(serviceDetails).map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label>
              Estimated budget
              <select required defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                <option>৳5–10 lakh</option>
                <option>৳10–25 lakh</option>
                <option>৳25–50 lakh</option>
                <option>৳50 lakh+</option>
              </select>
            </label>
            <label>
              Tell us about your space
              <textarea
                required
                rows={5}
                placeholder="What would you like to create?"
              />
            </label>
            <button className="button button-dark" type="submit">
              Request consultation
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>This room isn’t ready yet</h1>
      <p>The page you’re looking for may have moved or no longer exists.</p>
      <Link className="button button-dark" to="/">
        Return home
      </Link>
    </section>
  )
}
