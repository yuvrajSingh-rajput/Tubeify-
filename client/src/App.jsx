import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Inputbox from './components/Inputbox';
import Errorpage from './utils/Errorpage';
import Features from './components/Features';
import Allcards from './utils/Allcards';
import YouTubeDownloadSteps from './utils/YouTubeDownloadSteps';
import Guidelines from './components/Guidelines';
import Copyright from './utils/Copyright';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className=''>
        <div className="bg-slate-900 text-white text-center">
         <Navbar/>
         <Toaster position="top-center" reverseOrder={true} toastOptions={{ duration: 2000 }} />
         <Inputbox/>
        </div>
        <Features/>
        <Allcards/>
        <Guidelines/>
        <YouTubeDownloadSteps/>
        <Copyright/>
      </div>
    </>
  );
}

export default App;
