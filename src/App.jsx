import React, { useState, useEffect, useRef } from 'react';
import { 
  Sun, Moon, Github, Linkedin, Mail, ExternalLink, 
  ChevronRight, Brain, Code, Database, 
  Terminal, User, Briefcase, GraduationCap, Award,
  ArrowUp, Cpu, Layers, Image as ImageIcon, Zap, Plus, 
  Verified, MonitorPlay, BookOpen, Download, Phone
} from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.closest('a, button, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);
    
    const timer = setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section, footer').forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const personalInfo = {
    name: "Shaik Mahammad Yasin",
    first: "Shaik Mahammad",
    last: "Yasin",
    title: "Software Engineer @ Cognizant",
    tagline: "🚀 Exploring the Future of AI | 🤖 Generative AI | 📊 Machine Learning | 🛡️ Deep Learning",
    email: "shaikmahammadyasin11@gmail.com",
    phone: "+91 7981937681",
    linkedin: "https://www.linkedin.com/in/mahammad-yasin-shaik-8427ba201/",
    github: "https://github.com/ShaikYasin18?tab=repositories",
    medium: "https://medium.com/@shaikmahammadyasin11",
    summary: "Software Engineer at Cognizant specialized in Generative AI, Machine Learning, and Deep Learning. As an innovation-driven thinker, I architect production-ready AI solutions that scale. My expertise spans building RAG pipelines, fine-tuning LLMs, and developing high-precision neural architectures on Google Cloud Platform."
  };

  const experiences = [
    {
      company: "Cognizant",
      role: "Software Engineer (Data Science Focus)",
      location: "Bengaluru",
      period: "2023 — Present",
      achievements: [
        "Engineering high-performance ML pipelines for Google Play Protect services.",
        "Architected a RAG-based LLM assistant achieving a ~5% uplift in agent productivity.",
        "Developed neural classification models resulting in ~5% higher decision reliability.",
        "Released production ML services on Google Cloud Platform (GCP)."
      ],
      tech: ["Python", "TensorFlow", "LangChain", "GCP", "Vector DBs"]
    },
    {
      company: "Soul AI",
      role: "AI Specialist (RLHF)",
      location: "Freelance",
      period: "2025 — Present",
      achievements: [
        "Reinforcing LLM reasoning through human-in-the-loop (RLHF) frameworks.",
        "Validated tool-augmented reasoning and API selection accuracy.",
        "Strengthened training signals for reward modeling through detailed output analysis."
      ],
      tech: ["RLHF", "LLM Eval", "Prompt Engineering"]
    },
    {
      company: "Cognizant",
      role: "Java Full Stack Engineer (Intern)",
      location: "Bengaluru",
      period: "Feb 2022 — Aug 2022",
      achievements: [
        "Built scalable web applications using Java and Spring Boot architectures.",
        "Integrated front-end components with RESTful APIs for seamless data flow.",
        "Engineered robust unit testing suites to maintain 95%+ code coverage."
      ],
      tech: ["Java", "Spring Boot", "REST API", "SQL", "JavaScript"]
    }
  ];

  const projects = [
    {
      id: "01",
      title: "CIFAR-10 Classifier",
      description: "Advanced vision systems utilizing high-precision CNN architectures for image intelligence.",
      tags: ["TensorFlow", "Keras", "OpenCV"],
    },
    {
      id: "02",
      title: "DeepSeek AI Suite",
      description: "Local LLM ecosystem featuring RAG-powered query systems and automated coding assistance.",
      tags: ["LangChain", "FAISS", "Ollama"],
    },
    {
      id: "03",
      title: "ChurnGuard",
      description: "Predictive ANN-based customer churn forecasting with real-time tracking dashboards.",
      tags: ["TensorFlow", "Plotly", "Streamlit"],
    },
    {
      id: "04",
      title: "Tennis Predictor",
      description: "Statistical classification tool utilizing automated preprocessing and Bayesian theory.",
      tags: ["Python", "Streamlit", "Pandas"],
    }
  ];

  const certifications = [
    { name: "Agentic AI Workshop", company: "Google", type: "Workshop" },
    { name: "GenAI Labs", company: "Google", type: "Lab" },
    { name: "Automate Data Capture at Scale with Document AI", company: "Google", type: "Skill Badge" },
    { name: "Prepare Data for ML APIs on Google Cloud", company: "Google", type: "Skill Badge" },
    { name: "Generative AI Fundamentals", company: "Databricks", type: "Accreditation" },
    { name: "Generative AI & Prompt Engineering", company: "Google Cloud", type: "Certification" },
    { name: "Prompt Design in Vertex AI", company: "Google", type: "Skill Badge" }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sree Vidyanikethan Engineering College (MBU)",
      score: "8.64 GPA",
      year: "2022"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Margadarsi Degree College (SV University)",
      score: "9.10 GPA",
      year: "2020"
    }
  ];

  const skillGroups = [
    {
      category: "Intelligence Architectures",
      skills: ["Transformers", "RAG", "RLHF", "CNN", "RNN", "ANN"]
    },
    {
      category: "Engineering Stack",
      skills: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "LangChain"]
    },
    {
      category: "Infrastructure",
      skills: ["GCP", "MLOps", "FAISS", "ChromaDB", "Git"]
    }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'} min-h-screen transition-colors duration-700 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden relative cursor-none`}>
      
      <div 
        className={`fixed pointer-events-none z-[10000] rounded-full border border-blue-500 transition-all duration-300 ease-out hidden md:block ${isHovering ? 'w-20 h-20 bg-blue-500/10 mix-blend-difference' : 'w-10 h-10'}`}
        style={{ left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%, -50%)' }}
      />

      <div className={`fixed inset-0 z-[999] bg-black flex items-center justify-center transition-transform duration-1000 ease-in-out ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="text-4xl font-black tracking-tighter text-white animate-pulse">SY // 2026</div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay noise-bg" />

      <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'backdrop-blur-md border-b border-white/5 py-5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase transition-transform hover:scale-105 cursor-pointer">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}.
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
            {['about', 'experience', 'projects', 'education', 'skills', 'certifications'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-blue-500 transition-colors uppercase">{item}</a>
            ))}
            <button onClick={toggleDarkMode} className="p-2 hover:scale-110 transition-transform">
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
        <div className={`max-w-7xl mx-auto px-10 relative z-10 w-full text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="overflow-hidden mb-6">
            <span className="block text-blue-500 font-mono text-xs tracking-[0.5em] uppercase animate-slide-up">
              {personalInfo.title}
            </span>
          </div>
          
          <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter mb-8 uppercase italic relative">
            <div className="overflow-hidden">
              <span className="block animate-reveal-curtain">{personalInfo.first}</span>
            </div>
            <div className="overflow-hidden">
              <span className="block animate-reveal-curtain-delayed text-transparent outline-text">{personalInfo.last}</span>
            </div>
          </h1>

          <div className="max-w-3xl mx-auto mb-16 px-4">
             <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8">
               {personalInfo.tagline}
             </div>
             <p className="opacity-60 text-lg md:text-xl font-light leading-relaxed">
               {personalInfo.summary}
             </p>
          </div>

          <div className="flex justify-center items-center">
            <a href="#projects" className="group flex items-center gap-4 text-xs font-black tracking-[0.3em] uppercase">
              Explore Work 
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ChevronRight size={16} />
              </div>
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />
      </section>

      <section id="about" className="py-40 relative border-t border-white/5">
        <div className={`max-w-7xl mx-auto px-10 transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid md:grid-cols-2 gap-20 lg:gap-40 items-start">
            <div className="max-w-full">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter">
                Innovation <br /> <span className="opacity-30">Driven Thinking</span>
              </h2>
            </div>
            <div className="space-y-12">
              <p className="text-xl md:text-2xl font-light opacity-60 leading-relaxed">
                As a Software Engineer at Cognizant, I bridge the gap between complex AI research and scalable production systems. My focus is on GenAI, Deep Learning, and building infrastructures of the future.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-12">
                <div>
                  <div className="text-2xl md:text-4xl font-black mb-2 tracking-tighter">~20%</div>
                  <div className="text-[9px] font-bold tracking-widest uppercase opacity-40">Efficiency</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-black mb-2 tracking-tighter">95%+</div>
                  <div className="text-[9px] font-bold tracking-widest uppercase opacity-40">Precision</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-black mb-2 tracking-tighter">GCP</div>
                  <div className="text-[9px] font-bold tracking-widest uppercase opacity-40">Production</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-40 bg-white/5 backdrop-blur-3xl">
        <div className={`max-w-7xl mx-auto px-10 transition-all duration-1000 ${visibleSections.experience ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-32 flex justify-between items-end">
            <h2 className="text-sm font-black tracking-[0.5em] uppercase opacity-40 italic">Engineering Roadmap</h2>
            <div className="h-[1px] bg-white/10 flex-1 mx-12 hidden md:block" />
            <div className="text-xs font-mono opacity-40">2022 // 2026</div>
          </div>

          <div className="space-y-32">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative">
                <div className="flex flex-col md:flex-row gap-12 md:gap-32">
                  <div className="md:w-1/3">
                    <span className="text-blue-500 font-mono text-xs mb-4 block tracking-widest">{exp.period}</span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">{exp.company}</h3>
                    <p className="opacity-40 font-bold text-sm tracking-widest uppercase">{exp.role}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="space-y-6">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-lg font-light opacity-60 leading-relaxed hover:opacity-100 transition-opacity flex gap-6">
                          <span className="text-blue-500 mt-2"><Plus size={14} /></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 mt-12">
                      {exp.tech.map(t => (
                        <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-40 relative">
        <div className={`max-w-7xl mx-auto px-10 transition-all duration-1000 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="mb-32 relative h-24 md:h-32 flex items-center justify-center text-center">
            <h2 className="text-[10vw] font-black tracking-tighter leading-none opacity-5 uppercase italic select-none absolute w-full pointer-events-none">Case Studies</h2>
            <div className="text-center relative z-10">
              <span className="text-[10px] font-black tracking-[0.6em] uppercase opacity-40">AI Architectures</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
            {projects.map((project, idx) => (
              <div key={idx} className={`p-16 md:p-24 bg-black group hover:bg-blue-600 transition-all duration-1000 cursor-pointer`}>
                <div className="flex justify-between items-start mb-16">
                  <span className="text-xs font-mono opacity-40 group-hover:opacity-100">{project.id}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 group-hover:-translate-y-2 transition-transform duration-500 leading-none">
                  {project.title}
                </h3>
                <p className="text-lg opacity-40 group-hover:opacity-100 mb-12 font-light italic transition-opacity">
                  "{project.description}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest opacity-30 group-hover:opacity-100 border border-white/10 px-3 py-1 rounded-sm">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-40 relative border-t border-white/5 bg-white/[0.02]">
        <div className={`max-w-7xl mx-auto px-10 transition-all duration-1000 ${visibleSections.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex flex-col md:flex-row items-baseline gap-12 mb-32">
            <h2 className="text-sm font-black tracking-[0.5em] uppercase opacity-40 italic whitespace-nowrap">Academic Foundation</h2>
            <div className="h-[1px] bg-white/10 flex-1 hidden md:block" />
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
            {education.map((edu, idx) => (
              <div key={idx} className={`p-16 md:p-24 bg-black group transition-all duration-700 ${idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-delayed'}`}>
                <div className="flex justify-between items-start mb-16">
                  <GraduationCap className="text-blue-500" size={32} />
                  <span className="text-xs font-mono opacity-40">{edu.year}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-lg opacity-40 font-light mb-8 italic">{edu.institution}</p>
                <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-[10px] font-black tracking-widest uppercase text-blue-500">
                  {edu.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-40 bg-black">
        <div className={`max-w-7xl mx-auto px-10 transition-all duration-1000 ${visibleSections.skills ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-1 gap-24">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="border-b border-white/10 pb-20 last:border-0 group">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                  <h4 className="text-3xl font-black uppercase tracking-tighter md:w-1/3 opacity-40 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-500">{group.category}</h4>
                  <div className="flex flex-wrap gap-4 md:w-2/3">
                    {group.skills.map(skill => (
                      <div key={skill} className="text-xl md:text-3xl font-light tracking-tight hover:text-blue-400 transition-colors cursor-default whitespace-nowrap">
                        {skill} <span className="opacity-10 mx-4">•</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-40 relative border-t border-white/5">
        <div className={`max-w-7xl mx-auto px-10 transition-all duration-1000 ${visibleSections.certifications ? 'opacity-100' : 'opacity-0 translate-y-20'}`}>
          <div className="flex flex-col md:flex-row items-baseline gap-12 mb-24">
            <h2 className="text-sm font-black tracking-[0.5em] uppercase opacity-40 italic whitespace-nowrap">Validated Expertise</h2>
            <div className="h-[1px] bg-white/10 flex-1 hidden md:block" />
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Credentials & Labs</h3>
          </div>

          <div className="grid md:grid-cols-1 gap-px bg-white/5 border border-white/5">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-8 md:p-12 bg-black hover:bg-white/5 transition-colors group flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 last:border-0">
                <div className="flex gap-6 items-start">
                  <span className="text-blue-500 mt-1">
                    {cert.type === 'Workshop' || cert.type === 'Lab' ? <MonitorPlay size={24} /> : <Award size={24} />}
                  </span>
                  <div>
                    <h4 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
                      {cert.company} <span className="mx-2 opacity-20">|</span> <span className="text-blue-500/60">{cert.type}</span>
                    </p>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                   <Verified className="text-emerald-500" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="footer" className="py-60 text-center relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="mb-24">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40 block mb-12">Connect</span>
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter mb-12 italic leading-[0.8] hover:scale-105 transition-transform duration-700 cursor-pointer">
              Let's build <br /> <span className="text-blue-500 underline decoration-blue-500/30 decoration-8 underline-offset-8">The Future.</span>
            </h2>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-12 max-w-7xl mx-auto transition-all duration-1000 transform ${visibleSections.footer ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-col items-center gap-6 group">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 animate-float">
                <Mail size={28} className="text-blue-500 group-hover:scale-125 transition-transform duration-500" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Mail Address</span>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-light hover:text-blue-500 transition-colors lowercase tracking-wider cursor-pointer">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 group">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 animate-float" style={{ animationDelay: '0.1s' }}>
                <Phone size={28} className="text-blue-500 group-hover:scale-125 transition-transform duration-500" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Direct Line</span>
                <a href={`tel:${personalInfo.phone}`} className="text-sm font-light hover:text-blue-500 transition-colors tracking-wider cursor-pointer">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 group">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-slate-400 group-hover:bg-slate-400/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 animate-float" style={{ animationDelay: '0.2s' }}>
                <Github size={28} className="text-blue-500 group-hover:text-white group-hover:scale-125 transition-all duration-500" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Repositories</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-2 cursor-pointer">
                  GitHub <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 group">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#0077b5] group-hover:bg-[#0077b5]/10 group-hover:shadow-[0_0_30px_rgba(0,119,181,0.2)] transition-all duration-500 animate-float" style={{ animationDelay: '0.3s' }}>
                <Linkedin size={28} className="text-blue-500 group-hover:text-[#0077b5] group-hover:scale-125 transition-all duration-500" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Networking</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-2 cursor-pointer">
                  LinkedIn <ChevronRight size={12} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 group">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500 animate-float" style={{ animationDelay: '0.4s' }}>
                <BookOpen size={28} className="text-blue-500 group-hover:text-emerald-500 group-hover:scale-125 transition-all duration-500" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Articles</span>
                <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-2 cursor-pointer">
                  Medium <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-60 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
            <div className="text-[9px] font-black tracking-[0.5em] uppercase">SY // 2026</div>
            <div className="text-[9px] font-black tracking-[0.5em] uppercase">Minimalism x Intelligence</div>
          </div>
        </div>
      </footer>

      {isScrolled && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-10 right-10 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xl hover:-translate-y-2 transition-all z-50 cursor-pointer"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style>{`
        @keyframes reveal-curtain {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floating-foundation {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-float-slow {
          animation: floating-foundation 6s infinite ease-in-out;
        }
        .animate-float-delayed {
          animation: floating-foundation 6s infinite ease-in-out;
          animation-delay: 3s;
        }
        .animate-reveal-curtain {
          animation: reveal-curtain 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .animate-reveal-curtain-delayed {
          animation: reveal-curtain 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.3s forwards;
          clip-path: inset(0 100% 0 0);
        }
        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .noise-bg {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
        }
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default App;