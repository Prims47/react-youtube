import React from 'react';
import VideoItem from './video_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoItem key={video.etag} video={video} />
    });

    return (
        <ul className="list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;