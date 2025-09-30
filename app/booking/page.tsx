"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { SessionCard } from "@/components/booking/session-card"
import { CalendarView } from "@/components/booking/calendar-view"
import { TimeSlots } from "@/components/booking/time-slots"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockSessions, generateTimeSlots } from "@/lib/booking-data"
import { Calendar, Plus } from "lucide-react"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const timeSlots = generateTimeSlots()
  const upcomingSessions = mockSessions.filter((s) => s.status === "upcoming")
  const completedSessions = mockSessions.filter((s) => s.status === "completed")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-6 w-6 text-primary" />
                <h1 className="text-3xl font-bold">My Sessions</h1>
              </div>
              <p className="text-muted-foreground">Manage your upcoming and past skill exchange sessions</p>
            </div>
            <Button onClick={() => setShowBookingForm(!showBookingForm)}>
              <Plus className="h-4 w-4 mr-2" />
              Book New Session
            </Button>
          </div>

          {showBookingForm && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <CalendarView selectedDate={selectedDate} onDateSelect={setSelectedDate} />
              <TimeSlots slots={timeSlots} selectedTime={selectedTime} onTimeSelect={setSelectedTime} />
            </div>
          )}

          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming ({upcomingSessions.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedSessions.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              {upcomingSessions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingSessions.map((session) => (
                    <SessionCard key={session.id} session={session} currentUserId="1" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No upcoming sessions. Book a session to get started!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              {completedSessions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {completedSessions.map((session) => (
                    <SessionCard key={session.id} session={session} currentUserId="1" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No completed sessions yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
