export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  rarity: "common" | "rare" | "epic" | "legendary"
  earned: boolean
  earnedDate?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  progress: number
  total: number
  points: number
  completed: boolean
}

export interface LeaderboardEntry {
  rank: number
  userId: string
  name: string
  avatar: string
  skillPoints: number
  sessionsCompleted: number
  badge?: string
}

export const mockBadges: Badge[] = [
  {
    id: "1",
    name: "Top Mentor",
    description: "Complete 20 teaching sessions",
    icon: "🏆",
    rarity: "epic",
    earned: true,
    earnedDate: "2024-02-15",
  },
  {
    id: "2",
    name: "Quick Learner",
    description: "Complete 10 learning sessions",
    icon: "⚡",
    rarity: "rare",
    earned: true,
    earnedDate: "2024-02-20",
  },
  {
    id: "3",
    name: "Community Star",
    description: "Receive 50 five-star ratings",
    icon: "⭐",
    rarity: "epic",
    earned: true,
    earnedDate: "2024-03-01",
  },
  {
    id: "4",
    name: "Master Teacher",
    description: "Complete 100 teaching sessions",
    icon: "👑",
    rarity: "legendary",
    earned: false,
  },
  {
    id: "5",
    name: "Early Bird",
    description: "Join in the first month",
    icon: "🐦",
    rarity: "common",
    earned: true,
    earnedDate: "2024-01-15",
  },
  {
    id: "6",
    name: "Skill Collector",
    description: "Learn 10 different skills",
    icon: "📚",
    rarity: "rare",
    earned: false,
  },
]

export const mockAchievements: Achievement[] = [
  {
    id: "1",
    title: "First Session",
    description: "Complete your first skill exchange session",
    progress: 1,
    total: 1,
    points: 50,
    completed: true,
  },
  {
    id: "2",
    title: "Session Streak",
    description: "Complete 5 sessions in a row",
    progress: 3,
    total: 5,
    points: 100,
    completed: false,
  },
  {
    id: "3",
    title: "Perfect Rating",
    description: "Maintain a 5.0 rating for 10 sessions",
    progress: 7,
    total: 10,
    points: 200,
    completed: false,
  },
  {
    id: "4",
    title: "Skill Master",
    description: "Teach the same skill 20 times",
    progress: 15,
    total: 20,
    points: 150,
    completed: false,
  },
]

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    userId: "4",
    name: "Emily Rodriguez",
    avatar: "/diverse-business-professionals.png",
    skillPoints: 2850,
    sessionsCompleted: 45,
    badge: "👑",
  },
  {
    rank: 2,
    userId: "2",
    name: "Sarah Chen",
    avatar: "/creative-designer.png",
    skillPoints: 2340,
    sessionsCompleted: 38,
    badge: "🏆",
  },
  {
    rank: 3,
    userId: "5",
    name: "David Kim",
    avatar: "/placeholder.svg",
    skillPoints: 2120,
    sessionsCompleted: 35,
    badge: "🏆",
  },
  {
    rank: 4,
    userId: "1",
    name: "Alex Johnson",
    avatar: "/professional-person.png",
    skillPoints: 1850,
    sessionsCompleted: 28,
    badge: "⭐",
  },
  {
    rank: 5,
    userId: "3",
    name: "Marcus Williams",
    avatar: "/photographer.png",
    skillPoints: 1620,
    sessionsCompleted: 24,
  },
]
