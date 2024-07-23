import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotesContext } from '../NotesContext';
import homepic from '../resources/herosectionpic1.png'
import toast from "react-hot-toast"

function Home() {
    const [note, setNote] = useState('');
    const { notes, setNotes } = useContext(NotesContext);
    const navigate = useNavigate();
    const handleGoToDocuments = () => {
        navigate('/documents'); // Navigate to /documents when button is clicked
    };

    const handleSaveNote = () => {
        if (!note.trim()) {

            toast.error("Please type something.");
            return;
        }

        const newNote = { desc: note };
        setNotes([...notes, newNote]);
        setNote(''); // Clear the input after saving the note
        toast.success('Notes kept!')
        // navigate('/documents');
    };

    return (
        <div className='bg-zinc-300 p-4'>
            <div className='flex flex-col md:flex-row justify-around items-center w-full p-4'>
                <p className='text-[10vw] md:text-[13vw] text-center'>
                    Keeper.
                    <span className="block text-base md:text-lg font-thin mb-4">
                        Your own note keeping app
                    </span>
                </p>
                <button
                    onClick={handleGoToDocuments} // Add onClick handler for navigation
                    className="shadow-lg px-4 py-2 md:px-6 md:py-3 text-base md:text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 mt-4 md:mt-0"
                >
                    Take me to my docs.
                </button>
                <img src={homepic} alt="Home" className="w-3/4 md:w-80 h-auto mt-4 md:mt-0" />
            </div>




            <div className='flex flex-row justify-center items-center p-12'>
                <p className="text-2xl font-bold text-center lg:text-4xl">
                    Keeper makes it easier for you to keep a note of your thoughts and to see them floating.<br /> Yes, you heard it right.
                </p>
            </div>

            <div className="flex flex-col items-center h-screen bg-zinc-300 p-4">

                <p className="mb-6 text-gray-700">Type your note below and save it. You can view all your notes on the documents page.</p>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Type your note here..."
                    className="shadow-lg w-full max-w-md p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                    onClick={handleSaveNote}
                    className="shadow-lg px-4 py-2 text-xl bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                    Save Note
                </button>
            </div>
        </div>
    );
}

export default Home;
