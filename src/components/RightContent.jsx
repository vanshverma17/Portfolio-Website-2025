import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// project images
import jokeImg from '../assets/jokeapp.png'
import blogImg from '../assets/blogapp.jpg'
import reactImg from '../assets/react.svg'

gsap.registerPlugin(ScrollTrigger)

const Section = ({ id, title, children, className = "" }) => (
  <section 
    id={id} 
    className={`mb-12 section-animate ${className}`} 
    aria-label={title}
  >
    <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-white/60 hover:to-white/30 hover:border-white/40 hover:scale-[1.02] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></span>
          {title}
        </h2>
        <div className="text-emerald-800 leading-relaxed">{children}</div>
      </div>
    </div>
  </section>
)

const SkillBadge = ({ skill }) => (
  <span className="inline-block px-4 py-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full text-emerald-800 font-medium text-sm mr-3 mb-3 hover:bg-emerald-200/80 hover:scale-105 transition-all duration-300 cursor-default">
    {skill}
  </span>
)

const ProjectCard = ({ title, description, tech, image, githubLink, websiteLink }) => {
  const cardId = title.replace(/\s+/g, '').toLowerCase()
  
  return (
    <div className={`project-card-${cardId} relative p-6 rounded-xl bg-gradient-to-r from-emerald-50/80 to-white/60 backdrop-blur-sm border border-emerald-200/30 mb-6 hover:shadow-lg hover:bg-gradient-to-r hover:from-emerald-100/80 hover:to-white/70 transition-all duration-300 overflow-hidden`}>
      {/* Project Image */}
      <div className="image-container relative mb-4 rounded-lg overflow-hidden bg-gray-100 h-48">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-emerald-300 flex items-center justify-center">
            <span className="text-emerald-800 font-semibold text-lg">{title}</span>
          </div>
        )}
        
        {/* Hover overlay with links */}
        <div className="overlay absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-white transition-colors duration-200 flex items-center gap-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {websiteLink && (
            <a 
              href={websiteLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors duration-200 flex items-center gap-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
      <p className="text-emerald-700 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="px-3 py-1 bg-emerald-200/60 rounded-full text-xs text-emerald-800 font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

const ExperienceCard = ({ company, role, period, description }) => (
  <div className="p-6 rounded-xl bg-gradient-to-r from-white/70 to-emerald-50/60 backdrop-blur-sm border border-white/40 mb-6 hover:shadow-lg transition-all duration-300">
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-emerald-900">{role}</h3>
        <p className="text-emerald-700 font-medium">{company}</p>
      </div>
      <span className="px-3 py-1 bg-emerald-100 rounded-full text-xs text-emerald-800 font-medium self-start lg:self-center shrink-0">
        {period}
      </span>
    </div>
    <p className="text-emerald-700 leading-relaxed">{description}</p>
  </div>
)

const EducationCard = ({ degree, institution, period, details }) => (
  <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-50/70 to-white/80 backdrop-blur-sm border border-emerald-100/50 mb-6 hover:shadow-lg transition-all duration-300">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-lg font-semibold text-emerald-900">{degree}</h3>
        <p className="text-emerald-700 font-medium">{institution}</p>
      </div>
      <span className="px-3 py-1 bg-emerald-200/60 rounded-full text-xs text-emerald-800 font-medium">
        {period}
      </span>
    </div>
    <p className="text-emerald-700">{details}</p>
  </div>
)

const RightContent = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade in animation for sections
      gsap.from(".section-animate", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".section-animate",
          start: "top 80%",
          toggleActions: "play none none none",
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const skills = [
    "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", 
    "Node.js", "Python", "MongoDB", "Firebase", "Git", "Figma"
  ]

  return (
    <main ref={containerRef} className="ml-[40%] pt-16 h-screen overflow-y-auto p-8 space-y-6">
      <div className="max-w-4xl">
        <Section id="about" title="About Me">
          <div className="space-y-4">
            <p className="text-lg">
              Hello! I'm <span className="font-semibold text-emerald-900">Vansh</span>, a passionate web developer specializing in creating exceptional digital experiences. I enjoy building interactive, responsive, and user-friendly websites and applications.
            </p>
            <p>
              Currently pursuing <span className="font-medium">B.Tech in Computer Science Engineering</span> with a specialization in Machine Learning at Jaypee University of Information Technology, I'm constantly exploring new technologies and methodologies to enhance my skills.
            </p>
            <p>
              My goal is to create accessible, human-centered products that solve real-world problems while providing seamless user experiences.
            </p>
          </div>
        </Section>

        <Section id="education" title="Education">
          <EducationCard
            degree="Bachelor of Technology in Computer Science Engineering"
            institution="Jaypee University of Information Technology"
            period="2022 - Present"
            details="Currently pursuing B.Tech in Computer Science Engineering with specialization in Machine Learning. CGPA: 7.96/10. Participated in various hackathons and coding competitions. Completed several projects in web development and machine learning."
          />
          <EducationCard
            degree="Higher Secondary Education"
            institution="DPSG, Palam Vihar, Gurgaon"
            period="2020 - 2022"
            details="Completed Class XII with focus on Physics, Chemistry, and Mathematics. Percentage: 77%. Developed interest in programming and web development."
          />
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceCard
            company="Tensketch"
            role="Frontend Developer Intern"
            period="June 15, 2025 - Present"
            description="Working as a Frontend Developer Intern at Tensketch, developing modern web applications and contributing to innovative projects. Gaining hands-on experience with cutting-edge technologies and collaborating with experienced developers."
          />
        </Section>

        <Section id="projects" title="Projects">
          <ProjectCard
            title="Joke App"
            description="A fun web application that generates random jokes using an API. Features a clean UI and responsive design."
            tech={["JavaScript", "API Integration", "HTML", "CSS"]}
            image={jokeImg}
            githubLink="https://github.com/vanshverma17/joke-app"
            websiteLink="https://joke-app-demo.netlify.app"
          />
          <ProjectCard
            title="Blog App"
            description="A full-stack blog application with user authentication, CRUD operations, and responsive design."
            tech={["React", "Node.js", "MongoDB", "Express"]}
            image={blogImg}
            githubLink="https://github.com/vanshverma17/blog-app"
            websiteLink="https://blog-app-demo.netlify.app"
          />
          <ProjectCard
            title="Portfolio Website"
            description="A modern and responsive portfolio website with dark mode, smooth animations, and a clean UI design."
            tech={["React", "Tailwind CSS", "GSAP", "Vite"]}
            image={reactImg}
            githubLink="https://github.com/vanshverma17/portfolio-website"
            websiteLink="https://vanshverma.dev"
          />
        </Section>

        <Section id="skills" title="Skills">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap">
                {["Problem Solving", "Team Collaboration", "Communication", "Project Management", "Creative Thinking"].map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Get In Touch">
          <div className="space-y-12">
            <p className="text-lg text-emerald-700 text-center max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Let's connect and create something amazing together!
            </p>
            
            {/* Social Media Icons */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-emerald-900 mb-6">Connect with me</h3>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                {/* Email */}
                <a
                  href="mailto:vanshverma@example.com"
                  className="group flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/60 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Send Email"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-2 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-emerald-800 group-hover:text-emerald-900">Email</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/vansh-verma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/60 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="LinkedIn Profile"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-emerald-800 group-hover:text-emerald-900">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/vanshverma17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/60 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="GitHub Profile"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mb-2 group-hover:from-gray-800 group-hover:to-gray-900 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-emerald-800 group-hover:text-emerald-900">GitHub</span>
                </a>

                {/* X */}
                <a
                  href="https://x.com/vanshverma17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/60 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="X Profile"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-slate-800 rounded-full flex items-center justify-center mb-2 group-hover:from-slate-800 group-hover:to-black transition-all duration-300">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-emerald-800 group-hover:text-emerald-900">X</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-emerald-900 mb-6 text-center">Or send me a message</h3>
              <form className="space-y-6 p-8 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-800 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-emerald-200/50 text-emerald-900 placeholder-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-800 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-emerald-200/50 text-emerald-900 placeholder-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-emerald-800 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-emerald-200/50 text-emerald-900 placeholder-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-emerald-200/50 text-emerald-900 placeholder-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Section>
      </div>
    </main>
  )
}

export default RightContent
