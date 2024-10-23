

import { CalendarIcon, MapPinIcon, Users, PlusCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import Nav from "@/components/nav"

const upcomingActivities = [
  { id: 1, name: "Mountain Hike", date: "2024-10-25", location: "Rocky Mountains", participants: 15 },
  { id: 2, name: "Beach Cleanup", date: "2024-10-27", location: "Sunny Beach", participants: 30 },
  { id: 3, name: "City Bike Tour", date: "2024-10-29", location: "Downtown", participants: 20 },
]

const popularGroups = [
  { id: 1, name: "Hiking Enthusiasts", members: 250, category: "Outdoor" },
  { id: 2, name: "Urban Explorers", members: 180, category: "City" },
  { id: 3, name: "Beach Lovers", members: 210, category: "Outdoor" },
]

const recentMembers = [
  { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg?height=32&width=32", interests: ["Hiking", "Photography"] },
  { id: 2, name: "Bob Smith", avatar: "/placeholder.svg?height=32&width=32", interests: ["Cycling", "Volunteering"] },
  { id: 3, name: "Carol White", avatar: "/placeholder.svg?height=32&width=32", interests: ["Beach", "Cooking"] },
]

const nextActivity = {
  name: "Mountain Hike",
  date: "2024-10-25",
  location: "Rocky Mountains",
  participants: [
    { name: "User 1", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "User 2", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "User 3", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "User 4", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "User 5", avatar: "/placeholder.svg?height=32&width=32" },
  ],
  items: ["Comfortable hiking shoes", "Water bottle", "Sunscreen", "Light snacks"],
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
        <Nav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Outdoor Activities Section */}
          <Card className="col-span-full lg:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-teal-600 text-white">
              <CardTitle className="text-2xl">Outdoor Activities</CardTitle>
              <CardDescription className="text-teal-100">Join an adventure today!</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-4">Upcoming Activities</h3>
                  <ScrollArea className="h-[300px] pr-4">
                    {upcomingActivities.map((activity) => (
                      <div key={activity.id} className="mb-6 last:mb-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-teal-700">{activity.name}</h4>
                          <Badge variant="outline" className="bg-teal-100 text-teal-700">
                            {activity.participants} joined
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          <CalendarIcon className="inline-block mr-2 h-4 w-4" />
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          <MapPinIcon className="inline-block mr-2 h-4 w-4" />
                          {activity.location}
                        </p>
                        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Join Activity</Button>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-4">Your Next Activity</h3>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-teal-700 mb-2">{nextActivity.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <CalendarIcon className="inline-block mr-2 h-4 w-4" />
                      {new Date(nextActivity.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      <MapPinIcon className="inline-block mr-2 h-4 w-4" />
                      {nextActivity.location}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-teal-700 mb-2">Participants:</p>
                      <div className="flex -space-x-2 overflow-hidden">
                        {nextActivity.participants.map((participant, index) => (
                          <Avatar key={index} className="inline-block h-8 w-8 rounded-full ring-2 ring-white">
                            <AvatarImage src={participant.avatar} alt={participant.name} />
                            <AvatarFallback>{participant.name[0]}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teal-700 mb-2">What to bring:</p>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        {nextActivity.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Groups Section */}
          <Card className="col-span-full md:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-emerald-600 text-white">
              <CardTitle className="text-2xl">Groups</CardTitle>
              <CardDescription className="text-emerald-100">Find your community</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-[400px] pr-4">
                {popularGroups.map((group) => (
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

          {/* Community Section */}
          <Card className="col-span-full md:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-cyan-600 text-white">
              <CardTitle className="text-2xl">Community</CardTitle>
              <CardDescription className="text-cyan-100">Connect with new friends</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-[400px] pr-4">
                {recentMembers.map((member) => (
                  <div key={member.id} className="flex items-center mb-6 last:mb-0">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold text-cyan-700">{member.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {member.interests.map((interest, index) => (
                          <Badge key={index} variant="secondary" className="bg-cyan-100 text-cyan-700">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="ml-4 bg-cyan-500 text-white hover:bg-cyan-600">
                      Connect
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Create Activity Button */}
        <div className="fixed bottom-8 right-8">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-4">
            <PlusCircle className="h-6 w-6" />
            <span className="ml-2">Create Activity</span>
          </Button>
        </div>
      </main>
    </div>
  )
}