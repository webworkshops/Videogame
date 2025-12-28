import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Inventory from "./pages/Inventory";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/videogames-ll8gea">
        <div className="flex flex-col min-h-screen bg-[#0f0f10]">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
