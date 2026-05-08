import { ExternalLink } from "lucide-react"
import { PROJECTS } from "../data"
import { SectionDivider, Tag, GhostBtn, GitHubIcon } from "./shared"

/* Accent color per project */
const PROJECT_ACCENTS = ["#2dd4bf", "#818cf8", "#f97316"]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionDivider num={4} label="Projects" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} accent={PROJECT_ACCENTS[i % PROJECT_ACCENTS.length]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, accent, index }) {
  return (
    <div
      className="flex flex-col bg-card border border-border rounded overflow-hidden hover:border-white/20 transition-colors group"
      style={{ borderTopColor: accent, borderTopWidth: "2px" }}
    >
      {/* Card header */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span
              className="inline-block text-xs px-2 py-0.5 rounded mb-2 font-medium"
              style={{ color: accent, backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
            >
              {project.tag}
            </span>
            <h3 className="text-lg font-bold text-foreground leading-tight">{project.title}</h3>
          </div>
          <span className="text-2xl font-bold text-border select-none shrink-0 mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{project.tagline}</p>
      </div>

      <div className="h-px bg-border mx-5" />

      {/* Bullets */}
      <div className="px-5 py-4 flex-1">
        <ul className="space-y-2.5">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
              <span className="shrink-0 mt-0.5" style={{ color: accent }}>▸</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-border mx-5" />

      {/* Footer */}
      <div className="px-5 py-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => <Tag key={t}>{t}</Tag>)}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 text-xs text-muted-foreground">+{project.tech.length - 3}</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.live && (
            <GhostBtn href={project.live} target="_blank">
              <ExternalLink className="w-3 h-3" />
              live
            </GhostBtn>
          )}
          <GhostBtn href={project.github} target="_blank">
            <GitHubIcon className="w-3 h-3" />
            code
          </GhostBtn>
        </div>
      </div>
    </div>
  )
}
