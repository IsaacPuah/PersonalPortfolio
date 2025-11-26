import React, { useState } from 'react';
import './App.css';
import { User, Code, GraduationCap, Mail } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('profile');

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
            <GraduationCap size={24} />
          </button>

          <button 
            className={`nav-button ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <Mail size={24} />
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === 'profile' && (
          <div className="content-section">
            <h1>Hi, I'm Isaac</h1>
            <p className="subtitle">EECS Student • Developer • Researcher</p>
            <p>I'm an EECS student at UC Berkeley passionate about building cool things.</p>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="content-section">
            <h1>Projects</h1>
            <p>My projects will go here...</p>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="content-section">
            <h1>Education</h1>
            <p>University of California, Berkeley</p>
            <p>B.S. in Electrical Engineering & Computer Science</p>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="content-section">
            <h1>Get In Touch</h1>
            <p>Email: your.email@berkeley.edu</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;