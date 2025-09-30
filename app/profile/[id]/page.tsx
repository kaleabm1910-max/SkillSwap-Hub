import { ProfileHeader } from "@/components/profile/profile-header"
import { SkillsSection } from "@/components/profile/skills-section"
import { Header } from "@/components/header"
import { mockCurrentUser, mockUsers } from "@/lib/mock-data"

export default function ProfilePage({ params }: { params: { id: string } }) {
  // In a real app, fetch user by ID
  const user = params.id === "1" ? mockCurrentUser : mockUsers.find((u) => u.id === params.id) || mockCurrentUser
  const isOwnProfile = params.id === "1"

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-5xl">
          <div className="space-y-6">
            <ProfileHeader user={user} isOwnProfile={isOwnProfile} />
            <SkillsSection skillsToTeach={user.skillsToTeach} skillsToLearn={user.skillsToLearn} />
          </div>
        </div>
      </main>
    </div>
  )
}
