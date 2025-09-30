import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Calendar } from "lucide-react"
import type { User } from "@/lib/mock-data"
import Link from "next/link"

interface UserCardProps {
  user: User
  showMatchScore?: boolean
  matchScore?: number
}

export function UserCard({ user, showMatchScore = false, matchScore }: UserCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16 border-2 border-primary/10">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg mb-1 truncate">{user.name}</h3>
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
            {showMatchScore && matchScore && (
              <Badge variant="default" className="mb-2">
                {matchScore}% Match
              </Badge>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{user.bio}</p>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Can teach:</p>
            <div className="flex flex-wrap gap-1">
              {user.skillsToTeach.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {user.skillsToTeach.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{user.skillsToTeach.length - 3}
                </Badge>
              )}
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
