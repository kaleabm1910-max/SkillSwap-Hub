"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { UserCard } from "@/components/profile/user-card"
import { Input } from "@/components/ui/input"
import { mockUsers } from "@/lib/mock-data"
import { Search } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = mockUsers.filter((user) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      user.name.toLowerCase().includes(query) ||
      user.skillsToTeach.some((skill) => skill.toLowerCase().includes(query)) ||
      user.skillsToLearn.some((skill) => skill.toLowerCase().includes(query))
    )
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Explore Skills</h1>
            <p className="text-muted-foreground">Discover talented people ready to exchange skills</p>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <TabsList>
                <TabsTrigger value="all">All Users</TabsTrigger>
                <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
                <TabsTrigger value="new">New Members</TabsTrigger>
              </TabsList>

              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="top-rated" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers
                  .filter((user) => user.rating >= 4.8)
                  .map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers
                  .filter((user) => new Date(user.joinedDate) > new Date("2024-01-01"))
                  .map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
