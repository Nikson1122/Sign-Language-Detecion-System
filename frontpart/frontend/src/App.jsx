// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";


function App() {
  return (
      <BrowserRouter>

         <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;
