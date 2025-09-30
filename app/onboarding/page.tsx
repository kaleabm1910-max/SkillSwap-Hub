"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

const popularSkills = [
  "Web Development",
  "Graphic Design",
  "Video Editing",
  "Photography",
  "Writing",
  "Marketing",
  "Music Production",
  "Language Teaching",
  "Cooking",
  "Fitness Training",
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [skillsToTeach, setSkillsToTeach] = useState<string[]>([])
  const [skillsToLearn, setSkillsToLearn] = useState<string[]>([])
  const [customSkill, setCustomSkill] = useState("")
  const [bio, setBio] = useState("")

  const addSkill = (skill: string, type: "teach" | "learn") => {
    if (type === "teach" && !skillsToTeach.includes(skill)) {
      setSkillsToTeach([...skillsToTeach, skill])
    } else if (type === "learn" && !skillsToLearn.includes(skill)) {
      setSkillsToLearn([...skillsToLearn, skill])
    }
    setCustomSkill("")
  }

  const removeSkill = (skill: string, type: "teach" | "learn") => {
    if (type === "teach") {
      setSkillsToTeach(skillsToTeach.filter((s) => s !== skill))
    } else {
      setSkillsToLearn(skillsToLearn.filter((s) => s !== skill))
    }
  }

  const handleComplete = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
          <CardDescription>Step {step} of 3 - Let's set up your skill exchange profile</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">What skills can you teach?</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {popularSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={skillsToTeach.includes(skill) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => addSkill(skill, "teach")}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add custom skill..."
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && customSkill.trim()) {
                        addSkill(customSkill.trim(), "teach")
                      }
                    }}
                  />
                  <Button type="button" onClick={() => customSkill.trim() && addSkill(customSkill.trim(), "teach")}>
                    Add
                  </Button>
                </div>
                {skillsToTeach.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Your teaching skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {skillsToTeach.map((skill) => (
                        <Badge key={skill} className="gap-1">
                          {skill}
                          <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill, "teach")} />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Button onClick={() => setStep(2)} disabled={skillsToTeach.length === 0} className="w-full">
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">What skills do you want to learn?</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {popularSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={skillsToLearn.includes(skill) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => addSkill(skill, "learn")}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add custom skill..."
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && customSkill.trim()) {
                        addSkill(customSkill.trim(), "learn")
                      }
                    }}
                  />
                  <Button type="button" onClick={() => customSkill.trim() && addSkill(customSkill.trim(), "learn")}>
                    Add
                  </Button>
                </div>
                {skillsToLearn.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Skills you want to learn:</p>
                    <div className="flex flex-wrap gap-2">
                      {skillsToLearn.map((skill) => (
                        <Badge key={skill} variant="secondary" className="gap-1">
                          {skill}
                          <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill, "learn")} />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(1)} className="w-full">
                  Back
                </Button>
                <Button onClick={() => setStep(3)} disabled={skillsToLearn.length === 0} className="w-full">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bio">Tell us about yourself</Label>
                <Textarea
                  id="bio"
                  placeholder="Share your experience, interests, and what motivates you to exchange skills..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={6}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(2)} className="w-full">
                  Back
                </Button>
                <Button onClick={handleComplete} className="w-full">
                  Complete Profile
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
