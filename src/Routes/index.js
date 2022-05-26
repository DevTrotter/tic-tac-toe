import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Duo } from "../Pages/Duo/Duo";
import { Home } from "../Pages/Home/Home";
import { Solo } from "../Pages/Solo/Solo";

export const Index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/duo" element={<Duo />} />
        <Route exact path="/solo" element={<Solo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
