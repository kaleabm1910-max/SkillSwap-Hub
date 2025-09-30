export interface Session {
  id: string
  mentorId: string
  mentorName: string
  mentorAvatar: string
  learnerId: string
  learnerName: string
  learnerAvatar: string
  skill: string
  date: string
  time: string
  duration: number
  status: "upcoming" | "completed" | "cancelled"
  type: "online" | "offline"
  location?: string
}

export const mockSessions: Session[] = [
  {
    id: "1",
    mentorId: "2",
    mentorName: "Sarah Chen",
    mentorAvatar: "/creative-designer.png",
    learnerId: "1",
    learnerName: "Alex Johnson",
    learnerAvatar: "/professional-person.png",
    skill: "Video Editing",
    date: "2024-03-25",
    time: "14:00",
    duration: 60,
    status: "upcoming",
    type: "online",
  },
  {
    id: "2",
    mentorId: "1",
    mentorName: "Alex Johnson",
    mentorAvatar: "/professional-person.png",
    learnerId: "2",
    learnerName: "Sarah Chen",
    learnerAvatar: "/creative-designer.png",
    skill: "Web Development",
    date: "2024-03-26",
    time: "10:00",
    duration: 60,
    status: "upcoming",
    type: "online",
  },
  {
    id: "3",
    mentorId: "3",
    mentorName: "Marcus Williams",
    mentorAvatar: "/photographer.png",
    learnerId: "1",
    learnerName: "Alex Johnson",
    learnerAvatar: "/professional-person.png",
    skill: "Photography",
    date: "2024-03-28",
    time: "16:00",
    duration: 90,
    status: "upcoming",
    type: "offline",
    location: "Central Park",
  },
]

export interface TimeSlot {
  time: string
  available: boolean
}

export const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = []
  for (let hour = 9; hour <= 18; hour++) {
    slots.push({
      time: `${hour.toString().padStart(2, "0")}:00`,
      available: Math.random() > 0.3,
    })
    slots.push({
      time: `${hour.toString().padStart(2, "0")}:30`,
      available: Math.random() > 0.3,
    })
  }
  return slots
}
