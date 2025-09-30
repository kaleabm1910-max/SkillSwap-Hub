import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Calendar, ArrowRightLeft } from "lucide-react"
import type { MatchResult } from "@/lib/matching-algorithm"
import Link from "next/link"

interface MatchCardProps {
  match: MatchResult
}

export function MatchCard({ match }: MatchCardProps) {
  const { user, matchScore, matchedSkills } = match

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16 border-2 border-primary/10">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-lg truncate">{user.name}</h3>
              <Badge variant="default" className="shrink-0">
                {matchScore}% Match
              </Badge>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{user.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{user.totalSessions} sessions</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{user.bio}</p>

        <div className="space-y-3">
          <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <ArrowRightLeft className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-primary mb-1">Perfect Exchange</p>
              <div className="flex flex-wrap gap-1">
                {matchedSkills.map((skill) => (
                  <Badge key={skill} variant="default" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">They can also teach:</p>
            <div className="flex flex-wrap gap-1">
              {user.skillsToTeach
                .filter((skill) => !matchedSkills.includes(skill))
                .slice(0, 3)
                .map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button className="flex-1" asChild>
          <Link href={`/profile/${user.id}`}>View Profile</Link>
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          Request Session
        </Button>
      </CardFooter>
    </Card>
  )
}
