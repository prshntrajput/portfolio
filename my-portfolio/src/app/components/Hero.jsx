"use client"

import { useState, useEffect } from "react"
import { ExternalLink, ArrowDown } from "lucide-react"
import { GitHubIcon } from "./shared"

const STATS = [
  { value: "3+", label: "shipped projects" },
  { value: "1",  label: "internship" },
  { value: "7+", label: "tech stacks" },
  { value: "2+", label: "years coding" },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgb(45 212 191 / 0.06) 0%, transparent 65%)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgb(129 140 248 / 0.05) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto py-24">
        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-primary/30 bg-primary/10 text-primary text-xs mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary cursor-blink" />
              open to opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">
              <span className="text-foreground">Prashant</span>
              <br />
              <span className="text-gradient">Rajput</span>
              <span className="text-primary cursor-blink">_</span>
            </h1>

            {/* Role */}
            <p className="text-lg text-muted-foreground mb-4 flex items-center gap-2">
              <span className="text-primary select-none">❯</span>
              Full Stack Developer
            </p>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-10">
              Building high-performance web apps with real-time systems, AI
              integration, and scalable architectures. From idea to shipped product.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
              >
                View Projects
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://github.com/prshntrajput"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-xs uppercase tracking-widest rounded hover:border-primary/60 hover:text-primary transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right — decorative terminal card */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border border-border bg-card rounded overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/60">
                <span className="w-3 h-3 rounded-full bg-red-500/50" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-3 text-xs text-muted-foreground">profile.ts</span>
              </div>
              {/* Code */}
              <div className="p-5 text-xs leading-7">
                <div>
                  <span className="text-violet-400">const</span>
                  <span className="text-foreground"> prashant </span>
                  <span className="text-muted-foreground">= {"{"}</span>
                </div>
                <div className="pl-5">
                  <span className="text-sky-400">role</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-emerald-400">&quot;Full Stack Developer&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-sky-400">stack</span>
                  <span className="text-muted-foreground">: [</span>
                  <span className="text-emerald-400">&quot;Next.js&quot;</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-emerald-400">&quot;Supabase&quot;</span>
                  <span className="text-muted-foreground">],</span>
                </div>
                <div className="pl-5">
                  <span className="text-sky-400">ai</span>
                  <span className="text-muted-foreground">: [</span>
                  <span className="text-emerald-400">&quot;Gemini&quot;</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-emerald-400">&quot;LangChain&quot;</span>
                  <span className="text-muted-foreground">],</span>
                </div>
                <div className="pl-5">
                  <span className="text-sky-400">current</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-emerald-400">&quot;HashForGamers&quot;</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div className="pl-5">
                  <span className="text-sky-400">open</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-primary font-bold">true</span>
                  <span className="text-muted-foreground">,</span>
                </div>
                <div><span className="text-muted-foreground">{"}"}</span></div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-primary">❯</span>
                  <span className="text-muted-foreground cursor-blink">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-primary mb-0.5">{value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce z-10"
      >
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  )
}
