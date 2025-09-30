import { Header } from "@/components/header"
import { ProfileHeader } from "@/components/profile/profile-header"
import { SkillsSection } from "@/components/profile/skills-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { mockCurrentUser } from "@/lib/mock-data"
import { Calendar, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-6xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {mockCurrentUser.name.split(" ")[0]}!</h1>
              <p className="text-muted-foreground">Here's what's happening with your skill exchanges</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Next session tomorrow</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">New Matches</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">People with matching skills</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Skill Points</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockCurrentUser.skillPoints}</div>
                  <p className="text-xs text-muted-foreground">+120 this week</p>
                </CardContent>
              </Card>
            </div>

            <ProfileHeader user={mockCurrentUser} isOwnProfile={true} />

            <SkillsSection
              skillsToTeach={mockCurrentUser.skillsToTeach}
              skillsToLearn={mockCurrentUser.skillsToLearn}
            />

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="justify-between" asChild>
                  <Link href="/matches">
                    Find Skill Matches
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="justify-between bg-transparent" asChild>
                  <Link href="/booking">
                    View Calendar
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
