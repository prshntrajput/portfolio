"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, ExternalLink, Mail, Code, Globe, Server, Database } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const skills = {
    frontend: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "PostgreSQL", "Redis"],
    tools: ["Git", "Vercel", "Postman", "VS Code"],
  }

  const projects = [
    {
      title: "QR Authentication",
      description: "Full-stack app for QR-based login and real-time authentication.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com/prshntrajput/qr-auth",
    },
    {
      title: "Expense Tracker",
      description: "Track and manage your expenses efficiently.",
      tech: ["Next.js", "PostgreSQL", "Drizzle", "Tailwind CSS"],
      github: "https://github.com/prshntrajput/expense-tracker",
      live: "https://expense-tracker-tau-ivory.vercel.app",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#111] border-b border-[#333] z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-xl font-semibold text-white">PR</div>
          <div className="hidden md:flex space-x-6">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-colors ${
                  activeSection === item ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-gray-800 rounded-full flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Prashant Rajput</h1>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Full Stack Developer passionate about building modern, scalable web applications.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            View My Work
          </button>
          <div className="mt-10 animate-bounce">
            <button onClick={() => scrollToSection("about")}>
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-10">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="text-gray-300 space-y-4">
              <p>
                I’m a Full Stack Developer ,building fast, responsive, and modern web apps.
              </p>
              <p>
                I love working with technologies like React, Next.js, Node, and databases like MongoDB and PostgreSQL.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#222] p-4 rounded">
                <Globe className="w-5 h-5 text-white mb-2" />
                <h3 className="font-semibold mb-1">Frontend</h3>
                <p className="text-sm text-gray-400">Responsive UI design and architecture</p>
              </div>
              <div className="bg-[#222] p-4 rounded">
                <Server className="w-5 h-5 text-white mb-2" />
                <h3 className="font-semibold mb-1">Backend</h3>
                <p className="text-sm text-gray-400">API design and authentication</p>
              </div>
              <div className="bg-[#222] p-4 rounded">
                <Database className="w-5 h-5 text-white mb-2" />
                <h3 className="font-semibold mb-1">Database</h3>
                <p className="text-sm text-gray-400">Efficient data modeling and queries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-[#1a1a1a] p-5 rounded">
                <h3 className="text-white font-medium mb-3 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-white text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 rounded shadow-sm">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href={project.github} target="_blank" className="flex items-center gap-1 text-gray-300 hover:text-white">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" className="flex items-center gap-1 text-gray-300 hover:text-white">
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Me</h2>
          <p className="text-gray-400 mb-8">
            Let's build something great. I'm open to freelance, full-time, and collaborative opportunities.
          </p>
          <a
            href="mailto:prshant.work@gmail.com"
            className="inline-block bg-white text-black px-6 py-3 rounded hover:bg-gray-300"
          >
            <Mail className="inline-block w-4 h-4 mr-2" /> prshant.work@gmail.com
          </a>
          <div className="mt-8">
            <a
              href="https://github.com/prshntrajput"
              target="_blank"
              className="text-gray-300 hover:text-white inline-flex items-center"
            >
              <Github className="w-6 h-6 mr-2" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-[#333] text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Prashant Rajput. All rights reserved.
      </footer>
    </div>
  )
}
