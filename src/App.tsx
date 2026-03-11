import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Terminal, Server, Cloud, Code, Activity, ArrowRight, Download, CheckCircle2,
  Mail, MapPin, Linkedin, Briefcase
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <Terminal className="w-6 h-6 text-teal-500" />
          Modernize <span className="text-teal-400">with Kiran</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
        <motion.a 
          href="#contact" 
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="px-5 py-2.5 bg-teal-500 text-slate-950 hover:bg-teal-400 rounded-full font-bold transition-colors shadow-[0_0_15px_rgba(20,184,166,0.4)] hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] flex items-center gap-2"
        >
          <span className="text-lg leading-none">⚡</span> Hire Me
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-6 border border-teal-500/20">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Senior Mainframe Modernization Engineer
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Mainframe to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Modern.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
            10+ Years Migrating COBOL & z/OS Systems to Modern Java Architectures. I help enterprises modernize legacy mainframe systems into scalable microservice architectures using Spring Boot, Kafka, and cloud-native platforms.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition-colors flex items-center gap-2">
              Hire Me for Modernization <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/resume.pdf" download="Kiran_Resume.pdf" className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors flex items-center gap-2 border border-slate-700">
              Download Resume <Download className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
            {[
              { label: "Experience", value: "10+ Years" },
              { label: "Focus", value: "Enterprise Systems" },
              { label: "Migration", value: "COBOL → Microservices" },
              { label: "Platform", value: "z/OS Modernization" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-teal-400 font-bold text-xl mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
        >
          <div className="relative w-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-teal-500/10">
            <div className="aspect-[4/5] overflow-hidden bg-slate-800 relative">
              {/* Note: Using a placeholder that matches the attached professional photo. You can replace the src with your actual image path (e.g., '/profile.jpg') once uploaded to the public folder. */}
              <img 
                src="/profile.jpg"
                alt="Kiran Kumar - Modernization Engineer" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 relative bg-slate-900">
              <h3 className="text-xl font-bold text-white mb-1">Kiran</h3>
              <div className="text-teal-400 font-medium mb-4">Modernization Engineer</div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm text-slate-400">Available for opportunities</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 font-medium">COBOL</span>
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 font-medium">Java / Spring</span>
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 font-medium">AWS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise Systems <span className="text-teal-400">Experience</span></h2>
            <p className="text-slate-400">Proven track record of migrating mission-critical workloads with zero downtime.</p>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            {[
              "10+ years working with enterprise legacy systems",
              "COBOL and z/OS modernization",
              "High transaction workloads",
              "Microservices architecture migration"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                <span className="text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const categories = [
    {
      title: "Mainframe Core",
      icon: <Server className="w-6 h-6 text-teal-400" />,
      skills: ["COBOL", "JCL", "CICS", "z/OS", "VSAM"]
    },
    {
      title: "Modern Stack",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs"]
    },
    {
      title: "Messaging & Integration",
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      skills: ["Kafka", "IBM MQ", "Event-driven architecture"]
    },
    {
      title: "Cloud & Platforms",
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      skills: ["AWS", "Azure", "Google Cloud"]
    },
    {
      title: "Observability",
      icon: <Activity className="w-6 h-6 text-emerald-400" />,
      skills: ["Grafana", "Prometheus", "ELK"]
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <div className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Technical Skills</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">A full spectrum of <span className="text-teal-400">modernization</span><br/>expertise.</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {categories.map((cat, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-teal-500/30 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-800 rounded-xl">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span key={j} className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-300 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Senior Mainframe Modernization Engineer",
      company: "Enterprise Financial Services Corp.",
      period: "2019 - Present",
      location: "Remote",
      problem: "Legacy COBOL batch systems were slowing down enterprise operations, creating bottlenecks in daily transaction processing, and limiting the ability to integrate with modern web and mobile applications.",
      solution: "Architected and migrated critical workloads to Spring Boot microservices. Implemented an event-driven messaging architecture using Kafka to decouple legacy systems from modern frontends, allowing phased migration without downtime.",
      results: [
        { metric: "10x", label: "Improved performance" },
        { metric: "99.99%", label: "Increased scalability" },
        { metric: "-40%", label: "Reduced overhead" }
      ]
    },
    {
      role: "Mainframe Developer",
      company: "Global Tech Solutions",
      period: "2015 - 2019",
      location: "New York, NY",
      problem: "High maintenance costs and slow deployment cycles for core banking applications running on z/OS.",
      solution: "Developed and maintained enterprise applications using COBOL, JCL, DB2, and VSAM. Initiated early modernization efforts by exposing CICS transactions as REST APIs.",
      results: [
        { metric: "30%", label: "Faster deployments" },
        { metric: "15+", label: "APIs created" },
        { metric: "100%", label: "Compliance met" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Work Experience</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">10+ years in <span className="text-teal-400">enterprise systems.</span></h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12 pb-4 mt-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Timeline Node */}
              <div className="absolute w-5 h-5 rounded-full bg-slate-950 border-4 border-teal-500 -left-[11px] top-10 shadow-[0_0_15px_rgba(20,184,166,0.4)]"></div>
              
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-teal-500/30 transition-colors group">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-1">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-bold mb-6 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                      <Activity className="w-4 h-4" /> {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-slate-400 mb-6 font-medium text-lg">{exp.company}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <MapPin className="w-4 h-4 text-teal-500" /> {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span> Problem
                      </h4>
                      <p className="text-slate-400 leading-relaxed">{exp.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> Solution
                      </h4>
                      <p className="text-slate-400 leading-relaxed">{exp.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Result
                      </h4>
                      <div className="grid sm:grid-cols-3 gap-4 mt-4">
                        {exp.results.map((res, i) => (
                          <div key={i} className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                            <div className="text-teal-400 font-bold text-xl mb-1">{res.metric}</div>
                            <div className="text-sm text-slate-400">{res.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Mainframe-to-MQ Integration Bridge",
      problem: "Legacy COBOL systems unable to communicate with modern applications in real-time.",
      solution: "Developed a robust messaging bridge using IBM MQ and Spring Boot microservices to facilitate seamless data exchange.",
      results: [
        "Improved system integration",
        "Enabled event-driven architecture",
        "Reduced processing delays by 85%"
      ],
      tags: ["COBOL", "IBM MQ", "Spring Boot", "Java"]
    },
    {
      title: "Batch to Real-time API Gateway",
      problem: "Overnight batch processing caused data staleness for customer-facing applications.",
      solution: "Implemented a RESTful API layer over legacy DB2 databases using Spring Boot, exposing data securely to modern frontends.",
      results: [
        "Real-time data access",
        "Enhanced customer experience",
        "Zero impact on legacy core"
      ],
      tags: ["REST APIs", "DB2", "Spring Boot", "Microservices"]
    },
    {
      title: "Legacy VSAM to DB2 Migration",
      problem: "Outdated VSAM datasets were causing data silos and limiting complex querying capabilities.",
      solution: "Led the data migration initiative converting legacy VSAM datasets to DB2 relational tables with zero downtime.",
      results: [
        "Eliminated data silos",
        "Enabled complex SQL querying",
        "Improved data integrity"
      ],
      tags: ["VSAM", "DB2", "COBOL", "Data Migration"]
    },
    {
      title: "CICS Transaction Monitoring Dashboard",
      problem: "Lack of visibility into real-time CICS transaction performance and failure rates.",
      solution: "Built a real-time Splunk dashboard aggregating CICS transaction logs and DB2 query performance metrics.",
      results: [
        "Real-time observability",
        "Reduced MTTR by 45%",
        "Proactive anomaly detection"
      ],
      tags: ["CICS", "Splunk", "Monitoring", "z/OS"]
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Featured Projects</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Real problems. <span className="text-teal-400">Real solutions.</span></h2>
        </div>
        <div className="text-left md:text-right">
          <div className="text-2xl font-bold text-white">Enterprise-grade impact</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group hover:border-teal-500/30 transition-colors">
            <div className="p-8 md:p-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
              
              <div className="space-y-6 mb-8 flex-1">
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">Problem</div>
                  <p className="text-slate-300">{project.problem}</p>
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">Solution</div>
                  <p className="text-slate-300">{project.solution}</p>
                </div>
                <div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-3">Results</div>
                  <ul className="space-y-2">
                    {project.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800 mt-auto">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs text-slate-400 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyHireMe = () => {
  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Work With Me</h2>
            <p className="text-lg text-slate-400 mb-8">
              Bridging the gap between legacy reliability and modern agility. I bring a rare combination of deep mainframe expertise and modern cloud-native architecture skills.
            </p>
            <ul className="space-y-4">
              {[
                "10+ years enterprise modernization experience",
                "Strong expertise in COBOL and Java modernization",
                "Experience migrating legacy systems to microservices",
                "Deep understanding of enterprise architecture and security"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Terminal className="w-8 h-8 text-teal-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">Ready for Impact</div>
                  <div className="text-teal-400 text-sm">Available for new opportunities</div>
                </div>
              </div>
              <p className="text-slate-400 mb-8">
                Looking for a senior engineer who can navigate complex legacy codebases and design scalable modern architectures? Let's talk.
              </p>
              <a href="/resume.pdf" download="Kiran_Resume.pdf" className="w-full py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-colors flex items-center justify-center gap-2">
                Download Full Resume <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
	const formData = new FormData(e.target);
    formData.append("access_key", "d7213d3f-079e-4623-bf56-0c46011bff73");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
	
	const data = await response.json();
    // Simulate an API call to a service like Web3Forms or Formspree
    // To actually send emails silently, you would replace this setTimeout with a fetch call:
    // await fetch('https://api.web3forms.com/submit', { method: 'POST', body: JSON.stringify({ access_key: 'YOUR_KEY', ...formData }) })
	
	if (data.success) {
		setTimeout(() => {
			setStatus('success');
			setToastMessage('Message Sent!!');
			setFormData({ name: '', email: '', message: '' });
      
			setTimeout(() => {
				setStatus('idle');
				setToastMessage(null);
			}, 4000);
		}, 1500);
	}else {
		setStatus('idle');
		setToastMessage("Error!! Message Not Sent.");
		setFormData({ name: '', email: '', message: '' });
		
		setTimeout(() => setToastMessage(null), 4000);
    };
  };

  const handleScheduleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    setToastMessage("Thanks! I'll reach out ASAP. (Assuming you left your contact info 😊)");
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
      <div className="text-center mb-16">
        <div className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Get In Touch</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something <span className="text-teal-400">modern together.</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Open to enterprise modernization roles, consulting engagements, and technical discussions about legacy-to-cloud transformation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Email</div>
              <div className="flex flex-col gap-1">
                <a href="mailto:associatewithkiran@gmail.com" className="text-white font-medium hover:text-teal-400 transition-colors">associatewithkiran@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 shrink-0">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">LinkedIn</div>
              <a href="https://www.linkedin.com/in/kiran-kumar-130290213/" className="text-white font-medium hover:text-teal-400 transition-colors">kiran-kumar-130290213</a>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-teal-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-1">Location</div>
              <div className="text-white font-medium">Remote / Hybrid</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" 
                  placeholder="john@company.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" 
                placeholder="Tell me about your modernization project..."
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="flex-1 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'} 
                {status === 'idle' && <ArrowRight className="w-5 h-5" />}
              </button>
              <button 
                onClick={handleScheduleCall}
                className="flex-1 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors border border-slate-700 flex items-center justify-center"
              >
                Schedule a Call
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 bg-teal-500 text-slate-950 px-6 py-4 rounded-xl font-bold shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 z-50 max-w-md">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <p>{toastMessage}</p>
        </div>
      )}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 font-bold text-slate-300">
          <Terminal className="w-5 h-5 text-teal-500" />
          Modernize with Kiran
        </div>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Expertise />
        <Experience />
        <Projects />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
