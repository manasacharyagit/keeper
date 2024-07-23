import React, { useRef, useContext } from 'react';
import { NotesContext } from '../NotesContext';
import Card from './Card';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react/dist/iconify.js';

function Foreground() {
  const ref = useRef(null);
  const { notes, setNotes } = useContext(NotesContext);

  const handleDelete = (index) => {
    // Remove the note at the specified index
    setNotes(notes.filter((_, i) => i !== index));
    toast.success('One note has been deleted');
  };

  return (


    <div ref={ref} className="fixed top-0 left-0 z-10 w-full h-full flex gap-10 flex-wrap p-5">
      {notes.map((item, index) => (
        <Card
          key={index}
          data={item}
          reference={ref}
          onDelete={() => handleDelete(index)} // Pass delete handler
        />
      ))}
    </div>

  );
}

export default Foreground;
