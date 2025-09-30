import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10 -z-10" />

      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Join 10,000+ learners exchanging skills</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Exchange Skills.
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Learn for Free.
            </span>
            <br />
            Teach and Grow.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-10 max-w-2xl mx-auto leading-relaxed">
            A peer-to-peer learning platform where knowledge is currency. Trade your skills for new ones without
            spending money.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
              <Link href="/explore">Explore Skills</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Skills Available</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-4/20">
                <TrendingUp className="h-6 w-6 text-chart-4" />
              </div>
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-muted-foreground">Sessions Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
