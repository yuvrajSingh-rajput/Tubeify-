import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { TfiDownload } from "react-icons/tfi";

const Button = ({ url, itag }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadItem = async () => {
    if (isDownloading) return; // Prevent duplicate clicks
    setIsDownloading(true);
    try {
      toast.success("download started");
      // Clean the URL by removing any extra parameters like 't'
      const cleanedUrl = new URL(url);
      cleanedUrl.searchParams.delete('t');
      const sanitizedUrl = cleanedUrl.toString();
      
      console.log('Sending request to server...', { url: sanitizedUrl, itag });
      const response = await axios.post('http://localhost:3000/', 
        { url: sanitizedUrl, itag, action: 'downloadVideo' },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          responseType: 'blob',
          withCredentials: true
        }
      );

      console.log('Response received:', response);
      toast.success("Video downloaded successfully");
    } catch (error) {
      console.error("Download error:", error);
      console.error("Error response:", error.response);
      toast.error(error.response?.data?.error || "Download failed");
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <button 
      onClick={handleDownloadItem} 
      disabled={isDownloading}
      className={`flex items-center justify-center gap-1 bg-green-700 w-fit px-2 text-white rounded-lg py-1 ${isDownloading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'}`}
    >
      <TfiDownload />
      {isDownloading ? 'Downloading...' : 'Download'}
    </button>
  )
}

export default Button;
