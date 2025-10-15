// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import WebcamPredictor from "./pages/WebcamPredictor";


function App() {
  return (
      <BrowserRouter>

         <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/sign" element={<Layout><WebcamPredictor /></Layout>} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;
