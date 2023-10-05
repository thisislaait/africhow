import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./Pages/Home";
import Campgrounds from "./Pages/Campgrounds";
import MountUlap from "./Pages/mount-ulap";
import CalaguasIsland from "./Pages/Calaguas-Island";
import Latik from "./Pages/latik-riverside";
import Onay from "./Pages/onay-beach";
import SSW from "./Pages/ssw";
import Buloy from "./Pages/buloy-springs";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campgrounds" element={<Campgrounds />} />
          <Route path="/mount-ulap" element={<MountUlap />} />
          <Route path="/calaguas-island" element={<CalaguasIsland />} />
          <Route path="/latik-riverside" element={<Latik />} />
          <Route path="/onay-beach" element={<Onay />} />
          <Route path="/seven-sisters-waterfall" element={<SSW />} />
          <Route path="/buloy-springs" element={<Buloy />} />
        </Routes>

        
      </div>
    </Router>

  );
}

export default App;
