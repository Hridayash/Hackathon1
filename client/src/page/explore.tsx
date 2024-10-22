import * as React from "react"
import { CalendarIcon, MapPinIcon, Users, Search, Filter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Nav from "@/components/nav"

const activities = [
  { id: 1, name: "Mountain Hike", date: "2024-11-05", location: "Rocky Mountains", participants: 15, category: "Outdoor" },
  { id: 2, name: "Beach Cleanup", date: "2024-11-07", location: "Sunny Beach", participants: 30, category: "Environment" },
  { id: 3, name: "City Bike Tour", date: "2024-11-09", location: "Downtown", participants: 20, category: "Urban" },
  { id: 4, name: "Yoga in the Park", date: "2024-11-12", location: "Central Park", participants: 25, category: "Wellness" },
  { id: 5, name: "Photography Walk", date: "2024-11-15", location: "Historic District", participants: 12, category: "Arts" },
]

const groups = [
  { id: 1, name: "Hiking Enthusiasts", members: 250, category: "Outdoor" },
  { id: 2, name: "Urban Explorers", members: 180, category: "City" },
  { id: 3, name: "Beach Lovers", members: 210, category: "Outdoor" },
  { id: 4, name: "Eco Warriors", members: 150, category: "Environment" },
  { id: 5, name: "Art Collective", members: 120, category: "Arts" },
]

export function Explore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      <Nav/>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Discover Activities and Groups</h2>
          <div className="flex gap-4">
            <div className="flex-grow">
              <Input placeholder="Search activities or groups" className="w-full" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="outdoor">Outdoor</SelectItem>
                <SelectItem value="environment">Environment</SelectItem>
                <SelectItem value="urban">Urban</SelectItem>
                <SelectItem value="wellness">Wellness</SelectItem>
                <SelectItem value="arts">Arts</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-teal-600 text-white">
              <CardTitle className="text-2xl">Upcoming Activities</CardTitle>
              <CardDescription className="text-teal-100">Join an exciting event</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-[400px] pr-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="mb-6 last:mb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-teal-700">{activity.name}</h3>
                      <Badge variant="outline" className="bg-teal-100 text-teal-700">
                        {activity.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <CalendarIcon className="inline-block mr-2 h-4 w-4" />
                      {new Date(activity.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <MapPinIcon className="inline-block mr-2 h-4 w-4" />
                      {activity.location}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      <Users className="inline-block mr-2 h-4 w-4" />
                      {activity.participants} participants
                    </p>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Join Activity</Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-emerald-600 text-white">
              <CardTitle className="text-2xl">Popular Groups</CardTitle>
              <CardDescription className="text-emerald-100">Find your community</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-[400px] pr-4">
                {groups.map((group) => (
                  <div key={group.id} className="mb-6 last:mb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-emerald-700">{group.name}</h3>
                      <Badge variant="outline" className="bg-emerald-100 text-emerald-700">
                        {group.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      <Users className="inline-block mr-2 h-4 w-4" />
                      {group.members} members
                    </p>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Join Group</Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}