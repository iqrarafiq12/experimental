import { Globe } from "./ui/globe"

export function GlobeCard() {
  return (
    <section className="relative w-full bg-background">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.35),transparent_70%)]" />

      {/* Globe */}
      <Globe />

      {/* Fade into next section */}
      <div className="pointer-events-none absolute bottom-0 h-24 w-full bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}
