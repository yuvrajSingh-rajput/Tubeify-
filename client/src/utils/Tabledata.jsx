import React, { useState, useEffect } from 'react';
import Button from '../utils/Button';

function Tabledata({ url, formats }) {
    const [mp3Files, setMp3Files] = useState([]);
    const [mp4Files, setMp4Files] = useState([]);

    useEffect(() => {
        if (!Array.isArray(formats)) {
            console.error('formats is not an array:', formats);
            return;
        }

        const newMp3Files = [];
        const newMp4Files = [];

        formats.forEach(format => {
            if (typeof format !== 'object') {
                console.error('Invalid format object:', format);
                return;
            }

            const requiredData = {
                itag: format.itag,
                quality: format.quality,
                container: format.container,
                size: format.size
            };

            if (format.isAudioOnly === true) {
                newMp3Files.push(requiredData);
            } else {
                newMp4Files.push(requiredData);
            }
        });

        setMp3Files(newMp3Files);
        setMp4Files(newMp4Files);
    }, [formats]);

    const renderTable = (files, title) => (
        <div className={`${title.toLowerCase()} mb-8 text-center`}>
            <h2 className="text-xl font-bold text-gray-800 mb-4">{title} Formats</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100 border-b-2 border-gray-300 text-center">
                    <tr>
                        <th className="px-4 py-2 ">{title === "Audio" ? "Audio Format" : "Video Format"}</th>
                        <th className="px-4 py-2 ">Size</th>
                        <th className="px-4 py-2 ">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {files.length > 0 ? (
                        files.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3">{title === "Audio" ? "♪ (.mp3)" : `${item.quality} (.mp4)`}</td>
                                <td className="px-4 py-3">{item.size}</td>
                                <td className="px-4 py-3 flex justify-center"><Button url={url} itag={item.itag} /></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="px-4 py-3" colSpan="3">No formats available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="tabledata px-6 py-6 bg-gray-100">
            {renderTable(mp3Files, "Audio")}
            {renderTable(mp4Files, "Video")}
        </div>
    );
}

export default Tabledata;
