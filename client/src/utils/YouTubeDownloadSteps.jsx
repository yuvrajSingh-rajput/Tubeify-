import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
        number: 1,
        text: "Copy the youtube link of the video and paste it into the input line"
    },
    {
        number: 2,
        text: "Click \"Download\" and wait for the video to be ready."
    },
    {
        number: 3,
        text: "Select the desired download options and click \"Download\"."
    }
];

const YouTubeDownloadSteps = ({ variant = 'horizontal' }) => {
    return (
        <div className='bg-gray-100'>
            <div className={`max-w-4xl mx-auto p-6 ${variant === 'vertical' ? 'bg-gray-100 shadow-md' : ''}`}>
                <h2 className="text-2xl font-bold text-center mb-8">
                    How to download YouTube videos online via Tubeify
                </h2>
                <div className={`flex gap-3 ${variant === 'vertical' ? 'flex-col space-y-6' : 'justify-between items-start'}`}>
                    {steps.map((step, index) => (
                        <div key={step.number} className={`flex ${variant === 'vertical' ? 'items-start' : 'flex-col items-center'} ${variant === 'horizontal' ? 'flex-1' : ''}`}>
                            <div className={`bg-[#EC4899] text-white rounded-lg w-10 h-10 flex items-center justify-center font-bold text-xl ${variant === 'vertical' ? 'mr-4' : 'mb-4'}`}>
                                {step.number}
                            </div>
                            <p className={`text-gray-600 ${variant === 'vertical' ? 'flex-1' : 'text-center'}`}>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YouTubeDownloadSteps;