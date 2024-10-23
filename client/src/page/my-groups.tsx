import * as React from "react"
import { CalendarIcon, MapPinIcon, Users, PlusCircle, Settings, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Nav from "@/components/nav"

const myGroups = [
  { id: 1, name: "Hiking Enthusiasts", members: 250, category: "Outdoor", role: "Member" },
  { id: 2, name: "Urban Explorers", members: 180, category: "City", role: "Admin" },
  { id: 3, name: "Beach Lovers", members: 210, category: "Outdoor", role: "Member" },
]

const upcomingActivities = [
  { id: 1, name: "Weekend Mountain Hike", date: "2024-11-20", location: "Blue Ridge Mountains", group: "Hiking Enthusiasts" },
  { id: 2, name: "City Architecture Tour", date: "2024-11-25", location: "Downtown", group: "Urban Explorers" },
  { id: 3, name: "Beach Volleyball Tournament", date: "2024-11-30", location: "Sunny Beach", group: "Beach Lovers" },
]

export function MyGroups() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      <Nav />

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="my-groups" className="mb-8">
          <TabsList>
            <TabsTrigger value="my-groups">My Groups</TabsTrigger>
            <TabsTrigger value="activities">Upcoming Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="my-groups">
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-teal-600 text-white">
                <CardTitle className="text-2xl">My Groups</CardTitle>
                <CardDescription className="text-teal-100">Groups you're a part of</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[400px] pr-4">
                  {myGroups.map((group) => (
                    <div key={group.id} className="mb-6 last:mb-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-teal-700">{group.name}</h3>
                        <Badge variant="outline" className="bg-teal-100 text-teal-700">
                          {group.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        <Users className="inline-block mr-2 h-4 w-4" />
                        {group.members} members
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        Role: {group.role}
                      </p>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">View Group</Button>
                        {group.role === "Admin" && (
                          <Button variant="outline" className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                            <Settings className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="outline" className="bg-red-100 text-red-700 hover:bg-red-200">
                          <LogOut className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="activities">
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-emerald-600 text-white">
                <CardTitle className="text-2xl">Upcoming Activities</CardTitle>
                <CardDescription className="text-emerald-100">Events from your groups</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[400px] pr-4">
                  {upcomingActivities.map((activity) => (
                    <div key={activity.id} className="mb-6 last:mb-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-emerald-700">{activity.name}</h3>
                        <Badge variant="outline" className="bg-emerald-100 text-emerald-700">
                          {activity.group}
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
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">View Details</Button>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="fixed  bottom-8 right-8">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-4">
            <PlusCircle className="h-6 w-6" />
            <span className="ml-2">Create New Group</span>
          </Button>
        </div>
      </main>
    </div>
  )
}