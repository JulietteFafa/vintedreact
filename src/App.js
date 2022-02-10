import "./App.css";
//import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";

//1.lister les pages appli web
//2.creer un composant par page
//3. Creer les liens entre les pages

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* //route page acceuil */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />

          {/* route page offer */}
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
