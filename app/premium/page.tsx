import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, Zap, Crown, Star } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Priority Matching",
    description: "Get matched with top-rated mentors first",
  },
  {
    icon: Star,
    title: "Exclusive Mentors",
    description: "Access to premium mentors and experts",
  },
  {
    icon: Crown,
    title: "Unlimited Sessions",
    description: "Book as many sessions as you want",
  },
  {
    icon: Sparkles,
    title: "Advanced Analytics",
    description: "Track your learning progress in detail",
  },
]

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "5 sessions per month",
      "Basic skill matching",
      "Community access",
      "Standard support",
      "Basic badges & achievements",
    ],
    cta: "Current Plan",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "For serious learners and teachers",
    features: [
      "Unlimited sessions",
      "Priority skill matching",
      "Exclusive mentor access",
      "Advanced analytics",
      "Premium badges",
      "Priority support",
      "Ad-free experience",
      "Early access to features",
    ],
    cta: "Upgrade Now",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$19.99",
    period: "per month",
    description: "For professional skill exchangers",
    features: [
      "Everything in Premium",
      "Verified profile badge",
      "Featured in search results",
      "Custom profile URL",
      "Session recording",
      "1-on-1 onboarding",
      "API access",
      "White-label options",
    ],
    cta: "Upgrade to Pro",
    highlighted: false,
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Graphic Designer",
    avatar: "/creative-designer.png",
    quote: "Premium membership helped me connect with amazing mentors. The priority matching is worth every penny!",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Photographer",
    avatar: "/photographer.png",
    quote: "Being able to book unlimited sessions transformed my learning journey. Highly recommend!",
    rating: 5,
  },
]

export default function PremiumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-6">
                <Sparkles className="h-3 w-3 mr-1" />
                Premium Features
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
                Unlock Your Full
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Learning Potential
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance mb-10 leading-relaxed">
                Get access to exclusive features, priority matching, and unlimited skill exchanges with our premium
                plans.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-4">Premium Features</h2>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                Everything you need to accelerate your skill exchange journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-4">Choose Your Plan</h2>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                Start free and upgrade anytime. No hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.highlighted ? "border-primary shadow-lg scale-105" : "border-border/50"}`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                      disabled={plan.name === "Free"}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-4">
                Loved by Our Community
              </h2>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                See what premium members are saying
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20">
          <div className="container">
            <Card className="border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-6">
                  Ready to upgrade your learning?
                </h2>
                <p className="text-lg text-muted-foreground text-balance mb-10 leading-relaxed">
                  Join thousands of premium members who are accelerating their skill exchange journey.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="text-base px-8">
                    <Crown className="mr-2 h-5 w-5" />
                    Upgrade to Premium
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                    Compare Plans
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
