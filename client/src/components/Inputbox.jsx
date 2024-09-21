import React, { useState } from 'react';
import { RxEnter } from "react-icons/rx";
import Content from './Content';
import Errorpage from '../utils/Errorpage';
import toast from 'react-hot-toast';
import axios from 'axios';

function Inputbox() {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleGetVideoInfo = async () => {
        if (!url.trim()) {
            toast.error('Please enter a valid URL');
            return;
        }

        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await axios.post('/', {
                action: 'videoInfo',
                videoUrl: url,
            });

            setData(response.data);
        } catch (error) {
            console.error('Detailed error:', error);
            console.error('Response data:', error.response?.data);
            console.error('Response status:', error.response?.status);
            console.error('Response headers:', error.response?.headers);

            const errorMessage = error.response?.data?.error || error.message || 'An unexpected error occurred';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="py-11 px-5 text-center">
                <h1 className='text-4xl font-bold text-[#dbd6d6] mb-4'>YouTube Video Downloader</h1>
                <p className='text-gray-500 text-lg mb-6'>
                    Download online videos or convert videos to audio (mp3) for free.
                </p>
                <div className="flex justify-center items-center gap-2">
                    <input
                        type="text"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                        required
                        placeholder="Paste your URL here."
                        className="w-full max-w-lg px-4 text-black py-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-pink-500"
                    />
                    <button 
                        onClick={handleGetVideoInfo} 
                        className="bg-pink-500 text-white p-2 rounded-r-lg hover:bg-pink-600 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : <RxEnter className="text-2xl" />}
                    </button>
                </div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <Errorpage message={error} />}
            {data && <Content url={url} rawData={data} />}
        </>
    )
}

export default Inputbox;