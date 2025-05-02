import React from "react";
import "../../styles/About.css";
import { Linkedin } from "lucide-react";
import authorImage from "../../assets/Haroon.jpg";

const PortfolioPage = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="brand">PlutoX</h1>
        <div className="header-content">
          <div className="intro">
            <h2>Hi, I'm Haroon Ahmad Khan</h2>
            <p className="subtitle">
              Passionate Developer & Creative Problem Solver
            </p>
            <p className="description">
              Building digital experiences that blend creativity with technical
              excellence. Welcome to my journey in the world of development.
            </p>
            <div className="header-buttons">
              <button className="btn primary">My Projects</button>
              <button className="btn secondary">Contact Me</button>
            </div>
          </div>
          <img
            src={authorImage}
            alt="Haroon Ahmad Khan"
            className="author-image"
          />
        </div>
        {/* <div className="author-tag">-Haroon Ahmad Khan</div> */}
      </header>

      {/* Vision Section */}
      <section className="card vision-section">
        <div className="section-icon">
          <span className="icon">📝</span>
        </div>
        <h3>My Vision</h3>
        <p>
          I envision a digital landscape where technology empowers individuals
          and organizations to achieve their fullest potential. As a developer,
          I strive to create solutions that are not only functionally excellent
          but also intuitive and accessible to all users.
        </p>
        <p>
          Through PlutoX, I aim to push the boundaries of what's possible in web
          development by combining cutting-edge technologies with thoughtful
          design principles. My goal is to build applications that make a
          meaningful impact and provide exceptional user experiences.
        </p>
      </section>

      {/* Technical Expertise Section */}
      <section className="expertise-section">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          Armed with a diverse skill set, I specialize in creating robust and
          scalable web applications.
        </p>

        <div className="expertise-cards">
          {/* Frontend Development */}
          <div className="card expertise-card">
            <div className="card-icon">
              <span className="icon">🌐</span>
            </div>
            <h3>Frontend Development</h3>
            <div className="skills">
              {[
                "HTML",
                "JavaScript",
                "React",
                "CSS",
                "TypeScript",
                "Tailwind",
              ].map((skill, idx) => (
                <span key={idx} className={`skill-tag ${skill.toLowerCase()}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="card expertise-card">
            <div className="card-icon">
              <span className="icon">🔧</span>
            </div>
            <h3>Backend Development</h3>
            <div className="skills">
              {["Node.js", "Express", "MongoDB", "SQL", "REST API"].map(
                (skill, idx) => (
                  <span
                    key={idx}
                    className={`skill-tag ${skill
                      .toLowerCase()
                      .replace(/[\s\/.]/g, "")}`}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="card expertise-card">
            <div className="card-icon">
              <span className="icon">🔍</span>
            </div>
            <h3>Additional Skills</h3>
            <div className="skills">
              {[
                "UI/UX Design",
                "Git",
                "Responsive Design",
                "Testing",
                "Performance Optimization",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className={`skill-tag ${skill
                    .toLowerCase()
                    .replace(/\s|\/|-/g, "")}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">
          The path that led me to becoming the developer I am today.
        </p>

        <div className="journey-columns">
          <div className="journey-column">
            <h3>Education</h3>
            <div className="journey-item">
              <h4>Computer Science</h4>
              <p>
                With a strong foundation in computer science principles, I've
                developed a deep understanding of algorithms, data structures,
                and programming concepts. This academic background has guided my
                approach to development.
              </p>
            </div>
          </div>
          <div className="journey-column">
            <h3>Experience</h3>
            <div className="journey-item">
              <h4>Continuous Learning</h4>
              <p>
                I believe in the power of lifelong learning. With each project,
                I challenge myself to explore new technologies and
                methodologies, constantly upping my craft as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-card connect">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>haroonak88@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+92 3267477287</span>
            </div>
            <div className="contact-item">
              <a
                href="https://www.linkedin.com/in/haroon-ahmad-khan-370703295"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline hover:text-blue-800"
              >
                <Linkedin size={20} />
                LinkedIn Haroon Ahmad Khan
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
