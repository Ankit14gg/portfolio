import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, Code, GraduationCap, 
  ArrowRight, Download, Sparkles, Menu, X, Sun, Moon, Globe 
} from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- INTELLIGENT DARK MODE STATE ---
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme ? savedTheme === 'dark' : true; 
  });

  // --- THEME SWITCHING LOGIC ---
  useEffect(() => {
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- UPDATED PROJECTS WITH LINKS ---
  const projects = [
    {
      title: "Pulselyx",
      subtitle: "Health Insight Agent",
      description: "An AI-enabled health analytics platform that ingests health reports and delivers actionable insights.",
      tech: ["TypeScript", "JavaScript", "REST APIs", "AI/ML"],
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      bgGradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
      link: "https://github.com/Ankit14gg/Pulselyx" // Update this if your repo name is different
    },
    {
      title: "Farm Click",
      subtitle: "Agricultural Tool Sharing",
      description: "User-friendly Android application enabling farmers to list agricultural tools for rent.",
      tech: ["Java", "Android", "Firebase"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
      link: "https://github.com/Ankit14gg/Farm-Click" // Update this if your repo name is different
    }
  ];

  const skills = [
    { name: "Power BI", level: 85, icon: "📊", color: "from-yellow-400 to-orange-500" },
    { name: "Excel & Data", level: 80, icon: "📈", color: "from-green-400 to-emerald-500" },
    { name: "SQL", level: 70, icon: "🗄️", color: "from-blue-400 to-indigo-500" },
    { name: "Full Stack", level: 75, icon: "💻", color: "from-purple-400 to-pink-500" },
    { name: "Java & Android", level: 70, icon: "📱", color: "from-red-400 to-rose-500" },
    { name: "TypeScript", level: 75, icon: "⚡", color: "from-cyan-400 to-blue-500" }
  ];

  const languages = [
    { name: "English", level: 98, color: "bg-blue-500" },
    { name: "Hindi", level: 95, color: "bg-orange-500" },
    { name: "Marathi", level: 80, color: "bg-green-500" },
    { name: "Bengali", level: 45, color: "bg-red-500" }
  ];

  const experience = [
    {
      company: "EdiGlobe",
      role: "Web Development",
      period: "Jun 2025 - Aug 2025",
      type: "Internship",
      icon: "🌐"
    },
    {
      company: "SUMAGO INFOTECH",
      role: "Full Stack Developer",
      period: "Jul 2022 - Aug 2022",
      description: "Worked on building and maintaining web applications.",
      icon: "⚙️"
    }
  ];

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    // MAIN WRAPPER
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white overflow-hidden font-sans transition-colors duration-500 selection:bg-purple-500/30">
        
        {/* --- BACKGROUND EFFECTS --- */}
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:hidden -z-10"></div>
        <div className="fixed inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-cyan-900/20 pointer-events-none -z-10"></div>
        
        {/* Dark Mode Mouse Glow */}
        <div 
          className="hidden dark:block fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 blur-[100px] opacity-10 bg-gradient-to-r from-purple-500 to-cyan-500 mix-blend-screen transition-transform duration-200 ease-out"
          style={{ left: mousePosition.x - 250, top: mousePosition.y - 250 }}
        ></div>

        {/* --- NAVIGATION BAR --- */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-4 shadow-sm dark:shadow-none' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              
              {/* Name (Ankit Saha) */}
              <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('home')}>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                  Ankit Saha
                </h1>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex gap-8 bg-gray-100 dark:bg-white/5 px-6 py-2 rounded-full border border-gray-200 dark:border-white/5 backdrop-blur-sm transition-colors duration-300">
                  {navLinks.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-sm font-medium relative group transition-colors ${
                        activeSection === item.toLowerCase() 
                        ? 'text-purple-600 dark:text-white' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      {item}
                      {activeSection === item.toLowerCase() && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
                      )}
                    </button>
                  ))}
                </div>

                {/* THEME TOGGLE BUTTON */}
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-white/20 transition-all transform hover:scale-110 shadow-sm border border-gray-200 dark:border-transparent"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile Controls */}
              <div className="flex items-center gap-4 md:hidden">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-yellow-400 border border-gray-200 dark:border-transparent"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button 
                  className="text-gray-800 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Full Screen Menu */}
          <div className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
             {navLinks.map((item, index) => (
               <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-3xl font-bold transition-all duration-300 ${activeSection === item.toLowerCase() ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' : 'text-gray-800 dark:text-gray-300'}`}
               >
                  {item}
               </button>
             ))}
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-2 mb-8 shadow-sm dark:shadow-none animate-fade-in-up">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 tracking-wide">Available for Work</span>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
                  <span className="block mb-2">Software</span>
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    Engineer
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl">
                  Full Stack Developer & Data Analyst crafting elegant solutions for complex problems.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  <a href="mailto:ankit200314@gmail.com" className="group bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:opacity-80 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                    Let's Talk <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                  
                  {/* Resume Link */}
                  <a 
                    href="https://drive.google.com/file/d/1jF5ILmomlJ2EVRWGpcNMEjL6XRSEeIcq/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <Download size={20} /> Resume
                  </a> 
                </div>
                
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/Ankit14gg" },
                    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/ankitgg14" },
                    { icon: <Mail size={20} />, href: "mailto:ankit200314@gmail.com" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} className="w-12 h-12 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-600 dark:hover:border-purple-400 hover:scale-110 transition-all shadow-sm">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                <div className="relative w-80 h-80 md:w-[450px] md:h-[500px]">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-30 animate-pulse"></div>
                  
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl z-10 group bg-white dark:bg-black">
                    {/* IMAGE - Make sure profile.png is in the public folder */}
                    <img src="profile.png" alt="Ankit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    
                    <div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white">
                            <Code size={20} />
                          </div>
                          <div>
                            <p className="text-gray-900 dark:text-white font-bold">Ankit Saha</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
               <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h3>
               <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              {[
                { icon: <GraduationCap size={28} />, title: "Education", text: "B.Tech CSE", sub: "Ajeenkya D Y Patil University" },
                { icon: <MapPin size={28} />, title: "Location", text: "Pune, Maharashtra", sub: "Open to Relocation" }
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all shadow-lg dark:shadow-none group text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform mx-auto">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{item.text}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
            
            {/* LANGUAGES SECTION */}
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-lg dark:shadow-none mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-purple-500" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Language Proficiency</h4>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{lang.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{lang.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${lang.color} transition-all duration-1000`} 
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border-l-4 border-purple-500 rounded-r-2xl p-8 shadow-md">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic">
                "I'm a motivated software engineering student with hands-on experience in full stack development and data analysis. I love building applications that solve real-world problems and make a positive impact."
              </p>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="relative py-20 px-6 bg-gray-100/50 dark:bg-black/40">
          <div className="max-w-7xl mx-auto relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">Featured Projects</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 transition-all overflow-hidden hover:-translate-y-2 shadow-lg dark:shadow-none"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                         <h4 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{project.title}</h4>
                         <p className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>{project.subtitle}</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-white/10 p-2 rounded-lg text-gray-500 dark:text-gray-400">
                        <Code size={20} />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* --- UPDATED LINK BUTTON --- */}
                    <a 
                      href={https://github.com/Ankit14gg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text group-hover:gap-3 transition-all cursor-pointer`}
                    >
                      View Details <ArrowRight size={16} className={`text-purple-500`} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">Skills</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 transition-all group shadow-md dark:shadow-none hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{skill.icon}</span>
                      <span className="font-bold text-lg text-gray-900
