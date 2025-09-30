import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Calendar, Trophy, Settings } from "lucide-react"
import type { User } from "@/lib/mock-data"

interface ProfileHeaderProps {
  user: User
  isOwnProfile?: boolean
}

export function ProfileHeader({ user, isOwnProfile = false }: ProfileHeaderProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar className="h-32 w-32 border-4 border-primary/10">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <p className="text-muted-foreground leading-relaxed">{user.bio}</p>
              </div>
              {isOwnProfile && (
                <Button variant="outline" className="shrink-0 bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{user.rating}</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Calendar className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{user.totalSessions}</div>
                  <div className="text-xs text-muted-foreground">Sessions</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/20">
                  <Trophy className="h-5 w-5 text-chart-4" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{user.skillPoints}</div>
                  <div className="text-xs text-muted-foreground">Points</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Trophy className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{user.badges.length}</div>
                  <div className="text-xs text-muted-foreground">Badges</div>
                </div>
              </div>
            </div>

            {user.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {user.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="gap-1">
                    <Trophy className="h-3 w-3" />
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
