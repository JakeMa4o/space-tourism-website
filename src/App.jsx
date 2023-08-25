import AppCSS from "./App.module.scss";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";




function App() {

  const [pathNote, setPathNote] = useState(0);

  return (
    <div className={AppCSS.app}>
      <Routes>
        <Route path="/" element={<Home pathNote={pathNote} setPathNote={setPathNote}/>} />
        <Route path="/destination" element={<Destination pathNote={pathNote} setPathNote={setPathNote}/>} />
        <Route path="/crew" element={<Crew pathNote={pathNote} setPathNote={setPathNote}/>} />
        <Route path="/technology" element={<Technology pathNote={pathNote} setPathNote={setPathNote}/>} />
      </Routes>
    </div>
  )
}

export default App
