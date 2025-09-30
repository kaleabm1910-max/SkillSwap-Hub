"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const popularSkills = [
  "Web Development",
  "Graphic Design",
  "Video Editing",
  "Photography",
  "Writing",
  "Marketing",
  "Music Production",
  "Language Teaching",
]

interface FiltersSidebarProps {
  selectedSkills: string[]
  onSkillToggle: (skill: string) => void
  minRating: number
  onRatingChange: (rating: number) => void
}

export function FiltersSidebar({ selectedSkills, onSkillToggle, minRating, onRatingChange }: FiltersSidebarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="mb-3 block">Skills</Label>
          <div className="flex flex-wrap gap-2">
            {popularSkills.map((skill) => (
              <Badge
                key={skill}
                variant={selectedSkills.includes(skill) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => onSkillToggle(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <Label className="mb-3 flex items-center justify-between">
            <span>Minimum Rating</span>
            <span className="flex items-center gap-1 text-sm font-normal">
              <Star className="h-3 w-3 fill-primary text-primary" />
              {minRating.toFixed(1)}
            </span>
          </Label>
          <Slider
            value={[minRating]}
            onValueChange={(value) => onRatingChange(value[0])}
            min={0}
            max={5}
            step={0.1}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  )
}
