import { Mail } from "lucide-react"
import { SectionDivider, GitHubIcon } from "./shared"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionDivider num={5} label="Contact" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — copy */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
              Got an interesting problem?<br />
              <span className="text-primary">Let's build something.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
              Open to full-time roles, freelance projects, and meaningful
              collaborations. If you have an idea worth shipping, I'd love to
              hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:prshant.work@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                prshant.work@gmail.com
              </a>
              <a
                href="https://github.com/prshntrajput"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-xs uppercase tracking-widest rounded hover:border-primary/60 hover:text-primary transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                github.com/prshntrajput
              </a>
            </div>
          </div>

          {/* Right — availability card */}
          <div className="bg-card border border-border rounded p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 cursor-blink" />
              Current Status
            </div>

            {[
              { label: "Full-time roles",       status: "open",       color: "#34d399" },
              { label: "Freelance projects",     status: "open",       color: "#34d399" },
              { label: "Open source collab",     status: "open",       color: "#34d399" },
              { label: "Currently at",           status: "HashForGamers", color: "#fbbf24" },
            ].map(({ label, status, color }) => (
              <div key={label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded"
                  style={{ color, backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
