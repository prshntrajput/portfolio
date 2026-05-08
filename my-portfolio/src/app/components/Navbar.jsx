"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import { NAV_ITEMS } from "../data"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      for (const id of NAV_ITEMS) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
        <button
          onClick={() => scrollTo("home")}
          className="text-sm font-bold tracking-wider text-foreground hover:text-primary transition-colors"
        >
          PR<span className="text-primary">.</span>dev
        </button>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`px-3 py-1.5 text-xs uppercase tracking-widest rounded transition-all duration-150 ${
                activeSection === item
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href="mailto:prshant.work@gmail.com"
          className="hidden md:flex items-center gap-2 text-xs px-3 py-1.5 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors duration-150"
        >
          <Mail className="w-3 h-3" />
          hire me
        </a>
      </div>
    </nav>
  )
}
