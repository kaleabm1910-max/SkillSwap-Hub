import { Header } from "@/components/header"
import { BadgeCard } from "@/components/gamification/badge-card"
import { AchievementCard } from "@/components/gamification/achievement-card"
import { LeaderboardRow } from "@/components/gamification/leaderboard-row"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockBadges, mockAchievements, mockLeaderboard } from "@/lib/gamification-data"
import { Trophy, Award, TrendingUp } from "lucide-react"

export default function RewardsPage() {
  const earnedBadges = mockBadges.filter((b) => b.earned)
  const lockedBadges = mockBadges.filter((b) => !b.earned)
  const activeAchievements = mockAchievements.filter((a) => !a.completed)
  const completedAchievements = mockAchievements.filter((a) => a.completed)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">Rewards & Achievements</h1>
            </div>
            <p className="text-muted-foreground">Track your progress and compete with the community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Points</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,850</div>
                <p className="text-xs text-muted-foreground">Rank #4 globally</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {earnedBadges.length} / {mockBadges.length}
                </div>
                <p className="text-xs text-muted-foreground">{lockedBadges.length} more to unlock</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {completedAchievements.length} / {mockAchievements.length}
                </div>
                <p className="text-xs text-muted-foreground">{activeAchievements.length} in progress</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="badges" className="space-y-6">
            <TabsList>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>

            <TabsContent value="badges" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Earned Badges ({earnedBadges.length})</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {earnedBadges.map((badge) => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Locked Badges ({lockedBadges.length})</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {lockedBadges.map((badge) => (
                    <BadgeCard key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">In Progress ({activeAchievements.length})</h2>
                <div className="space-y-4">
                  {activeAchievements.map((achievement) => (
                    <AchievementCard key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              </div>

              {completedAchievements.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Completed ({completedAchievements.length})</h2>
                  <div className="space-y-4">
                    {completedAchievements.map((achievement) => (
                      <AchievementCard key={achievement.id} achievement={achievement} />
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="leaderboard" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Contributors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {mockLeaderboard.map((entry) => (
                    <LeaderboardRow key={entry.userId} entry={entry} isCurrentUser={entry.userId === "1"} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
