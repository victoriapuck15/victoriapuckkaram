import React, { useEffect, useState } from "react";
import "./App.css";
import toya from "./toya.JPG";

function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navigation scrolled={navScrolled} />
      <HeroSection />

      <main className="content">
        <Section title="About Me" id="about">
          <p>
            Hi, I’m [Your Name]. I build clean, intuitive, and engaging applications
            that bring ideas to life with a balance of design and functionality.
          </p>
        </Section>

        <Section title="Projects" id="projects">
          <div className="card-grid">
            <ProjectCard title="Project One" description="A React app for personal tasks." color="#4C6663" link="#" />
            <ProjectCard title="Project Two" description="A D3.js dashboard for data visualization." color="#77BFA3" link="#" />
            <ProjectCard title="Project Three" description="A mobile-first e-commerce platform." color="#F9A826" link="#" />
            <ProjectCard title="Project Four" description="An AI-powered chatbot for customer support." color="#EA638C" link="#" />
            <ProjectCard title="Project Five" description="A portfolio website template for designers." color="#8E7DBE" link="#" />
            <ProjectCard title="Project Six" description="A weather app with geolocation and APIs." color="#FFB4A2" link="#" />
          </div>
        </Section>

        <Section title="Contact" id="contact">
          <p>
            Let’s connect! Reach me at{" "}
            <a href="mailto:youremail@example.com">youremail@example.com</a>.
          </p>
        </Section>
      </main>
    </div>
  );
}

function Navigation({ scrolled }) {
  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="hero fade-section">
      <div className="hero-text">
        <h2>Victoria Puck-Karam</h2>
        <p>Backend Software Engineer & Data Scientist </p>
      </div>
      <div className="hero-photo">
        <img src={toya} alt="Your Name" />
      </div>
    </section>
  );
}

function Section({ title, children, id }) {
  return (
    <section id={id} className="page-section fade-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}


function ProjectCard({ title, description, color, link }) {
  const style = { backgroundColor: color };
  return (
    <div
      className="card fade-section"
      style={style}
      onClick={() => window.location.href = link}
    >
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default App;
