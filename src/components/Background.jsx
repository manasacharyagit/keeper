import { Icon } from '@iconify/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Background() {
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate('/'); // Navigate to /documents when button is clicked
  };
  return (
    <>
      <div className="fixed top-4 left-4 z-20"> {/* Ensure the button is positioned within the viewport */}
        <button onClick={handleGoToHome} className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition duration-300">
          <Icon
            icon="lets-icons:back"
            style={{ color: '#cbd5e1' }} // Icon color
            className="text-xl" // Adjust icon size as needed
          />
          <span className="hidden md:inline">Back</span> {/* Optional text inside the button */}
        </button>
      </div>
      <div className="w-full h-screen fixed z-0 bg-zinc-300">
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl'>
          Documents
        </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>
          Keeper.
        </h1>
      </div>
    </>
  );
}

export default Background;
