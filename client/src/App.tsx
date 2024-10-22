import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./page/Signup";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Login from "./page/login";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome to BlendIn!</h1>} /> {/* Optional homepage */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
