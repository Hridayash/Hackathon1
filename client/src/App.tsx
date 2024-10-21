import {Route, Routes, BrowserRouter} from "react-router-dom"
import Dashboard from "./page/dashboard"
import Login from "./page/login"
import Signup from "./page/signup"

const  App: React.FC =  ()=> {


  return (
   <>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element ={<Dashboard />} />
              <Route path="/login" element ={<Login/>} />
              <Route path="/signup" element ={<Signup/>} />

            </Routes>
          </BrowserRouter>
   </>
    
    
  )
}

export default App
