import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { LeaderboardEntry } from "@/lib/gamification-data"
import { Trophy, Medal } from "lucide-react"
import Link from "next/link"

interface LeaderboardRowProps {
  entry: LeaderboardEntry
  isCurrentUser?: boolean
}

export function LeaderboardRow({ entry, isCurrentUser = false }: LeaderboardRowProps) {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-chart-5" />
    if (rank === 2) return <Medal className="h-5 w-5 text-muted-foreground" />
    if (rank === 3) return <Medal className="h-5 w-5 text-chart-4" />
    return null
  }

  return (
    <Link
      href={`/profile/${entry.userId}`}
      className={`flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-accent ${
        isCurrentUser ? "bg-primary/5 border-2 border-primary/20" : ""
      }`}
    >
      <div className="flex items-center justify-center w-12 shrink-0">
        {getRankIcon(entry.rank) || <span className="text-lg font-bold text-muted-foreground">#{entry.rank}</span>}
      </div>

      <Avatar className="h-12 w-12 border-2 border-primary/10">
        <AvatarImage src={entry.avatar || "/placeholder.svg"} alt={entry.name} />
        <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold truncate">{entry.name}</h3>
          {entry.badge && <span className="text-lg">{entry.badge}</span>}
          {isCurrentUser && <Badge variant="secondary">You</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{entry.sessionsCompleted} sessions completed</p>
      </div>

      <div className="text-right shrink-0">
        <div className="text-2xl font-bold text-primary">{entry.skillPoints.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">points</p>
      </div>
    </Link>
  )
}
