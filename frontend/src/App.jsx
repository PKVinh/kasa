import { BrowserRouter as Router, Route, Routes, } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";  
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import "./App.css"; 

function App() {
  return (
      <Router>
        <div className="container"> 
        <Header />
          <Routes>
            <Route path="/kasa" element={<Home />} />
            <Route path="/kasa/accommodation/:id" element={<Accommodation />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/kasa/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>  
  )
}

export default App
