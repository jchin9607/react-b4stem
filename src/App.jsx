import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hack from "./Hackathon/Hack";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hack" element={<Hack />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
