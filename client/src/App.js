// client/src/App.js

import React from "react";
import Login from "./Modules/LoginPage/login"; 
import Signup from "./Modules/LoginPage/signup";
import Home from "./Modules/LoginPage/home";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        {/* <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;