"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { MatchCard } from "@/components/matches/match-card"
import { FiltersSidebar } from "@/components/matches/filters-sidebar"
import { Input } from "@/components/ui/input"
import { mockCurrentUser, mockUsers } from "@/lib/mock-data"
import { findMatches } from "@/lib/matching-algorithm"
import { Search, Sparkles } from "lucide-react"

export default function MatchesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)

  const allMatches = useMemo(() => findMatches(mockCurrentUser, mockUsers), [])

  const filteredMatches = useMemo(() => {
    return allMatches.filter((match) => {
      // Search filter
      if (searchQuery && !match.user.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Skills filter
      if (selectedSkills.length > 0) {
        const hasMatchingSkill = selectedSkills.some((skill) => match.user.skillsToTeach.includes(skill))
        if (!hasMatchingSkill) return false
      }

      // Rating filter
      if (match.user.rating < minRating) {
        return false
      }

      return true
    })
  }, [allMatches, searchQuery, selectedSkills, minRating])

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-7xl">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">Skill Matches</h1>
            </div>
            <p className="text-muted-foreground">
              We found {filteredMatches.length} people with skills you want to learn
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-20 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <FiltersSidebar
                  selectedSkills={selectedSkills}
                  onSkillToggle={handleSkillToggle}
                  minRating={minRating}
                  onRatingChange={setMinRating}
                />
              </div>
            </aside>

            <div className="flex-1">
              {filteredMatches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMatches.map((match) => (
                    <MatchCard key={match.user.id} match={match} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No matches found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
