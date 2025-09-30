import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { Achievement } from "@/lib/gamification-data"
import { Trophy } from "lucide-react"

interface AchievementCardProps {
  achievement: Achievement
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const progressPercentage = (achievement.progress / achievement.total) * 100

  return (
    <Card className={achievement.completed ? "border-primary/50" : ""}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl shrink-0 ${
              achievement.completed ? "bg-primary text-primary-foreground" : "bg-muted"
            }`}
          >
            <Trophy className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
              <Badge variant={achievement.completed ? "default" : "secondary"}>+{achievement.points} pts</Badge>
            </div>
            <div className="space-y-2">
              <Progress value={progressPercentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {achievement.progress} / {achievement.total} {achievement.completed ? "✓ Completed" : ""}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
