import "./App.css";
import Navbar from "./component/navBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Crud from "./component/Crud";
import Table from './component/Table'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/crud" element={<Crud />}></Route>
        <Route path="/table" element={<Table />}></Route>
      </Routes>
  
    </>
    
  );
}

export default App;
