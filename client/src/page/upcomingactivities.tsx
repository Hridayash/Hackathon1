import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react"; // Adjust based on your icon library
import Nav from '@/components/nav';

const UpcomingActivities = () => {
  const upcomingActivities = [
    {
      id: 1,
      name: "Floating Lanterns Festival",
      date: "2024-10-31",
      location: "Chiang Mai, Thailand",
      participants: 20,
      imageUrl: "https://www.wayfairertravel.com/hubfs/Imported_Blog_Media/floating_lanterns_chiang_mai_thailand_festivals.jpg",
    },
    {
      id: 2,
      name: "Cherry Blossom Viewing",
      date: "2024-04-01",
      location: "Tokyo, Japan",
      participants: 15,
      imageUrl: "https://richmondcherryblossomfest.ca/wp-content/uploads/2023/03/rcb2023.jpg",
    },
    {
      id: 3,
      name: "Carnival Festival",
      date: "2024-02-20",
      location: "Rio de Janeiro, Brazil",
      participants: 30,
      imageUrl: "https://www.sandals.co.uk/blog/content/images/2023/11/carnival-costume-feathers-trinidad-3-1.jpg",
    },
    // Add more activities as needed
  ];

  return (

    <>
     <Nav />
    <div className="container mx-auto py-10">
     
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Upcoming Activities</h3>
      {upcomingActivities.map((activity) => (
        <div key={activity.id} className="mb-8 last:mb-0 bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <img
              src={activity.imageUrl}
              alt={activity.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xl font-semibold text-gray-800">{activity.name}</h4>
              <Badge variant="outline" className="bg-teal-100 text-teal-700">
                {activity.participants} joined
              </Badge>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              <CalendarIcon className="inline-block mr-2 h-4 w-4" />
              {new Date(activity.date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <MapPinIcon className="inline-block mr-2 h-4 w-4" />
              {activity.location}
            </p>
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-colors duration-300">Join Activity</Button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default UpcomingActivities;
