import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import Property from "./pages/Property"
 
function App() {
  return <BrowserRouter>
   <Routes>      
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/property" element={<Property />} />
   </Routes>
  </BrowserRouter>
}

export default App
