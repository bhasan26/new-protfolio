import React, { useState, useEffect } from 'react';
import { SKILLS_DATA, PROJECTS, LEADERSHIP_DATA } from './constants';
import type { Project, SkillCategory, LeadershipItem } from './types';

// Helper function for smooth scrolling
const smoothScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

// --- Sub-components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); smoothScroll('hero'); }} className="text-2xl font-bold font-serif text-whitworth-red hover:opacity-80 transition-opacity">
          Bilal Hasan
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); smoothScroll(link.id); }} className="text-dark-charcoal font-semibold hover:text-whitworth-red transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button could be added here */}
        </div>
      </nav>
    </header>
  );
};

const Hero: React.FC = () => (
  <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
    <div className="absolute inset-0 bg-dark-charcoal opacity-60"></div>
    <div className="relative z-10 px-4">
      <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 leading-tight">
        Software & ML Engineer
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
        Results-driven engineer building intelligent, real-time systems that solve critical problems in AI, robotics, and cybersecurity.
      </p>
      <button onClick={() => smoothScroll('projects')} className="bg-whitworth-red text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
        View My Work
      </button>
    </div>
  </section>
);

const About: React.FC = () => (
  <section id="about" className="py-20 bg-light-gray">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-dark-charcoal text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img src="https://picsum.photos/seed/avatar/400/400" alt="Bilal Hasan" className="rounded-full w-64 h-64 object-cover shadow-lg" />
        </div>
        <div className="md:col-span-2 text-lg text-gray-700 space-y-4">
          <p>
            I am a dedicated Computer Science student at Whitworth University with a passion for developing intelligent systems. My experience ranges from improving industrial IT infrastructure at Kaiser Aluminum to providing essential technical support for the Whitworth community and assisting refugee families with digital literacy at the IRC.
          </p>
          <p>
            With a strong foundation in a wide array of technologies, from full-stack development to machine learning and robotics, I enjoy tackling complex challenges. I am driven by a desire to create real-time solutions for critical problems in AI, robotics, and cybersecurity.
          </p>
          <p>
            As a leader in campus tech groups like WhitCode and the Google Developer Group, I am committed to building communities and sharing knowledge about the latest advancements in technology.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SkillCategoryCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-bold font-serif text-dark-charcoal mb-4 border-b-2 border-whitworth-red pb-2">{category.title}</h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map(skill => (
        <span key={skill} className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);


const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-dark-charcoal text-center mb-12">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {SKILLS_DATA.map((category) => <SkillCategoryCard key={category.title} category={category} />)}
      </div>
    </div>
  </section>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold font-serif text-dark-charcoal mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      {project.details && (
        <ul className="list-disc list-inside text-gray-600 mb-4 text-sm space-y-1">
          {project.details.map((detail, index) => <li key={index}>{detail}</li>)}
        </ul>
      )}
      <div className="mb-4 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="pt-4 border-t border-gray-200 flex justify-between">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-whitworth-red font-semibold hover:underline">Live Demo</a>
        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold hover:underline">Source Code</a>
      </div>
    </div>
  </div>
);


const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-light-gray">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-dark-charcoal text-center mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </div>
  </section>
);

const LeadershipCard: React.FC<{ item: LeadershipItem }> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold font-serif text-dark-charcoal">{item.title}</h3>
                <p className="text-md font-semibold text-whitworth-red">{item.organization}</p>
            </div>
            <p className="text-sm text-gray-500 font-medium">{item.dates}</p>
        </div>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
            {item.description.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
    </div>
);

const Leadership: React.FC = () => (
    <section id="leadership" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-dark-charcoal text-center mb-12">Leadership & Involvement</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {LEADERSHIP_DATA.map((item) => <LeadershipCard key={item.title} item={item} />)}
            </div>
        </div>
    </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="py-20 bg-dark-charcoal text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Let's Connect</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to say hello!
      </p>
      <div className="flex justify-center items-center space-x-6">
        <a href="mailto:bhasan26@icloud.com" className="text-whitworth-red bg-white font-bold py-3 px-8 rounded-full hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
          bhasan26@icloud.com
        </a>
      </div>
        <div className="flex justify-center mt-8 space-x-6">
            <a href="https://github.com/bhasan26" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub Profile">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/bhasan26/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
        </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
    <footer className="bg-white py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Bilal Hasan. All Rights Reserved.</p>
        </div>
    </footer>
);

// --- Main App Component ---

function App() {
  return (
    <div className="bg-white text-dark-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
