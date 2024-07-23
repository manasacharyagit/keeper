import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NotesProvider } from "./NotesContext";
import Home from "./components/Home";
import Foreground from "./components/Foreground";
import Background from "./components/Background";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  return (
    <NotesProvider>
      <Toaster />
      <div className="relative">
        {location.pathname === "/documents" && <Background />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<Foreground />} />
        </Routes>
      </div>
    </NotesProvider>
  );
}

export default App;
