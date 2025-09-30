"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { TimeSlot } from "@/lib/booking-data"
import { Clock } from "lucide-react"

interface TimeSlotsProps {
  slots: TimeSlot[]
  selectedTime: string | null
  onTimeSelect: (time: string) => void
}

export function TimeSlots({ slots, selectedTime, onTimeSelect }: TimeSlotsProps) {
  const availableSlots = slots.filter((slot) => slot.available)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Available Time Slots
          </CardTitle>
          <Badge variant="secondary">{availableSlots.length} available</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-96 overflow-y-auto">
          {slots.map((slot) => (
            <Button
              key={slot.time}
              variant={selectedTime === slot.time ? "default" : "outline"}
              disabled={!slot.available}
              onClick={() => slot.available && onTimeSelect(slot.time)}
              className="bg-transparent"
            >
              {slot.time}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
