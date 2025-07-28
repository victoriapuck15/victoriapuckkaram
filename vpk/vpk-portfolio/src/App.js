import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import toya from "./toya.JPG";
import { BiLogoGithub } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
//import { DiPython,DiNodejsSmall,DiJavascript,DiJava,DiPostgresql,DiMongodb,DiSqllite} from "react-icons/di";
//import { SiTerraform } from "react-icons/si";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import Panel from "@site/src/component/Panel";


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
        <ProjectsSlider/>
       
        <Section title="Skills" id="skills">
          <SkillsGrid />
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
      <a href="#contact">Resume</a>
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

function ProjectsSlider(){
  const flickingRef = React.createRef();
  const {
    indexProgress
  } = useFlickingReactiveAPI(flickingRef);
  const length = 5;
  return (
    <Flicking ref={flickingRef} circular={true} className="flicking-coverflow">
      {[0, 1, 2, 3, 4].map((index) => {
        const childProgress = (index - indexProgress + length * 1.5) % length -  length * 0.5;
        const scale = Math.max(0, 0.9 - Math.abs(childProgress) * 0.2);

        return <Panel key={index} index={index} style={{
          transformOrigin: `${50 - childProgress * 50}% 50%`,
          transform: `rotateY(${-childProgress * 50}deg) scale(${scale})`
        }} />;
      })}
    </Flicking>
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


export default App;
