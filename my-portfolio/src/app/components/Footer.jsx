export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-foreground">
            PR<span className="text-primary">.</span>dev
          </span>
          <span className="text-muted-foreground text-xs">·</span>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prashant Rajput
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          
          <span className="text-primary"></span>
          {" · "}
          <span className="text-primary"></span>
        </p>
      </div>
    </footer>
  )
}
