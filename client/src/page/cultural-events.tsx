import { useState, useEffect, ReactEventHandler } from 'react'
import { PlusCircle, CalendarIcon, MapPinIcon, Globe2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import Nav from '@/components/nav'

// Sample data for cultural events
const initialCulturalEvents = [
  {
    id: 1,
    name: "Diwali Festival of Lights",
    date: "2023-11-12",
    location: "Little India, Singapore",
    organizer: "Singapore Hindu Endowments Board",
    description: "Experience the vibrant celebration of Diwali with stunning light displays, cultural performances, and delicious Indian cuisine.",
    image: "https://images.unsplash.com/photo-1508519829430-40f7d3d161b4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Halloween Spooktacular",
    date: "2023-10-31",
    location: "Universal Studios, Orlando",
    organizer: "Universal Orlando Resort",
    description: "Join us for a night of thrills and chills with haunted houses, costume contests, and trick-or-treating throughout the park.",
    image: "https://img.freepik.com/free-vector/halloween-background-flat-design_52683-43845.jpg"
  },
  {
    id: 3,
    name: "Lunar New Year Celebration",
    date: "2024-02-10",
    location: "Chinatown, San Francisco",
    organizer: "San Francisco Chinese Chamber of Commerce",
    description: "Welcome the Year of the Dragon with traditional lion dances, fireworks, and a grand parade through the streets of Chinatown.",
    image: "https://cdn.vectorstock.com/i/1000v/75/81/lunar-new-year-chinese-2025-vector-49017581.jpg"
  },
  {
    id: 4,
    name: "Oktoberfest Munich",
    date: "2023-09-16",
    location: "Theresienwiese, Munich",
    organizer: "City of Munich",
    description: "Experience the world's largest Volksfest with traditional Bavarian food, music, and of course, plenty of beer!",
    image: "https://cdn.prod.website-files.com/650827a5d8ab2afe46d870f7/66e04954192ce2e3d39d0e60_pexels-manjose-9827.jpg"
  },
]

export default function CulturalEvents() {
  const [culturalEvents, setCulturalEvents] = useState(initialCulturalEvents)
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
    organizer: '',
    description: '',
    image: '/placeholder.svg?height=200&width=300'
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setNewEvent(prev => ({ ...prev, [id.replace('event-', '')]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = culturalEvents.length + 1
    setCulturalEvents(prev => [...prev, { id, ...newEvent }])
    setNewEvent({ name: '', date: '', location: '', organizer: '', description: '', image: '/placeholder.svg?height=200&width=300' })
  }

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
     <Nav />
   
    <div className="container mx-auto py-10">
      
      <Card className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-cyan-700 text-white">
          <CardTitle className="text-3xl">Cultural Events</CardTitle>
          <CardDescription className="text-purple-100">Explore and share diverse cultural experiences</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-cyan-500">Upcoming Cultural Events</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-cyan-400 hover:bg-cyan-600 text-white">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Post Event
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Post a Cultural Event</DialogTitle>
                  <DialogDescription>
                    Share details about a cultural event you're organizing or have heard about.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event-name" className="text-right">
                        Event Name
                      </Label>
                      <Input id="event-name" value={newEvent.name} onChange={handleInputChange} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event-date" className="text-right">
                        Date
                      </Label>
                      <Input id="event-date" type="date" value={newEvent.date} onChange={handleInputChange} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event-location" className="text-right">
                        Location
                      </Label>
                      <Input id="event-location" value={newEvent.location} onChange={handleInputChange} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event-organizer" className="text-right">
                        Organizer
                      </Label>
                      <Input id="event-organizer" value={newEvent.organizer} onChange={handleInputChange} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="event-description" className="text-right">
                        Description
                      </Label>
                      <Textarea id="event-description" value={newEvent.description} onChange={handleInputChange} className="col-span-3" required />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Post Event</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <ScrollArea className="h-[1200px] pr-4">
            {culturalEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="mb-6 last:mb-0 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{event.name}</h3>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <CalendarIcon className="inline-block mr-2 h-4 w-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <MapPinIcon className="inline-block mr-2 h-4 w-4" />
                      {event.location}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <Globe2 className="inline-block mr-2 h-4 w-4" />
                      Organized by: {event.organizer}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
    </>
  )
}