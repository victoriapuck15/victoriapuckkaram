import React, { useEffect, useState } from "react";
import "./App.css";
import toya from "./toya.JPG";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import projects from "./projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import timelineData from "./timeline";
import awards from "./awards";



function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTimelineEvent, setSelectedTimelineEvent] = useState(null);


  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <HeroSection />
<main className="content">
  <Section id="projects" title="">
    <div className="projects-wrapper">
      <div className="slider-column">
         <h2>Projects</h2>
        <Slider {...settings}>
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              title={proj.title}
              description={proj.description}
              color={proj.color}
              icon1={proj.icon1}
              icon2={proj.icon2}
              icon3={proj.icon3}
              onClick={() => setSelectedProject(proj)}
            />
          ))}
        </Slider>
<div className="awards-column">
  <h2>Awards & Certifications</h2>
  <div className="awards-wrapper">
    {awards.map((award) => {
      if (award.type === "badge") {
        return (
          <a
            key={award.id}
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="award-badge"
            title={award.name}
          >
            <img src={award.image} alt={award.name} />
          </a>
        );
      } else if (award.type === "icon") {
        const Icon = award.icon;
        return (
          <a
            key={award.id}
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="award-icon"
            title={award.name}
          >
            <Icon size={50} />
          </a>
        );
      }
      return null;
    })}
  </div>
</div>

      </div>
      <div className="text-column">
        <h2>Experience</h2>
        <div className="timeline-wrapper">
          {timelineData.map((event) => (
            <TimelineEvent
              key={event.id}
              event={event}
              onClick={() => setSelectedTimelineEvent(event)}
            />
          ))}
        </div>
      </div>

      {selectedTimelineEvent && (
        <TimelineModal
          event={selectedTimelineEvent}
          onClose={() => setSelectedTimelineEvent(null)}
        />
      )}

    </div>
  </Section>
</main>


      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
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
          Passionate about building scalable, data-driven systems, specializing in backend engineering and cloud infrastructure.
        </p>
        <a
          href="https://drive.google.com/file/d/1nayxdvH_tU5IVYvcECMRQrsxx8HgGZnw/view?usp=sharing" 
          download
          className="resume-button"
        >
          Download Resume
        </a>
      </div>
      <div className="hero-photo">
        <img src={toya} alt="Victoria Puck-Karam" />
      </div>
    </section>
  );
}

function TimelineEvent({ event, onClick }) {
  return (
    <div
      className="timeline-event"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="timeline-header">
        <h3 className="company-name">{event.company}</h3>
        <h4 className="role-title">{event.role}</h4>
      </div>
      <p className="timeline-description">{event.description}</p>
      <div className="timeline-skills">
        {event.skills.map((iconClass, idx) => (
          <i key={idx} className={iconClass} aria-hidden="true"></i>
        ))}
      </div>
    </div>
  );
}


function TimelineModal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h2>{event.title}</h2>

        <ul className="modal-bullets">
          {event.details.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>

        {event.details.link && (
          <a
            href={event.details.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            View More
          </a>
        )}
      </div>
    </div>
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

function ProjectCard({ title, description, color, onClick, icon1, icon2, icon3 }) {
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-icons">
          <i className={icon1} aria-hidden="true"></i>
          <i className={icon2} aria-hidden="true"></i>
          <i className={icon3} aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}




function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <p className="modal-description">{project.description}</p>

        <div className="modal-links">
          {project.links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <h3>{project.section1}</h3>
        <p>{project.researchQuestion}</p>

        <h3>Techniques Used</h3>
        <ul>
          {project.techniques.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>

        <h3>{project.lastTitle}</h3>
        <p>{project.outcomes}</p>
      </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="mailto:vbp5103@gmail.com" target="_blank" rel="noopener noreferrer">
        <MdOutlineMailOutline size={35} />
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

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  centerPadding: '0px',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};






export default App;
