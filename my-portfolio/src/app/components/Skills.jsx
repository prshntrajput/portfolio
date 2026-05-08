import { Terminal, Code2, Server, Database, Package, Cpu, Layers } from "lucide-react"
import { SKILL_CATEGORIES } from "../data"
import { SectionDivider } from "./shared"

const ICONS = [Terminal, Code2, Server, Database, Package, Cpu, Layers]

/* Accent color per category — subtle top border only */
const ACCENTS = [
  "#2dd4bf", /* teal    – Languages */
  "#818cf8", /* indigo  – Frontend  */
  "#34d399", /* emerald – Backend   */
  "#f97316", /* orange  – Databases */
  "#f472b6", /* pink    – ORMs      */
  "#a78bfa", /* violet  – AI/Cloud  */
  "#fbbf24", /* amber   – Arch      */
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionDivider num={3} label="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {SKILL_CATEGORIES.map(({ label, skills }, i) => {
            const Icon = ICONS[i] ?? Terminal
            const accent = ACCENTS[i] ?? "#2dd4bf"
            return (
              <div
                key={label}
                className="bg-card border border-border rounded p-5 hover:border-white/20 transition-colors group"
                style={{ borderTopColor: accent, borderTopWidth: "2px" }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-7 h-7 rounded flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${accent}18` }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs text-muted-foreground bg-muted border border-border rounded group-hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
