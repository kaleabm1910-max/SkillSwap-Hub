import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Video } from "lucide-react"
import type { Session } from "@/lib/booking-data"

interface SessionCardProps {
  session: Session
  currentUserId: string
}

export function SessionCard({ session, currentUserId }: SessionCardProps) {
  const isTeaching = session.mentorId === currentUserId
  const otherUser = isTeaching
    ? { name: session.learnerName, avatar: session.learnerAvatar }
    : { name: session.mentorName, avatar: session.mentorAvatar }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-12 w-12 border-2 border-primary/10">
            <AvatarImage src={otherUser.avatar || "/placeholder.svg"} alt={otherUser.name} />
            <AvatarFallback>{otherUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div>
                <h3 className="font-semibold text-lg">{session.skill}</h3>
                <p className="text-sm text-muted-foreground">
                  {isTeaching ? "Teaching" : "Learning from"} {otherUser.name}
                </p>
              </div>
              <Badge variant={session.status === "upcoming" ? "default" : "secondary"}>
                {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(session.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {session.time} ({session.duration} min)
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {session.type === "online" ? (
              <>
                <Video className="h-4 w-4" />
                <span>Online Session</span>
              </>
            ) : (
              <>
                <MapPin className="h-4 w-4" />
                <span>{session.location}</span>
              </>
            )}
          </div>
        </div>

        {session.status === "upcoming" && (
          <div className="flex gap-2">
            {session.type === "online" && (
              <Button className="flex-1" size="sm">
                Join Session
              </Button>
            )}
            <Button variant="outline" className="flex-1 bg-transparent" size="sm">
              Reschedule
            </Button>
            <Button variant="outline" className="bg-transparent" size="sm">
              Cancel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
