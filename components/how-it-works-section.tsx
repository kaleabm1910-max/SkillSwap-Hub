import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Search, Calendar, Video, Star, Trophy } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Profile",
    description: "Sign up and list the skills you can teach and what you want to learn.",
  },
  {
    icon: Search,
    step: "02",
    title: "Get Matched",
    description: "Our smart algorithm finds people with complementary skills for perfect exchanges.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Book a Session",
    description: "Schedule a time that works for both of you using our booking system.",
  },
  {
    icon: Video,
    step: "04",
    title: "Exchange Skills",
    description: "Meet online or offline to teach and learn in live sessions.",
  },
  {
    icon: Star,
    step: "05",
    title: "Rate & Review",
    description: "Build your reputation by rating each other after sessions.",
  },
  {
    icon: Trophy,
    step: "06",
    title: "Earn Points",
    description: "Collect skill points, badges, and climb the leaderboard.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Start exchanging skills in six simple steps. No money required, just your time and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shrink-0">
                      {step.step}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 shrink-0">
                      <step.icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
