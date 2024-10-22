import * as React from "react"
import { CalendarIcon, MapPinIcon, Users, Edit, Camera, Mail, Phone, Globe } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

const userProfile = {
  name: "Alex Johnson",
  username: "@alexj",
  avatar: "/placeholder.svg?height=128&width=128",
  bio: "Outdoor enthusiast | Photography lover | Always up for a new adventure!",
  location: "San Francisco, CA",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  website: "www.alexjohnson.com",
  interests: ["Hiking", "Photography", "Travel", "Yoga", "Cooking"],
  socialMedia: [
    { platform: "Instagram", username: "@alex.adventures" },
    { platform: "Twitter", username: "@alexj_tweets" },
  ],
}

const activities = [
  { id: 1, name: "Mountain Hike", date: "2024-11-15", location: "Rocky Mountains" },
  { id: 2, name: "Beach Cleanup", date: "2024-11-20", location: "Sunny Beach" },
  { id: 3, name: "City Bike Tour", date: "2024-11-25", location: "Downtown" },
]

const groups = [
  { id: 1, name: "Hiking Enthusiasts", members: 250, role: "Member" },
  { id: 2, name: "Urban Explorers", members: 180, role: "Admin" },
  { id: 3, name: "Beach Lovers", members: 210, role: "Member" },
]

export function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-teal-700">BlendIn</h1>
            <p className="text-xl text-emerald-600">My Profile</p>
          </div>
          <nav>
            <Button variant="ghost" className="mr-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50">Dashboard</Button>
            <Button variant="ghost" className="mr-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50">Explore</Button>
            <Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">My Groups</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="relative h-48 bg-gradient-to-r from-teal-500 to-emerald-500">
            <Button className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white">
              <Camera className="h-4 w-4 mr-2" />
              Change Cover
            </Button>
          </div>
          <CardContent className="p-6 relative">
            <Avatar className="absolute -top-16 left-6 h-32 w-32 border-4 border-white">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="mt-20 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-teal-700">{userProfile.name}</h2>
                <p className="text-gray-600">{userProfile.username}</p>
              </div>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            <p className="mt-4 text-gray-700">{userProfile.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {userProfile.interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="bg-teal-100 text-teal-700">
                  {interest}
                </Badge>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                {userProfile.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                {userProfile.email}
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                {userProfile.phone}
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="h-5 w-5 mr-2" />
                {userProfile.website}
              </div>
              {userProfile.socialMedia.map((social, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  {social.platform}: {social.username}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="activities">
          <TabsList className="mb-4">
            <TabsTrigger value="activities">My Activities</TabsTrigger>
            <TabsTrigger value="groups">My Groups</TabsTrigger>
          </TabsList>
          <TabsContent value="activities">
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-teal-600 text-white">
                <CardTitle className="text-2xl">My Activities</CardTitle>
                <CardDescription className="text-teal-100">Upcoming events you're participating in</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[300px] pr-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="mb-6 last:mb-0">
                      <h3 className="text-lg font-semibold text-teal-700 mb-2">{activity.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <CalendarIcon className="inline-block mr-2 h-4 w-4" />
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        <MapPinIcon className="inline-block mr-2 h-4 w-4" />
                        {activity.location}
                      </p>
                      <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">View Details</Button>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="groups">
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-emerald-600 text-white">
                <CardTitle className="text-2xl">My Groups</CardTitle>
                <CardDescription className="text-emerald-100">Groups you're a member of</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[300px] pr-4">
                  {groups.map((group) => (
                    <div key={group.id} className="mb-6 last:mb-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-emerald-700">{group.name}</h3>
                        <Badge variant="outline" className="bg-emerald-100 text-emerald-700">
                          {group.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        <Users className="inline-block mr-2 h-4 w-4" />
                        {group.members} members
                      </p>
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">View Group</Button>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}