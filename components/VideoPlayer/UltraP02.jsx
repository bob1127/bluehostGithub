// components/VideoPlayer.jsx

import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js for dynamic imports



const DynamicReactPlayer = dynamic(() => import('react-player'));

const VideoPlayer = () => {
    const videoUrl = 'https://www.ultraehp.com/video/3C-極安檢測核心技術介紹-中文版(原檔).mp4'; // Path to your local video file

    const posterUrl = 'https://www.ultraehp.com/images/UP100/極安簡測 胃幽門桿菌產品介紹.webp'; // Path to your video poster image


    return (

        <div className="player-wrapper mt-[40px] w-full md:px-0 border-5 border-[#01a5d3]  mx-auto rounded-2xl overflow-hidden">
            {/* Set up the document head with relevant metadata */}



            {/* Lazy load the react-player component */}
            <DynamicReactPlayer
                url={videoUrl}
                className="react-player rounded-2xl"
                width="100%"
                height="100%"
                controls
                config={{
                    file: {
                        attributes: {
                            poster: posterUrl, // Specify the poster image
                        },
                    },
                }}

            />
        </div>
    );
};

export default VideoPlayer;
