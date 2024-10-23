import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { UserPlus, MessageCircle, Search, Users, Bell } from "lucide-react"
import Nav from "@/components/nav"

// Mock data for community members
const initialMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    interests: ["React", "Next.js", "UI/UX"],
    isFriend: false,
    status: "online",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=100&width=100",
    interests: ["Node.js", "Express", "MongoDB"],
    isFriend: true,
    status: "offline",
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=100&width=100",
    interests: ["Python", "Machine Learning", "Data Science"],
    isFriend: false,
    status: "away",
  },
]

// Dummy chat history
const initialChatHistory = [
  { id: 1, sender: "Alice Johnson", message: "Hey there! How's your day going?", timestamp: "10:30 AM" },
  { id: 2, sender: "You", message: "Hi Alice! It's going well, thanks. How about yours?", timestamp: "10:32 AM" },
  { id: 3, sender: "Alice Johnson", message: "Pretty good! I'm working on a new React project.", timestamp: "10:35 AM" },
]

export default function CommunityPage() {
  const [members, setMembers] = useState(initialMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMember, setSelectedMember] = useState(null)
  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState(initialChatHistory)
  const [activeTab, setActiveTab] = useState("members")
  const [notifications, setNotifications] = useState(2)

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.interests.some((interest) => interest.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleAddFriend = (id) => {
    setMembers(members.map(member => 
      member.id === id ? { ...member, isFriend: true } : member
    ))
    setNotifications(prev => prev + 1)
  }

  const handleSendMessage = () => {
    if (chatMessage.trim() && selectedMember) {
      const newMessage = { 
        id: chatMessages.length + 1, 
        sender: "You", 
        message: chatMessage, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setChatMessages([...chatMessages, newMessage])
      setChatMessage("")
    }
  }

  useEffect(() => {
    if (selectedMember) {
      setActiveTab("chat")
    }
  }, [selectedMember])

  return (
    <>
      <Nav />
    <div className="container mx-auto p-4">
    
      <div className="flex justify-between items-center mb-6">
        
        <h1 className="text-3xl font-bold text-cyan-700">Community</h1>
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                      {notifications}
                    </span>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>You have {notifications} new notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Your avatar" />
            <AvatarFallback>You</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search members or interests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="members" className="flex items-center justify-center">
            <Users className="mr-2 h-4 w-4" />
            Members
          </TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center justify-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat
          </TabsTrigger>
        </TabsList>
        <TabsContent value="members">
          <Card>
            <CardHeader className="bg-cyan-600 text-white">
              <CardTitle className="text-2xl">Community Members</CardTitle>
              <CardDescription className="text-cyan-100">Connect with people who share your interests</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-[400px] pr-4">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="flex items-center mb-6 last:mb-0">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${
                        member.status === 'online' ? 'bg-green-400' :
                        member.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`} />
                    </div>
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
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            className={`ml-4 ${member.isFriend ? 'bg-green-500' : 'bg-cyan-500'} text-white hover:bg-cyan-600`}
                            onClick={() => handleAddFriend(member.id)}
                            disabled={member.isFriend}
                          >
                            {member.isFriend ? "Friends" : <UserPlus className="mr-2" />}
                            {member.isFriend ? "" : "Add Friend"}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{member.isFriend ? "You are friends" : "Add as a friend"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <Button
                      variant="ghost"
                      className="ml-2"
                      onClick={() => setSelectedMember(member)}
                    >
                      <MessageCircle />
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chat">
          <Card>
            <CardHeader className="bg-cyan-600 text-white">
              <CardTitle className="text-2xl">Chat</CardTitle>
              <CardDescription className="text-cyan-100">
                {selectedMember ? `Chatting with ${selectedMember.name}` : "Select a member to chat"}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ScrollArea className="h-[300px] mb-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`mb-4 ${msg.sender === "You" ? "text-right" : "text-left"}`}>
                    <div className={`inline-block max-w-md p-2 rounded-lg ${msg.sender === "You" ? "bg-cyan-100 text-cyan-800" : "bg-gray-100"}`}>
                      <p className="font-semibold">{msg.sender}</p>
                      <p>{msg.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-grow mr-2"
                  disabled={!selectedMember}
                />
                <Button onClick={handleSendMessage} disabled={!selectedMember} className="bg-cyan-500 text-white hover:bg-cyan-600">Send</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </>
  )
}