import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Navbar from "./components/NavBar";
import FirstTimePopup from "./components/FirstTimePopup";
// pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BookSession from "./pages/BookSession";

const App = () => {
  return (
    <Router>
      <Navbar />
      <FirstTimePopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-session" element={<BookSession />} />
      </Routes>
    </Router>
  );
};

export default App;
