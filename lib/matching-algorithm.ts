import type { User } from "./mock-data"

export interface MatchResult {
  user: User
  matchScore: number
  matchedSkills: string[]
}

export function calculateMatchScore(currentUser: User, otherUser: User): MatchResult {
  // Find skills that match (what current user wants to learn and other user can teach)
  const matchedSkills = currentUser.skillsToLearn.filter((skill) => otherUser.skillsToTeach.includes(skill))

  // Find reverse matches (what other user wants to learn and current user can teach)
  const reverseMatches = otherUser.skillsToLearn.filter((skill) => currentUser.skillsToTeach.includes(skill))

  // Calculate match score based on number of matches
  const totalPossibleMatches = Math.max(currentUser.skillsToLearn.length, 1)
  const matchPercentage = Math.round((matchedSkills.length / totalPossibleMatches) * 100)

  // Bonus points for mutual matches
  const mutualBonus = reverseMatches.length > 0 ? 20 : 0

  const finalScore = Math.min(matchPercentage + mutualBonus, 100)

  return {
    user: otherUser,
    matchScore: finalScore,
    matchedSkills,
  }
}

export function findMatches(currentUser: User, allUsers: User[]): MatchResult[] {
  const matches = allUsers
    .filter((user) => user.id !== currentUser.id)
    .map((user) => calculateMatchScore(currentUser, user))
    .filter((match) => match.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)

  return matches
}
