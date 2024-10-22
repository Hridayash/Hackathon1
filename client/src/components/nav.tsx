
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

export default function Nav(){
    return(

<header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to = "/home">
        <div>
        <h1 className="text-3xl font-bold text-teal-700">BlendIn</h1>
        <p className="text-xl text-emerald-600">Connect, Explore, Grow</p>
      </div>
        </Link>  
          <nav>
            <Link to={'/Explore'}><Button variant="ghost" className="mr-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50">Explore</Button></Link>
            <Link to={'/MyGroups'}><Button variant="ghost" className="mr-2 text-teal-600 hover:text-teal-700 hover:bg-teal-50">My Groups</Button></Link>
            <Link to={'/Profile'}><Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">Profile</Button></Link>
          </nav>
        </div>
      </header>

    );
}



