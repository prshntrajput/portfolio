import { EXPERIENCE } from "../data"
import { SectionDivider, Tag } from "./shared"

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionDivider num={2} label="Experience" />

        <div className="space-y-6">
          {EXPERIENCE.map((job, i) => (
            <ExperienceCard key={i} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ job }) {
  return (
    <div className="relative pl-5 border-l-2 border-primary/40 hover:border-primary transition-colors duration-300 group">
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300" />

      <div className="bg-card border border-border rounded p-6 hover:border-primary/40 transition-colors">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-foreground">{job.role}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-primary font-semibold">{job.company}</span>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="text-xs text-muted-foreground italic">{job.fullName}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-muted-foreground">{job.location}</span>
            <span className="px-2.5 py-1 text-xs text-primary border border-primary/30 bg-primary/10 rounded">
              {job.period}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5 mb-5">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary shrink-0 mt-1 text-xs">▸</span>
              {bullet}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {job.tech.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
    </div>
  )
}
