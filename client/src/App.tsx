import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./page/login";
import Dashboard from "./page/dashboard";
import Profile from "./page/profile";
import { MyGroups } from "./page/my-groups";
import { Explore } from "./page/explore";
import Signup from "./page/signup";
import FriendsPage from "./page/community-page";
import CulturalEvents from "./page/cultural-events";




const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} /> {/* Changed to lowercase */}
        <Route path="/mygroups" element={<MyGroups />} /> {/* Changed to lowercase */}
        <Route path="/explore" element={<Explore />} /> {/* Changed to lowercase */}
        <Route path="/friends" element={<FriendsPage/>} /> {/* Changed to lowercase */}
        <Route path="/cultural" element={<CulturalEvents/>} /> {/* Changed to lowercase */}
      
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
