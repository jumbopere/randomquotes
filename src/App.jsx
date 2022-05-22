import React from "react";
import { Quotes, Joker, Navbar, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const app = () => {
  return (
    <BrowserRouter>
      <div className=" bg-slate-900 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Quotes />} />
          <Route path="joker" element={<Joker />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default app;
