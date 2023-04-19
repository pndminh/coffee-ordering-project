// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        
      </Routes>
    </React.Fragment>
  );
}

export default App;