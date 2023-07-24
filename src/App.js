import React from "react";
import './app.scss'
import Navbar from "./components/navbar/Navbar";
import TopDetails from "./components/topHead/TopDetails";
import Home from "./pages/home/Home";
import About from './pages/about/About'
import Service from './pages/services/Service'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <TopDetails />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />

      </Routes>
   
     
      <Footer />
    </>
  );
}

export default App;
