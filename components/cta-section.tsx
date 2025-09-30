import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
          <CardContent className="p-12 md:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-6">
                Ready to start your learning journey?
              </h2>
              <p className="text-lg text-muted-foreground text-balance mb-10 leading-relaxed">
                Join thousands of learners and teachers exchanging skills every day. Sign up for free and start your
                first skill exchange today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="text-base px-8" asChild>
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                  <Link href="/explore">Browse Skills</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
