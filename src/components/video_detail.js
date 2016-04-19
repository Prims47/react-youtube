import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <p>Loading</p>
    }

    const videoId = video.id.videoId;

    // V1
    //const embedUrl = 'https://www.youtube.com/embed/' + videoId;

    // V2
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={embedUrl}></iframe>
            </div>
            <div className="details">
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;