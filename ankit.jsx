 import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, GraduationCap, Award, ArrowRight, Download, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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

  const projects = [
    {
      title: "Pulselyx",
      subtitle: "Health Insight Agent",
      description: "An AI-enabled health analytics platform that ingests health reports and delivers actionable insights. Features responsive frontend and robust backend for processing medical data.",
      tech: ["TypeScript", "JavaScript", "REST APIs", "AI/ML"],
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      bgGradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10"
    },
    {
      title: "Farm Click",
      subtitle: "Agricultural Tool Sharing",
      description: "User-friendly Android application enabling farmers to list agricultural tools for rent. Promotes equipment sharing, reducing costs and improving access to farming tools in rural areas.",
      tech: ["Java", "Android", "Firebase"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10"
    }
  ];

  const skills = [
    { name: "Power BI", level: 85, icon: "📊", color: "from-yellow-400 to-orange-500" },
    { name: "Excel & Data Analysis", level: 80, icon: "📈", color: "from-green-400 to-emerald-500" },
    { name: "SQL", level: 70, icon: "🗄️", color: "from-blue-400 to-indigo-500" },
    { name: "Full Stack Development", level: 75, icon: "💻", color: "from-purple-400 to-pink-500" },
    { name: "Java & Android", level: 70, icon: "📱", color: "from-red-400 to-rose-500" },
    { name: "TypeScript/JavaScript", level: 75, icon: "⚡", color: "from-cyan-400 to-blue-500" }
  ];

  const experience = [
    {
      company: "EdiGlobe",
      role: "Web Development",
      period: "Jun 2025 - Aug 2025",
      type: "Training & Internship",
      icon: "🌐"
    },
    {
      company: "SUMAGO INFOTECH PVT LTD",
      role: "Full Stack Developer",
      period: "Jul 2022 - Aug 2022",
      description: "Worked on building and maintaining web applications, handling both front-end and back-end development.",
      icon: "⚙️"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-cyan-900/20 pointer-events-none"></div>
      
      {/* Cursor glow effect */}
      <div 
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 blur-[100px] opacity-10 bg-gradient-to-r from-purple-500 to-cyan-500 mix-blend-screen"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          transition: 'transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1)'
        }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <Sparkles size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Ankit Saha
              </h1>
            </div>
            
            <div className="hidden md:flex gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-gray-300 tracking-wide">Available for new opportunities</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
                <span className="block text-white mb-2">Software</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Engineer
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                Full Stack Developer & Data Analyst crafting elegant solutions for complex problems. Passionate about AI, mobile apps, and transforming data into actionable insights.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="mailto:ankit200314@gmail.com" className="group bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  Let's Talk <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <button className="border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm">
                  <Download size={20} /> Download CV
                </button>
              </div>
              
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/ankitgg14", color: "hover:text-purple-400 hover:border-purple-400" },
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/ankit14gg", color: "hover:text-cyan-400 hover:border-cyan-400" },
                  { icon: <Mail size={20} />, href: "mailto:ankit200314@gmail.com", color: "hover:text-pink-400 hover:border-pink-400" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right Image - The Modern Photo Integration */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[500px]">
                
                {/* Background Glows */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-[2rem] border border-white/10 backdrop-blur-sm z-0"></div>
                
                {/* Image Container with Custom Shape */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 group">
                   {/* !!! IMPORTANT:
                      Replace the src below with the actual path to your photo.
                      e.g., src="/profile.jpg" if the file is in your public folder.
                   */}
                  <img
                    src="profile.png"
                    alt="Ankit Saha"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                          <Code size={20} />
                        </div>
                        <div>
                          <p className="text-white font-bold">Ankit Saha</p>
                          <p className="text-xs text-gray-300">Full Stack Developer</p>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <h3 className="text-4xl md:text-5xl font-bold mb-4">
               <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
             </h3>
             <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Education</h4>
              <p className="text-gray-300 font-medium mb-1">B.Tech CSE (Software Engineering)</p>
              <p className="text-sm text-gray-400">Ajeenkya D Y Patil University</p>
              <p className="text-sm text-gray-500 mt-2 bg-white/5 inline-block px-3 py-1 rounded-full">2023 - 2026</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Location</h4>
              <p className="text-gray-300">Pune, Maharashtra</p>
              <p className="text-sm text-gray-400">India</p>
              <p className="text-sm text-gray-500 mt-2 bg-white/5 inline-block px-3 py-1 rounded-full">Open to Relocation</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Contact</h4>
              <a href="mailto:ankit200314@gmail.com" className="text-cyan-400 text-sm hover:underline">ankit200314@gmail.com</a>
              <p className="text-sm text-gray-500 mt-2 bg-white/5 inline-block px-3 py-1 rounded-full">Available 24/7</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-xl border-l-4 border-purple-500 rounded-r-2xl p-8 shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed italic">
              "I'm a motivated software engineering student with hands-on experience in full stack development and data analysis. I love building applications that solve real-world problems and make a positive impact. From creating AI-powered health platforms to developing tools for farmers, I'm passionate about using technology to improve lives."
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
            </h3>
            <p className="text-gray-400">Some of my recent works</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all overflow-hidden hover:-translate-y-2 duration-500"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                       <h4 className="text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{project.title}</h4>
                       <p className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>{project.subtitle}</p>
                    </div>
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Code size={20} className="text-gray-400 group-hover:text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm h-20 overflow-hidden">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-black/40 border border-white/10 px-3 py-1 rounded-full text-xs text-gray-300 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text group-hover:gap-3 transition-all`}>
                    View Details <ArrowRight size={16} className={`text-${project.gradient.split('-')[1]}-500`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills & Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl filter drop-shadow-lg">{skill.icon}</span>
                    <span className="font-bold text-lg tracking-wide">{skill.name}</span>
                  </div>
                  <span className="font-mono text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden border border-white/5">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                     <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-b from-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-center text-gray-400 mb-8 uppercase tracking-widest text-sm">Tools & Technologies</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['JIRA', 'Postman', 'AutoCAD', 'Firebase', 'Git', 'VS Code', 'Android Studio'].map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-3 text-center font-semibold text-gray-300 hover:bg-white/10 hover:text-white hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 transition-all cursor-default">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-5xl mx-auto relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Work Experience</span>
          </h3>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Timeline Dot */}
                <div className="absolute top-0 left-0 w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all ml-auto md:ml-0 shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-xl mb-2">
                            {exp.icon}
                        </div>
                        <span className="bg-purple-500/20 text-purple-200 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-bold">
                            {exp.period}
                        </span>
                    </div>
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <p className="text-gray-400 font-medium">{exp.company}</p>
                  </div>
                  {exp.description && (
                    <p className="text-gray-300 leading-relaxed text-sm border-t border-white/5 pt-4 mt-2">{exp.description}</p>
                  )}
                  {exp.type && (
                    <p className="text-gray-500 italic mt-2 text-xs uppercase tracking-wider">{exp.type}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Let's Build Something Amazing</span>
          </h3>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:ankit200314@gmail.com" className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all">
                <Mail size={28} />
              </div>
              <h5 className="font-bold text-lg mb-2">Email Me</h5>
              <p className="text-gray-400 text-sm">ankit200314@gmail.com</p>
            </a>
            
            <a href="tel:+919322186334" className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
                <Phone size={28} />
              </div>
              <h5 className="font-bold text-lg mb-2">Call Me</h5>
              <p className="text-gray-400 text-sm">+91 9322186334</p>
            </a>
            
            <a href="https://linkedin.com/in/ankit14gg" className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all">
                <Linkedin size={28} />
              </div>
              <h5 className="font-bold text-lg mb-2">Connect</h5>
              <p className="text-gray-400 text-sm">LinkedIn Profile</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-center md:text-left">
             <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-1">Ankit Saha</h2>
             <p className="text-gray-500 text-sm">© 2026. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/ankitgg14" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/ankit14gg" className="text-gray-500 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:ankit200314@gmail.com" className="text-gray-500 hover:text-pink-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}