import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Video, Trophy, Shield, Zap, Heart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Smart Matching",
    description: "Our algorithm connects you with people who have complementary skills for perfect exchanges.",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Schedule sessions that fit your availability with our intuitive calendar system.",
  },
  {
    icon: Video,
    title: "Live Sessions",
    description: "Learn and teach through high-quality video calls, online or offline.",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Earn skill points, badges, and climb leaderboards as you share knowledge.",
  },
  {
    icon: Shield,
    title: "Trust System",
    description: "Build your reputation with ratings and reviews from the community.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Join a supportive community of lifelong learners and passionate teachers.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-4">
            Everything you need to exchange skills
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            A complete platform designed to make peer-to-peer learning seamless and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
