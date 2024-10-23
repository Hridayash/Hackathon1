import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sparkles, Users, Calendar, Globe, Zap, Heart, MapPin, Star } from "lucide-react"
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom' 

export default function LandingPage() {
  const navigate = useNavigate(); // Initialize navigate

  const handleGetStarted = () => {
    navigate('/signup'); // Navigate to login page
  };
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen items-center">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_500px] items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600">
                      Connect, Explore, and Blend In
                    </h1>
                    <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-300">
                      Discover events, match with like-minded people, and immerse yourself in new cultures with BlendIn.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white"  onClick={handleGetStarted}>Get Started</Button>
                    <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img src="https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/floating_lanterns_chiang_mai_thailand_festivals.jpg" alt="BlendIn Hero" className="w-[350px] lg:w-[450px] rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose BlendIn Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Why Choose BlendIn?
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <Users className="h-10 w-10 mb-2 text-green-600" />
                    <CardTitle>Match with Like-minded People</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Our advanced algorithm connects you with people who share your interests and passions.
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <Calendar className="h-10 w-10 mb-2 text-yellow-600" />
                    <CardTitle>Discover Exciting Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    From local meetups to global festivals, find events that spark your curiosity.
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <Globe className="h-10 w-10 mb-2 text-orange-600" />
                    <CardTitle>Explore New Cultures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Immerse yourself in diverse traditions and broaden your cultural horizons.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Featured Events Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Featured Events
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Tokyo Anime Festival", date: "Aug 15-17, 2024", location: "Tokyo, Japan", image: "https://www.gamesvillage.it/wp-content/uploads/2020/12/Tokyo-Anime-Award-1.jpg" },
                  { title: "Berlin Street Art Tour", date: "Sep 5, 2024", location: "Berlin, Germany", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBkzI7aus2mEqA_rm9e7LscBlIcqJStnTsA&s" },
                  { title: "New Orleans Jazz Fest", date: "Oct 10-12, 2024", location: "New Orleans, USA", image: "https://static01.nyt.com/images/2021/08/08/lens/08v-virus-briefing-jazz-festival-photo-01/08v-virus-briefing-jazz-festival-photo-01-superJumbo.jpg" },
                ].map((event, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img src={event.image} alt={event.title} className="w-full h-[200px] object-cover" />
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>
                        <Calendar className="inline-block w-4 h-4 mr-1" /> {event.date}
                        <br />
                        <MapPin className="inline-block w-4 h-4 mr-1" /> {event.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleGetStarted}>Learn More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Fun Facts Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
               Future Target For BlendIn
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
                  <CardHeader>
                    <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-green-600">1M+</CardTitle>
                    <CardDescription>Connections Made</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Over a million friendships have blossomed through our app!
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
                  <CardHeader>
                    <div className="mx-auto bg-orange-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                      <Globe className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-orange-600">500+</CardTitle>
                    <CardDescription>Cultural Festivals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Users have attended hundreds of unique cultural festivals worldwide.
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
                  <CardHeader>
                    <div className="mx-auto bg-yellow-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                      <Sparkles className="h-8 w-8 text-yellow-600" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-yellow-600">10k+</CardTitle>
                    <CardDescription>Hobbies Matched</CardDescription>
                  </CardHeader>
                  <CardContent>
                    From axe throwing to zumba, we've matched people across thousands of diverse hobbies.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-black to-pink-600 text-white">
  <div className="container mx-auto px-4 md:px-6 text-center">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 transform transition duration-300 ease-in-out hover:scale-105">
      Ready to Blend In?
    </h2>
    <p className="mx-auto max-w-[700px] text-lg mb-8 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100">
      Join BlendIn today and start your journey of connection, cultural exploration, and unforgettable experiences.
    </p>
    <Button size="lg" variant="secondary" className="bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg " onClick={handleGetStarted}>
      Get Started Now
    </Button>
  </div>
</section>


      
        </main>
      </div>
      <Footer />
    </>
  );
}

