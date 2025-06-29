import React from "react";
import Home from "./pages/Home";
import SmokeBackground from "./components/SmokeBackground";
import Top from "./pages/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import All from "./components/All";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";

function App() {
  return (
    <>
      <ProductProvider>
        <SmokeBackground />
        <BrowserRouter>
          <ToastContainer />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top" element={<Top />} />
            <Route path="/all" element={<All />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </>
  );
}

export default App;
