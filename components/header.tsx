import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Users className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">SkillSwap Hub</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/explore"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Explore Skills
          </Link>
          <Link
            href="/matches"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Matches
          </Link>
          <Link
            href="/rewards"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Rewards
          </Link>
          <Link
            href="/premium"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Premium
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
