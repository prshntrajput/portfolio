import { SectionDivider } from "./shared"

const HIGHLIGHTS = [
  {
    label: "Frontend",
    desc: "Responsive, interactive UIs with React & Next.js",
    icon: "◈",
  },
  {
    label: "Backend",
    desc: "REST APIs, event pipelines, real-time systems",
    icon: "◈",
  },
  {
    label: "AI / ML",
    desc: "LLM integration, structured output, agent workflows",
    icon: "◈",
  },
  {
    label: "Infrastructure",
    desc: "Docker, Vercel, serverless & event-driven deployments",
    icon: "◈",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionDivider num={1} label="About" />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
              I build products from{" "}
              <span className="text-primary">zero to one</span> — fast,
              clean, and ready to ship.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer who enjoys building products from zero to one.
              I focus on clean architecture, performance, and shipping fast — whether that's
              a real-time data pipeline, an AI-powered feature, or a polished user interface.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              My stack centers around Next.js and Supabase for rapid full-stack development,
              with deep experience in event-driven architectures using Inngest and BullMQ,
              and AI integration via Gemini and LangChain.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I care about writing maintainable code, systems that scale, and UX that feels instant.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 content-start">
            {HIGHLIGHTS.map(({ label, desc }) => (
              <div
                key={label}
                className="p-4 rounded border border-border bg-card hover:border-primary/50 transition-colors group"
              >
                <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-primary text-sm">◈</span>
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">{label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
