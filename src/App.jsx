import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Portal from "./pages/Portal";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App(){
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portal" element={<Portal/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}