
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Sparkles, Users, Calendar, Globe, Zap, Heart, MapPin, Star } from "lucide-react"
import Header from './Header'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    Connect, Explore, and Blend In
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-300">
                    Discover events, match with like-minded people, and immerse yourself in new cultures with Blendin.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
               
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose Blendin?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle>Match with Like-minded People</CardTitle>
                </CardHeader>
                <CardContent>
                  Our advanced algorithm connects you with people who share your interests and passions.
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Calendar className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle>Discover Exciting Events</CardTitle>
                </CardHeader>
                <CardContent>
                  From local meetups to global festivals, find events that spark your curiosity.
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Globe className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle>Explore New Cultures</CardTitle>
                </CardHeader>
                <CardContent>
                  Immerse yourself in diverse traditions and broaden your cultural horizons.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Events
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Tokyo Anime Festival", date: "Aug 15-17, 2024", location: "Tokyo, Japan", image: "/placeholder.svg?height=200&width=300" },
                { title: "Berlin Street Art Tour", date: "Sep 5, 2024", location: "Berlin, Germany", image: "/placeholder.svg?height=200&width=300" },
                { title: "New Orleans Jazz Fest", date: "Oct 10-12, 2024", location: "New Orleans, USA", image: "/placeholder.svg?height=200&width=300" },
              ].map((event, index) => (
                <Card key={index} className="overflow-hidden">
                  
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <Calendar className="inline-block w-4 h-4 mr-1" /> {event.date}
                      <br />
                      <MapPin className="inline-block w-4 h-4 mr-1" /> {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Blend In, Stand Out
                </h2>
                <p className="max-w-[600px] md:text-xl lg:text-base opacity-90">
                  Blendin isn't just another social app. It's your passport to authentic connections and unforgettable experiences.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5" /> Intelligent matching based on shared interests
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="h-5 w-5" /> Build meaningful friendships across cultures
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="h-5 w-5" /> Participate in local and global events
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[300px] h-[300px]">
                
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Fun Facts About Blendin
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-blue-600">1M+</CardTitle>
                  <CardDescription>Connections Made</CardDescription>
                </CardHeader>
                <CardContent>
                  Over a million friendships have blossomed through our app!
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-green-600">500+</CardTitle>
                  <CardDescription>Cultural Festivals</CardDescription>
                </CardHeader>
                <CardContent>
                  Users have attended hundreds of unique cultural festivals worldwide.
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-4xl font-bold text-purple-600">10k+</CardTitle>
                  <CardDescription>Hobbies Matched</CardDescription>
                </CardHeader>
                <CardContent>
                  From axe throwing to zumba, we've matched people across thousands of diverse hobbies.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Users Say
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Sarah L.", location: "New York, USA", quote: "Blendin helped me find my tribe in a new city. The events are amazing!", avatar: "/placeholder.svg?height=60&width=60" },
                { name: "Raj P.", location: "Mumbai, India", quote: "I've made friends from all over the world. It's like traveling without leaving home!", avatar: "/placeholder.svg?height=60&width=60" },
                { name: "Emma S.", location: "London, UK", quote: "The cultural exchange on Blendin is unparalleled. I learn something new every day.", avatar: "/placeholder.svg?height=60&width=60" },
              ].map((testimonial, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.location}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Blend In?
            </h2>
            <p className="mx-auto max-w-[700px] text-lg mb-8">
              Join Blendin today and start your journey of connection, cultural exploration, and unforgettable experiences.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}