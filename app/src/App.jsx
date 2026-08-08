import { useState } from 'react'

import './App.css'

function App() {


  return (
   <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800 px-8 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h2 className="text-xl font-semibold">
          Prep AI
          </h2>
          <h3>Your interview, powered by AI.</h3>

          
        </div>
      </nav>

      {/* Hero */}
      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6  cursor-none inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-400 hover:text-lg">
           Practice . Perform . Improve
          </div>

         

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-10 text-slate-400">
            Practice technical interviews with an AI interviewer
            that adapts to your answers and provides personalized
            feedback on your performance.
          </p>

          <button
            className="mt-10 cursor-pointer rounded-lg bg-violet-700 px-7 py-3.5 font-semibold transition-all duration-200 hover:bg-violet-900 hover:text-lg"
          >
            Start Interview
          </button>

        </div>
      </main>

    </div>
  );
  
}

export default App
