import React, { useState } from 'react';
import './App.css';
import { User, Code, Wrench, Mail, ShoppingCart, Plane, Globe, Github, Linkedin, Send } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Interactive web-based physics simulator with realistic e-beam modeling using Gaussian point spread functions and dose accumulation.",
      tech: ["Java", "Spring Boot", "MySQL"],
      year: "2025",
      link: "#",
      icon: "ShoppingCart"
    },
    {
      id: 2,
      title: "Infineon SkySpotter Autonomous Parking Drone",
      description: "Advanced drone with custom flight control algorithms and real-time data processing.",
      tech: ["Python", "Embedded Systems", "RaspberryPi", "Pixhawk", "Spring Security"],
      year: "2025",
      link: "#",
      icon: "Plane"
    },
    {
      id: 3,
      title: "Personal Portfolio Page",
      description: "This website",
      tech: ["React", "CSS", "JavaScript"],
      year: "2025",
      link: "#",
      icon: "Globe"
    }
  ]

  // Helper to render the correct icon
  function ProjectIcon({ iconName }) {
    const icons = {
      ShoppingCart: ShoppingCart,
      Plane: Plane,
      Globe: Globe
    };
    
    const Icon = icons[iconName];
    return Icon ? <Icon size={32} /> : null;
  }

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Navigation Icons */}
        <nav className="nav">
          <button
            className={`nav-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={24} />
          </button>

          <button
            className={`nav-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <Code size={24} />
          </button>

          <button
            className={`nav-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <Wrench size={24} />
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === 'profile' && (
          <div className="content-section">
            <h1>Selamat Datang!</h1>
            <p className="subtitle">EECS Student • Developer • Researcher</p>
            
            <div className="profile-content">
              <section className="profile-section">
                <h2>About Me</h2>
                <p>
                  I'm Isaac Puah and I'm an EECS student at UC Berkeley. I'm passionate about learning
                  in general, not just specifically coding and tech. Welcome to my personal corner
                  of the internet where I document my journey through life.
                </p>
                <p>
                  Currently, I'm working on the Electrical Steering team at CalSol,
                  where we're building Berkeley's solar car, and conducting nanotechnology 
                  research under Professor Waqas Khalid, exploring electron beam lithography 
                  and nanofabrication techniques.
                </p>
                <p>
                </p>
              </section>

              <section className="profile-section">
                <h2>What I'm Working On</h2>
                <ul className="working-on-list">
                  <li>Learning React and modern web development</li>
                  <li>Exploring signal processing and circuit design</li>
                </ul>
              </section>

              <section className="profile-section">
                <h2>Skills</h2>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="skill-tags">
                      <span>Python</span>
                      <span>TypeScript</span>
                      <span>JavaScript</span>
                      <span>Java</span>
                      <span>C/C++</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3>Web Development</h3>
                    <div className="skill-tags">
                      <span>React</span>
                      <span>Node.js</span>
                      <span>Spring Boot</span>
                      <span>HTML/CSS</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3>Engineering</h3>
                    <div className="skill-tags">
                      <span>Signal Processing</span>
                      <span>Circuit Design</span>
                      <span>Embedded Systems</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="profile-section">
                <h2>Get In Touch</h2>
                
                <div className="contact-methods">
                  <a href="mailto:isaacpuah@berkeley.edu" className="contact-card">
                    <div className="contact-icon">
                      <Mail size={28} />
                    </div>
                    <div className="contact-info">
                      <h3>Email</h3>
                    </div>
                    <Send size={20} className="contact-arrow" />
                  </a>

                  <a href="https://github.com/isaacpuah" target="_blank" rel="noopener noreferrer" className="contact-card">
                    <div className="contact-icon">
                      <Github size={28} />
                    </div>
                    <div className="contact-info">
                      <h3>GitHub</h3>
                    </div>
                    <Send size={20} className="contact-arrow" />
                  </a>

                  <a href="https://linkedin.com/in/isaac-puah" target="_blank" rel="noopener noreferrer" className="contact-card">
                    <div className="contact-icon">
                      <Linkedin size={28} />
                    </div>
                    <div className="contact-info">
                      <h3>LinkedIn</h3>
                    </div>
                    <Send size={20} className="contact-arrow" />
                  </a>
                </div>

                <a href="/resume.pdf" download className="resume-button">
                  <Send size={20} />
                  Download Resume
                </a>
              </section>

            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="content-section">
            <h1>Projects</h1>
            
            <div className="projects-grid">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => console.log(`Clicked project ${project.id}`)}
              >
                <div className="project-icon">
                  <ProjectIcon iconName={project.icon} />
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}

        {activeTab === 'inprogress' && (
          <div className="content-section">
            <h1>In Progress</h1>
            <p className="subtitle">Coming Soon</p>
            <p>This section is under construction. Check back later for exciting new features!</p>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;