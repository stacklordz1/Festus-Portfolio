import React, { useState } from "react";


const App = () => {
  const [popUp, setPopUp] = useState(false)

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">

      <div className="relative flex flex-col items-center text-center">

        {/* 503 */}
        <h1 className="text-[10rem] md:text-[18rem] text-white/10 leading-none font-extrabold">
          503
        </h1>

        {/* Under Construction */}
        <p className="absolute top-1/2 -translate-y-10 
          whitespace-nowrap text-2xl md:text-5xl text-white/20 font-bold uppercase tracking-widest">
          Under Construction
        </p>

        {/* Button to view */}
        <button
          onClick={() => setPopUp(true)}
          className="relative flex items-center mt-10 text-2xl text-white/60 border border-white/20 px-6 py-3 font-semibold rounded-full hover:bg-white/20 transition"
        >
          {/* Pulsing dot */}
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-700 rounded-full animate-pulse" />

          {/* Button text */}
          <span className="ml-5">View Construction</span>
        </button>


      </div>

      <div>

      </div>


    </div>
  );
};

export default App;
