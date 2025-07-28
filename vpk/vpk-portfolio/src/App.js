import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import toya from "./toya.JPG";
import { BiLogoGithub } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

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
  

        <Section title="Projects" id="projects">
          <div className="card-grid">
            <ProjectCard
              title="CMCI Index"
              description="A quantative approach to consumer sentiment"
              color="#5B2E48"
              link="#"
            />
            <ProjectCard
              title="Demand Execution Dashboard"
              description="MAXAR Intelligence Supply & Demand Analysis Project."
              color="#76A9C4"
              link="#"
            />
            <ProjectCard
              title="Spot Suggest"
              description="Machine Learning tool to make song recommendations."
              color="#4C6663"
              link="#"
            />
            <ProjectCard
              title="X-READ"
              description="An AI-powered chatbot for customer support."
              color="#A6B07E"
              link="#"
            />
            <ProjectCard
              title="Digital Healthcare Accessbility Project"
              description="Leveraging webscraping to perform accessibility analysis."
              color="#B86F52"
              link="#"
            />
            <ProjectCard
              title="Course Work"
              description="Studies and Course Work at Penn State."
              color="#9FA4C4"
              link="#"
            />
          </div>
        </Section>
        <Section title="Skills" id="skills">
          <SkillsGrid />
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
      <SocialIcons />
      <div className="hero-text">
        <h1 className="hero-name">Victoria Puck-Karam</h1>
        <h3 className="hero-title">Backend Software Engineer & Data Scientist</h3>
        <p className="hero-blurb">
        Passionate about building scalable, data driven systems, specializing in backend engineering and cloud infrastructure.
        </p>
      </div>
      <div className="hero-photo">
        <img src={toya} alt="Photo of Victoria Puck-Karam" />
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
  const cardRef = useRef(null);

  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((centerX - x) / centerX) * 15;

    setTransformStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s",
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease",
    });
  };

  return (
    <div
      className="card fade-section"
      style={{ ...style, ...transformStyle }}
      ref={cardRef}
      onClick={() => (window.location.href = link)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") window.location.href = link;
      }}
    >
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function SkillsGrid() {
  const skills = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" }
  ];

  return (
    <div className="skills-grid fade-section">
      {skills.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <img src={skill.logo} alt={`${skill.name} logo`} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="social-icons">
    
      <a href="mailto:vbp5103@gmail.com" target="_blank" rel="noopener noreferrer">
      <BiMailSend size={35} />
      </a>
      <a href="https://www.linkedin.com/in/victoriapuckkaram/" target="_blank" rel="noopener noreferrer">
        <BiLogoLinkedinSquare size={35} />
      </a>
      <a href="https://github.com/victoriapuck15" target="_blank" rel="noopener noreferrer">
        <BiLogoGithub size={35} />
      </a>
    </div>
  );
}


export default App;
