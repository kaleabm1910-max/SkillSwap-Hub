export interface User {
  id: string
  name: string
  email: string
  bio: string
  avatar: string
  skillsToTeach: string[]
  skillsToLearn: string[]
  rating: number
  totalSessions: number
  skillPoints: number
  joinedDate: string
  badges: string[]
}

export const mockCurrentUser: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex@example.com",
  bio: "Passionate web developer with 5 years of experience. Love teaching and learning new skills!",
  avatar: "/professional-person.png",
  skillsToTeach: ["Web Development", "React", "TypeScript"],
  skillsToLearn: ["Video Editing", "Graphic Design", "Photography"],
  rating: 4.8,
  totalSessions: 24,
  skillPoints: 1250,
  joinedDate: "2024-01-15",
  badges: ["Top Mentor", "Quick Learner", "Community Star"],
}

export const mockUsers: User[] = [
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    bio: "Professional graphic designer and video editor. Always excited to share my creative skills!",
    avatar: "/creative-designer.png",
    skillsToTeach: ["Graphic Design", "Video Editing", "Adobe Suite"],
    skillsToLearn: ["Web Development", "React", "UI Design"],
    rating: 4.9,
    totalSessions: 32,
    skillPoints: 1680,
    joinedDate: "2023-11-20",
    badges: ["Top Mentor", "Creative Master"],
  },
  {
    id: "3",
    name: "Marcus Williams",
    email: "marcus@example.com",
    bio: "Photographer and content creator. Love helping others capture amazing moments!",
    avatar: "/photographer.png",
    skillsToTeach: ["Photography", "Lightroom", "Content Creation"],
    skillsToLearn: ["Marketing", "SEO", "Social Media"],
    rating: 4.7,
    totalSessions: 18,
    skillPoints: 920,
    joinedDate: "2024-02-10",
    badges: ["Rising Star"],
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "emily@example.com",
    bio: "Digital marketer with a passion for helping businesses grow online.",
    avatar: "/diverse-business-professionals.png",
    skillsToTeach: ["Marketing", "SEO", "Social Media", "Content Strategy"],
    skillsToLearn: ["Graphic Design", "Video Editing"],
    rating: 4.9,
    totalSessions: 28,
    skillPoints: 1450,
    joinedDate: "2023-12-05",
    badges: ["Top Mentor", "Marketing Pro"],
  },
]
