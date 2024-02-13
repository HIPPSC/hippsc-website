import React from 'react';

// css
import '../css/VideoPlayer.css';

const VideoPlayer = ({ videoId }) => {


    if (!videoId) {
        return <p>Invalid YouTube URL provided.</p>;
    }
    const src = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-player" style={{ margin: '20px 0', textAlign: 'center' }}>
            <iframe
                width="560"
                height="315"
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="H6i Shrink Fit Machine"
            ></iframe>
        </div>
    );
};

export default VideoPlayer;