import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Badge as BadgeType } from "@/lib/gamification-data"
import { cn } from "@/lib/utils"

interface BadgeCardProps {
  badge: BadgeType
}

const rarityColors = {
  common: "bg-muted",
  rare: "bg-chart-2/20 border-chart-2/50",
  epic: "bg-chart-3/20 border-chart-3/50",
  legendary: "bg-chart-5/20 border-chart-5/50",
}

export function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all",
        badge.earned ? "hover:scale-105" : "opacity-60",
        rarityColors[badge.rarity],
      )}
    >
      <CardContent className="p-6 text-center">
        <div className="text-5xl mb-3">{badge.icon}</div>
        <h3 className="font-semibold mb-1">{badge.name}</h3>
        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{badge.description}</p>
        <Badge variant={badge.earned ? "default" : "secondary"} className="text-xs">
          {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
        </Badge>
        {badge.earned && badge.earnedDate && (
          <p className="text-xs text-muted-foreground mt-2">Earned {new Date(badge.earnedDate).toLocaleDateString()}</p>
        )}
        {!badge.earned && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] flex items-center justify-center">
            <Badge variant="outline" className="bg-background">
              Locked
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
