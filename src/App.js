import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";

function App() {
  return (
    <div className="font min-vh-100">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/addVideogame" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
