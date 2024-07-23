import React, { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    // Initialize notes from local storage, if available
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Save notes to local storage whenever they change
  useEffect(() => {
    console.log("Saving notes to local storage:", notes); // Debug log
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
